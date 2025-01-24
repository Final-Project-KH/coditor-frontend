// useSse.jsx
import { useState, useEffect, useRef } from "react";
import { EventSourcePolyfill } from "event-source-polyfill";
import Common from "../../../../util/Common";
import AxiosApi from "../../../../api/AxiosApi";

const useSse = ({ url, jobId, onMessage, onError }) => {
  const [shouldReconnect, setShouldReconnect] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [connectionStatus, setConnectionStatus] = useState("idle");

  // SSE 메시지 수신을 외부 컴포넌트로 전달하기 위한 콜백
  // 콜백은 ref로 관리하여, 재연결 시도를 방지
  const onMessageRef = useRef(onMessage);
  const onErrorRef = useRef(onError);

  // SSE 연결 객체 초기화
  const eventSource = useRef(null);

  // 마지막 수신 받은 메시지의 ID를 유지
  // 네트워크 장애로 메시지가 누락된 경우 서버로 전송하여 누락된 데이터 fetch 용도
  const lastEventIdRef = useRef(null);

  // 최신 콜백을 ref에 저장
  useEffect(() => {
    onMessageRef.current = onMessage;
  }, [onMessage]);

  useEffect(() => {
    onErrorRef.current = onError;
  }, [onError]);

  useEffect(() => {
    // 최초 실행 방지
    if (!jobId) return;

    const connectToSse = () => {
      const headers = {
        Authorization: `Bearer ${Common.getAccessToken()}`,
      };

      if (lastEventIdRef.current) {
        headers["Last-Event-ID"] = lastEventIdRef.current;
      }

      const eventSourceUrl = new URL(url);
      eventSourceUrl.searchParams.append("jobId", jobId);

      // 기본으로 제공되는 EventSource 클래스는 custom http header 설정을 지원하지 않음
      // 이를 지원하는 라이브러리(EventSourcePolyfill)를 사용하여 custom http header를 SSE 연결 요청 헤더에 포함
      eventSource.current = new EventSourcePolyfill(eventSourceUrl.toString(), {
        headers,
        withCredentials: true, // 쿠키를 자동으로 포함하도록 설정, 필요 시 사용
      });

      eventSource.current.onopen = () => {
        console.log("SSE 연결 성공");
        setConnectionStatus("connected");
        setRetryCount(0);
        const executeResponseData = AxiosApi.executeCode(jobId);
      };

      eventSource.current.onmessage = (event) => {
        console.log("Received message:", event.data);
        if (event?.data === "connected") return;

        // Event ID 업데이트
        lastEventIdRef.current = event.id;

        // 받은 메시지를 파싱하여 외부 콜백으로 전달 후 컴포넌트 업데이트
        if (onMessageRef.current) {
          try {
            const parsedData = JSON.parse(event.data);
            onMessageRef.current(parsedData);
          } catch (e) {
            console.error("JSON parse error:", e);
            // 연결 종료하고 외부 컴포넌트로 알려야 하지 않나
          }
        }
      };

      eventSource.current.onerror = (err) => {
        console.error("SSE error:", err);
        setConnectionStatus("error");

        if (onErrorRef.current) {
          onErrorRef.current(err);
        }

        // EventSource 연결을 수동으로
        // 종료하여 브라우저의 자동 재연결 메커니즘이 시도되지 않도록 처리
        eventSource.current.close();

        if (retryCount >= 2) {
          alert(
            "코드 실행 결과를 확인 할 수 없습니다. 잠시 후 다시 시도해주세요. 문제가 지속될 경우 관리자에게 문의 부탁드립니다."
          );
          eventSource.current.close();
          return;
        }

        // 직접 재연결 시도
        const retryDelay = Math.min(3000 * 2 ** retryCount, 30000);
        setTimeout(() => {
          setRetryCount((prev) => prev + 1);
          setShouldReconnect((prev) => !prev);
        }, retryDelay);
      };
    };

    connectToSse();

    // 컴포넌트 언마운트, useEffect의 재실행 시 아래 return 수행
    return () => {
      if (eventSource.current) {
        eventSource.current.close();
      }
    };
  }, [url, jobId, shouldReconnect, retryCount]);

  // useSse 훅이 호출된 컴포넌트에 마지막 이벤트 값을 반환
  // eventSource.onmessage 시점에 컴포넌트의 onMessage 콜백을 사용하고
  // 컴포넌트는 내부적으로 UI 업데이트를 위해 state를 업데이트 한다면, 아래 값은 최신화가 보장됨
  return { lastEventId: lastEventIdRef.current, connectionStatus };
};

export default useSse;
