import React, { forwardRef } from "react";

import {
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassName,
  ClassContents,
  ClassStatus,
  ClassStatusDot,
  ClassStatusText,
  ClassSet,
} from "../../../styles/study/Study";

export const C_ClassListFull_01 = forwardRef((props, ref) => {
  return (
    <>
      <EachClass ref={ref}>
        <ClassHeader>
          <ClassHeaderTitle>01. C 기본</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>
              <a href="/study/c/01/01" className="menu-link">
                C언어의 특징
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/c/01/02" className="menu-link">
                개발 환경 구축 및 터미널 명령어
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/c/01/03" className="menu-link">
                기본
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>
    </>
  );
});

export const C_ClassListFull_02 = forwardRef((props, ref) => {
  return (
    <>
      <EachClass ref={ref}>
        <ClassHeader>
          <ClassHeaderTitle>02. 자료형과 연산자</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>
              <a href="/study/c/02/01" className="menu-link">
                입출력
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/c/02/02" className="menu-link">
                데이터형
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/c/02/03" className="menu-link">
                변수와 상수
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/c/02/04" className="menu-link">
                ASCII?
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/c/02/05" className="menu-link">
                연산자
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/c/02/06" className="menu-link">
                자료형 변환
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>
    </>
  );
});

export const C_ClassListFull_03 = forwardRef((props, ref) => {
  return (
    <>
      <EachClass ref={ref}>
        <ClassHeader>
          <ClassHeaderTitle>03. 제어문</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>
              <a href="/study/c/03/01" className="menu-link">
                조건문
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/c/03/02" className="menu-link">
                반복문
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/c/03/03" className="menu-link">
                ✏️ 예제 : 회원정보 출력
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>
    </>
  );
});

export const C_ClassListFull_04 = forwardRef((props, ref) => {
  return (
    <>
      <EachClass ref={ref}>
        <ClassHeader>
          <ClassHeaderTitle>04. 배열과 문자열</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>
              <a href="/study/c/04/01" className="menu-link">
                배열
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/c/04/02" className="menu-link">
                문자열
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>
    </>
  );
});

export const C_ClassListFull_05 = forwardRef((props, ref) => {
  return (
    <>
      <EachClass ref={ref}>
        <ClassHeader>
          <ClassHeaderTitle>05. 함수 및 자료 처리</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>
              <a href="/study/c/05/01" className="menu-link">
                함수
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/c/05/02" className="menu-link">
                포인터
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/c/05/03" className="menu-link">
                동적 할당
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/c/05/04" className="menu-link">
                구조체
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/c/05/05" className="menu-link">
                파일 입출력
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/c/05/06" className="menu-link">
                기타
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/c/05/07" className="menu-link">
                ✏️ 예제 : 에어컨 만들기
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>
    </>
  );
});

const C_ClassListFull = ({ refs }) => {
  return (
    <>
      <C_ClassListFull_01 ref={refs.section01} />
      <C_ClassListFull_02 ref={refs.section02} />
      <C_ClassListFull_03 ref={refs.section03} />
      <C_ClassListFull_04 ref={refs.section04} />
      <C_ClassListFull_05 ref={refs.section05} />
    </>
  );
};

export default C_ClassListFull;
