import { useState, useRef, useCallback } from "react";
import { Base64 } from "js-base64";

import MonacoEditor from "./MonacoEditor";
import ExecutionResultViewer from "./ExecutionResultViewer";
import useSse from "../customhook/useSse";
import AxiosApi from "../../../../api/AxiosApi";
import {
  LeftContainer,
  RightContainer,
  Container,
  ChallengeTitle,
  ChallengeDesc,
  ChallengeOutputsEx,
} from "../../../styles/codingtest/ChallengeStyles";

const EDITOR_DEFAULT_VALUE = {
  java: "public class Main {\n\tpublic static void main(String[] args) {\n\t\t// 코드를 입력하세요\n\t}\n}",
  c: "#include<stdio.h>\n\nvoid main() {\n\t// 코드를 입력하세요\n}",
};

const CodeChallengeViewer = ({ language }) => {
  const [codeEditorValue, setCodeEditorValue] = useState(
    EDITOR_DEFAULT_VALUE[language.toLowerCase()]
  );
  const [results, setResults] = useState(null);

  // SSE 연결이 반복되지 않도록 useCallback 사용
  const handleOpen = useCallback((numOfTestcase) => {
    const resultToUpdate = {};
    for (let i = 1; i <= numOfTestcase; i++) {
      resultToUpdate[i] = {};
    }
    setResults(resultToUpdate);
  }, []);

  const handleMessage = useCallback((data) => {
    console.log("Testcase Result:", data);

    // 컴파일 & 런타임 에러 시
    if (!data.success && data.detail) {
      setResults((prev) => ({
        ...prev,
        [data.idx]: {
          success: data.success,
          error: data.error,
          detail: data.detail,
        },
      }));
    }
    // 테스트케이스 통과 시
    else if (data.success) {
      setResults((prev) => ({
        ...prev,
        [data.idx]: {
          success: data.success,
          memoryUsage: data.memoryUsage,
          runningTime: data.runningTime,
        },
      }));
    }
    // 테스트케이스 탈락 시
    else if (!data.success && !data.error && !data.detail) {
      setResults((prev) => ({
        ...prev,
        [data.idx]: {
          success: data.success,
          memoryUsage: data.memoryUsage,
          runningTime: data.runningTime,
        },
      }));
    }
  }, []);

  const handleError = useCallback((errorMessage) => {
    alert(errorMessage);
  }, []);

  const handleComplete = useCallback(() => {
    alert("코드 실행이 완료되었습니다.");
    console.log("SSE Complete");
  }, []);

  // 코드 실행 작업의 고유 식별자
  const jobIdRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setResults(null);

    const submitResponseData = await AxiosApi.submitCode({
      codeLanguage: language.toUpperCase(),
      code: Base64.encode(codeEditorValue),
      questionId: 2,
    });

    // 토큰 재발급 과정임
    if (submitResponseData === null) return;

    // 조건문 내부 값이 undefined면 falsy 값
    if (!submitResponseData["jobId"]) {
      const errorMessage = submitResponseData["error"];
      alert(errorMessage);
      return;
    }

    jobIdRef.current = submitResponseData["jobId"];
    connect();
  };

  const { connect } = useSse({
    jobId: jobIdRef.current,
    onOpen: handleOpen,
    onMessage: handleMessage,
    onError: handleError,
    onComplete: handleComplete,
  });

  return (
    <Container>
      <LeftContainer>
        <MonacoEditor
          codeLanguage={language.toLowerCase()}
          value={codeEditorValue}
          setValue={setCodeEditorValue}
        />
        <div>{"========"}</div>
        <ExecutionResultViewer results={results} />
        <button onClick={handleSubmit}>코드 제출</button>
      </LeftContainer>
      <div style={{ whiteSpace: "pre-wrap" }}>{"==\n==\n==\n=="}</div>
      <RightContainer>
        <ChallengeTitle>
          <div>
            <span>{"문제 이름"}</span>
          </div>
          <div>
            <span>{"두 정수의 덧셈"}</span>
          </div>
        </ChallengeTitle>
        <ChallengeDesc>
          <div>
            <span>{"설명"}</span>
          </div>
          <div>
            <span>{"문제"}</span>
            <p>
              {
                "두 정수가 줄바꿈 문자로 구분되어 입력으로 주어집니다. 두 정수의 합을 구하여 출력하는 코드를 작성하세요."
              }
            </p>
            <span>{"입력 값 조건"}</span>
            <p>{"-100,000 <= x, y <= 100,000"}</p>
            <span>{"시스템 제한사항"}</span>
            <p>{"메모리: 128mb\n" + "실행 시간: 5초 이내"}</p>
          </div>
        </ChallengeDesc>
        <ChallengeOutputsEx>
          <section>
            <div>
              <span>{"입력 예시"}</span>
            </div>
            <div>
              <table>
                <colgroup>
                  <col style={{ width: "50%" }} />
                  <col style={{ width: "50%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>x</th>
                    <th>y</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>5</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td>-2</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <div>
              <span>{"출력 예시"}</span>
            </div>
            <div>
              <table>
                <colgroup>
                  <col style={{ width: "100%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>결과</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </ChallengeOutputsEx>
      </RightContainer>
    </Container>
  );
};

export default CodeChallengeViewer;
