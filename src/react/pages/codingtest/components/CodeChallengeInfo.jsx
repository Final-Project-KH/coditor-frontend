import { CodeChallengeInfoStyles as CssWrapper } from "../../../styles/codingtest/CodeChallengeInfoStyles";

const CodeChallengeInfo = () => {
  return (
    <CssWrapper>
      <div className="challenge-title">
        <div>
          <span>{"문제 이름"}</span>
        </div>
        <div>
          <p>{"두 정수의 덧셈"}</p>
        </div>
      </div>
      <div className="challenge-desc">
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
      </div>
      <div className="challenge-io-example">
        <div>
          <span>{"문제 정답 예시"}</span>
        </div>
        <div>
          <table>
            <colgroup>
              <col style={{ width: "33.33%" }} />
              <col style={{ width: "33.33%" }} />
              <col style={{ width: "33.33%" }} />
            </colgroup>
            <thead>
              <tr>
                <th>x</th>
                <th>y</th>
                <th>answer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5</td>
                <td>7</td>
                <td>12</td>
              </tr>
              <tr>
                <td>-2</td>
                <td>3</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </CssWrapper>
  );
};

export default CodeChallengeInfo;
