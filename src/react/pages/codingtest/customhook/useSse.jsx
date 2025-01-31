// useSse.jsx
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { EventSourcePolyfill } from "event-source-polyfill";
import AxiosApi from "../../../../api/AxiosApi";

const SPRING_DOMAIN = "http://localhost:8111";
const OPEN_TIMEOUT = 10000; // onopen 타임아웃 (10초)
const MESSAGE_TIMEOUT = 20000; // onmessage 타임아웃 (20초)

const useSse = ({ jobId, onOpen, onMessage, onError, onComplete }) => {
  // useEffect 내부에서 RECONNECT를 발생 시키기 위한 state
  const [shouldConnect, setShouldConnect] = useState(false);

  // SSE 연결 객체 초기화
  const eventSource = useRef(null);

  // 전체 메시지 수(테스트 케이스 수) 유지
  const numOfTestcaseRef = useRef(null);

  // 마지막 수신 받은 메시지의 ID를 유지
  // 네트워크 장애로 메시지가 누락된 경우 서버로 전송하여 누락된 데이터 fetch 용도
  const lastEventIdRef = useRef(null);

  // 토큰 state 추적
  // 실제로 바뀌지 않았으면 업데이트 되지 않음
  const accessToken = useSelector((state) => state.auth.accesstoken);

  // 타임아웃 ID 추적
  const openTimeoutIdRef = useRef(null);
  const messageTimeoutIdRef = useRef(null);

  // 새로고침 여부 추적
  const isReloading = useRef(false);

  useEffect(() => {
    // 새로고침 여부 감지 (sessionStorage 활용)
    if (sessionStorage.getItem("isReloading") === "true") {
      isReloading.current = true;
      sessionStorage.removeItem("isReloading"); // 플래그 초기화
    }

    // 새로고침 이벤트 감지
    const handleBeforeUnload = () => {
      isReloading.current = true;
      sessionStorage.setItem("isReloading", "true");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // 타임아웃 처리 함수
  const handleTimeout = (type) => {
    if (eventSource.current) {
      eventSource.current.close();
    }

    onError(
      type === "onopen"
        ? "Connection could not be established within 10 seconds"
        : "No message received within 20 seconds"
    );
  };

  // onopen 타임아웃 설정
  const startOpenTimeout = () => {
    openTimeoutIdRef.current = setTimeout(() => {
      handleTimeout("onopen");
    }, OPEN_TIMEOUT);
  };

  // onmessage 타임아웃 설정
  const startMessageTimeout = () => {
    messageTimeoutIdRef.current = setTimeout(() => {
      handleTimeout("onmessage");
    }, MESSAGE_TIMEOUT);
  };

  useEffect(() => {
    // 최초 실행 방지
    if (!jobId) return;

    const connectToSse = () => {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      // if (lastEventIdRef.current) {
      //   headers["Last-Event-ID"] = lastEventIdRef.current;
      // }

      const eventSourceUrl = new URL(
        `${SPRING_DOMAIN}/api/code-challenge/subscribe`
      );
      eventSourceUrl.searchParams.append("jobId", jobId);

      // 기본으로 제공되는 EventSource 클래스는 custom http header 설정을 지원하지 않음
      // 이를 지원하는 라이브러리(EventSourcePolyfill)를 사용하여 custom http header를 SSE 연결 요청 헤더에 포함
      eventSource.current = new EventSourcePolyfill(eventSourceUrl.toString(), {
        headers,
        withCredentials: true, // 쿠키를 자동으로 포함하도록 설정, 필요 시 사용
      });

      // onopen 타임아웃 시작
      startOpenTimeout();

      eventSource.current.onopen = async () => {
        if (openTimeoutIdRef.current) {
          clearTimeout(openTimeoutIdRef.current);
        }

        const responseData = await AxiosApi.executeCode(jobId);
        // 조건문 내부 값이 undefined면 falsy 값
        if (!responseData["numOfTestcase"]) {
          const errorMessage = responseData["error"];
          eventSource.current.close();
          onError(errorMessage);
          console.error(
            "SSE 연결에 성공했지만, 테스트 케이스의 갯수를 확인할 수 없습니다."
          );
          return;
        }

        // 테스트 케이스 수 업데이트
        numOfTestcaseRef.current = parseInt(responseData["numOfTestcase"]);

        onOpen(numOfTestcaseRef.current);

        // onmessage 타임아웃 시작
        startMessageTimeout();
        return;
      };

      eventSource.current.onmessage = async (event) => {
        // SSE 연결 open 전용 메시지는 무시
        if (event.data === "Connection Established") {
          return;
        }

        if (messageTimeoutIdRef.current) {
          clearTimeout(messageTimeoutIdRef.current);
        }

        // Event ID 업데이트
        lastEventIdRef.current = parseInt(event.lastEventId);

        // 받은 메시지를 파싱하여 외부 콜백으로 전달 후 컴포넌트 업데이트
        const parsedData = JSON.parse(event.data);
        parsedData["idx"] = event.lastEventId;
        onMessage(parsedData);

        // 모두 수신한 경우 완료 처리
        if (lastEventIdRef.current === numOfTestcaseRef.current) {
          if (messageTimeoutIdRef.current) {
            clearTimeout(messageTimeoutIdRef.current);
          }

          eventSource.current.close();

          // 추적 값 초기화
          lastEventIdRef.current = null;
          numOfTestcaseRef.current = null;

          onComplete();
          return;
        }

        startMessageTimeout();
      };

      eventSource.current.onerror = (err) => {
        if (openTimeoutIdRef.current) {
          clearTimeout(openTimeoutIdRef.current);
        }

        if (messageTimeoutIdRef.current) {
          clearTimeout(messageTimeoutIdRef.current);
        }

        // EventSource 연결을 수동으로
        // 종료하여 브라우저의 자동 재연결 메커니즘이 시도되지 않도록 처리
        eventSource.current.close();

        // 새로고침된 경우 onError 실행 방지
        if (isReloading.current) {
          console.warn(
            "새로고침으로 인해 SSE 연결이 종료됨. onError 실행 안 함."
          );
          isReloading.current = false;
          return;
        }

        console.error(err);
        onError(
          "서버와 연결이 불안정합니다. 네트워크 연결 상태를 확인해주세요."
        );
        return;
      };
    };

    connectToSse();

    // 컴포넌트 언마운트, useEffect의 재실행 시 아래 return 수행
    return () => {
      if (openTimeoutIdRef.current) {
        clearTimeout(openTimeoutIdRef.current);
      }

      if (messageTimeoutIdRef.current) {
        clearTimeout(messageTimeoutIdRef.current);
      }

      if (eventSource.current) {
        eventSource.current.close();
      }
    };
  }, [shouldConnect]);

  return { connect: () => setShouldConnect((prev) => !prev) };
};

export default useSse;
