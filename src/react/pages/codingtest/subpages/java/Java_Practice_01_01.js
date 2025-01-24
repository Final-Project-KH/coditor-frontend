import {
  LeftContainer,
  RightContainer,
  Container,
  TopBox,
  TopBoxWide,
  TopBoxText,
  TopBoxArrow,
  Wrap,
} from "../../../../styles/codingtest/java/CodingTestJava";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import MonacoEditor from "../../components/MonacoEditor";
import Console from "../../components/Console";
import { useEffect, useState, useCallback } from "react";
import ScrollToTopButton from "../../../ScrollToTopButton";
import useSse from "../../customhook/useSse";
import AxiosApi from "../../../../../api/AxiosApi";

const SPRING_DOMAIN = "http://localhost:8111";

const CT_Java_Practice_01_01 = () => {
  /****************************************************
   * 1. 상단 네비게이터 초기화
   ***************************************************/

  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath, thirdpath, fourthpath, lowerpath } =
    location.state || {};
  const { mainContentRef } = useOutletContext();

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  const handleCodingTest = () => {
    navigate("/codingtest", {
      state: {
        firstpath: firstpath,
      },
    });
  };

  const handleCodingTestJava = () => {
    navigate("/codingtest/java", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
  };

  const handleCodingTestJavaPractice = () => {
    navigate(`/codingtest/java/practice`, {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: thirdpath,
      },
    });
  };
  const handleCodingTestJavaPractice01 = () => {
    navigate(`/codingtest/java/practice/01`, {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: thirdpath,
        fourthpath: fourthpath,
      },
    });
  };
  const handleRefresh = () => {
    navigate(`/codingtest/java/practice/01/01`, {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: thirdpath,
        fourthpath: fourthpath,
        lowerpath: lowerpath,
      },
    });
    window.location.reload();
  };

  /****************************************************
   * 2. 코드 제출 및 SSE 관련 처리
   ***************************************************/

  // SSE 메시지 수신 및 오류 발생 시 사용되는 콜백 함수로,
  // SSE 연결이 반복되지 않도록 useCallback 사용
  const handleMessage = useCallback((data) => {
    console.log("Testcase Result:", data);
  }, []);

  const handleError = useCallback((error) => {
    console.error("SSE Error:", error);
  }, []);

  // 코드 실행 작업의 고유 식별자
  const [jobId, setJobId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitResponseData = await AxiosApi.submitCode({
      codeLanguage: "JAVA",
      code: "aW1wb3J0IGphdmEudXRpbC5TY2FubmVyOwoKcHVibGljIGNsYXNzIE1haW4gewogICAgcHVibGljIHN0YXRpYyB2b2lkIG1haW4oU3RyaW5nW10gYXJncykgewogICAgICAgIFNjYW5uZXIgc2MgPSBuZXcgU2Nhbm5lcihTeXN0ZW0uaW4pOwogICAgICAgIFN0cmluZyBpbnB1dCA9IHNjLm5leHRMaW5lKCk7CiAgICAgICAgU3lzdGVtLm91dC5wcmludGxuKHJldmVyc2VTdHJpbmcoaW5wdXQpKTsKICAgIH0KCiAgICBwdWJsaWMgc3RhdGljIFN0cmluZyByZXZlcnNlU3RyaW5nKFN0cmluZyBpbnB1dCkgewogICAgICAgIFN0cmluZ0J1aWxkZXIgcmV2ZXJzZWQgPSBuZXcgU3RyaW5nQnVpbGRlcihpbnB1dCk7CiAgICAgICAgcmV0dXJuIHJldmVyc2VkLnJldmVyc2UoKS50b1N0cmluZygpOwogICAgfQp9",
      questionId: 2,
    });

    // undefined면 falsy 값,
    if (!submitResponseData["jobId"]) {
      const errorMessage = submitResponseData["error"];
      alert(errorMessage);
      return;
    }
    setJobId(submitResponseData["jobId"]);
  };

  const { lastEventId, connectionStatus } = useSse({
    url: `${SPRING_DOMAIN}/api/code-challenge/subscribe`,
    jobId,
    onMessage: handleMessage,
    onError: handleError,
  });

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxText onClick={() => handleCodingTest()}>
            {firstpath}
          </TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleCodingTestJava()}>
            {secondpath}
          </TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleCodingTestJavaPractice()}>
            {thirdpath}
          </TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleCodingTestJavaPractice01()}>
            {fourthpath}
          </TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleRefresh()}>{lowerpath}</TopBoxText>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <button onClick={handleSubmit}>코드 제출</button>
          <MonacoEditor codeLanguage={secondpath} />
          <Console />
        </LeftContainer>
        <RightContainer></RightContainer>
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};

export default CT_Java_Practice_01_01;
