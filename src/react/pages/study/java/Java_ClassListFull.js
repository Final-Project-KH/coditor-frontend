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
  PathLink,
  ClassNamePathLink,
  ClassHeaderTitlePathLink,
} from "../../../styles/study/Study";
import {useLocation, useNavigate} from "react-router-dom";

export const Java_ClassListFull_01 = forwardRef(({ firstpath, secondpath }, ref) => {
  const navigate = useNavigate();
  const thirdpath = "01. Java시작";
  const lowerpath = [
    "Java 시작하기",
    "Java 개발 환경 구축",
    "Java 프로젝트 생성 및 기본",
  ];

  const handleStudy = () => {
    navigate("/study", {
      state: {
        firstpath: firstpath,
      },
    });
  };
  const handleJava01 = () => {
    navigate("/study/java/01", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: thirdpath,
        lowerpath: lowerpath,
      },
    });
  };

  const handleJava0101 = () => {
    navigate("/study/java/01/01", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: thirdpath,
        lowerpath: lowerpath,
      },
    });
  };
  const handleJava0102 = () => {
    navigate("/study/java/01/02", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: thirdpath,
        lowerpath: lowerpath,
      },
    });
  };
  const handleJava0103 = () => {
    navigate("/study/java/01/03", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: thirdpath,
        lowerpath: lowerpath,
      },
    });
  };
  return (
    <>
      <EachClass ref={ref}>
        <ClassHeader>
          <ClassHeaderTitlePathLink onClick={() => handleJava01()}>
          <ClassHeaderTitle>{thirdpath}</ClassHeaderTitle>
          </ClassHeaderTitlePathLink>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>
              {/* <a href="/study/java/01/01" className="menu-link">
                Java 시작하기
              </a> */}
              <ClassNamePathLink onClick={() => handleJava0101()}>
                {lowerpath[0]}
              </ClassNamePathLink>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#28B657"}}>●</ClassStatusDot>
              <ClassStatusText>학습 완료</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              {/* <a href="/study/java/01/02" className="menu-link">
                Java 개발 환경 구축
              </a> */}
              <ClassNamePathLink onClick={() => handleJava0102()}>
                {lowerpath[1]}
              </ClassNamePathLink>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#28B657"}}>●</ClassStatusDot>
              <ClassStatusText>학습 완료</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              {/* <a href="/study/java/01/03" className="menu-link">
                Java 프로젝트 생성 및 기본
              </a> */}
              <ClassNamePathLink onClick={() => handleJava0103()}>
                {lowerpath[2]}
              </ClassNamePathLink>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#28B657"}}>●</ClassStatusDot>
              <ClassStatusText>학습 완료</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>
    </>
  );
});

export const Java_ClassListFull_02 = forwardRef(({ firstpath, secondpath }, ref) => {
  return (
    <>
      <EachClass ref={ref}>
        <ClassHeader>
          <ClassHeaderTitle>02. 기본 자료형과 연산자 / 제어문</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>
              <a href="/study/java/02/01" className="menu-link">
                변수와 자료형
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#28B657"}}>●</ClassStatusDot>
              <ClassStatusText>학습 완료</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/02/02" className="menu-link">
                변수와 시스템 입출력
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#28B657"}}>●</ClassStatusDot>
              <ClassStatusText>학습 완료</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/02/03" className="menu-link">
                연산자
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#28B657"}}>●</ClassStatusDot>
              <ClassStatusText>학습 완료</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/02/04" className="menu-link">
                조건문
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#28B657"}}>●</ClassStatusDot>
              <ClassStatusText>학습 완료</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/02/05" className="menu-link">
                반복문
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#28B657"}}>●</ClassStatusDot>
              <ClassStatusText>학습 완료</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>
    </>
  );
});

export const Java_ClassListFull_03 = forwardRef(({ firstpath, secondpath }, ref) => {
  return (
    <>
      <EachClass ref={ref}>
        <ClassHeader>
          <ClassHeaderTitle>03. 배열과 문자열(참조 타입)</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>
              <a href="/study/java/03/01" className="menu-link">
                참조 타입과 메모리 구조
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#28B657"}}>●</ClassStatusDot>
              <ClassStatusText>학습 완료</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/03/02" className="menu-link">
                배열
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#28B657"}}>●</ClassStatusDot>
              <ClassStatusText>학습 완료</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/03/03" className="menu-link">
                String
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#FF0000"}}>●</ClassStatusDot>
              <ClassStatusText>학습 중</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/03/04" className="menu-link">
                ✏️ 예제 : 회원정보
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>
    </>
  );
});

export const Java_ClassListFull_04 = forwardRef(({ firstpath, secondpath }, ref) => {
  return (
    <>
      <EachClass ref={ref}>
        <ClassHeader>
          <ClassHeaderTitle>04. 객체 지향 프로그래밍</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/01" className="menu-link">
                객체 지향 프로그래밍과 클래스
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/02" className="menu-link">
                메소드와 필드
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/03" className="menu-link">
                ✏️ 예제 : 영화표 예매
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/04" className="menu-link">
                this와 this()
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/05" className="menu-link">
                ✏️ 예제 : 아이패드 주문하기
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/06" className="menu-link">
                Method Overloading
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/07" className="menu-link">
                상속
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/08" className="menu-link">
                ✏️ 예제 : TV 만들기
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/09" className="menu-link">
                다형성
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/10" className="menu-link">
                super & super()
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/11" className="menu-link">
                접근 제한자 & Getter, Setter
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/12" className="menu-link">
                정적 멤버 & Method
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/13" className="menu-link">
                Singleton
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/14" className="menu-link">
                ✏️ 예제 : 에어컨 만들기
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/15" className="menu-link">
                추상 클래스
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/16" className="menu-link">
                Interface
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/17" className="menu-link">
                Default Method
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/18" className="menu-link">
                ✏️ 예제 : 자동차 만들기
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/19" className="menu-link">
                Down Casting & instance of
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/20" className="menu-link">
                객체를 배열로 관리하기
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/21" className="menu-link">
                다중 인터페이스와 상속
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/22" className="menu-link">
                익명 객체
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/23" className="menu-link">
                중첩 클래스와 중첩 인터페이스
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/24" className="menu-link">
                Template Method
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/25" className="menu-link">
                Annotation
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/04/26" className="menu-link">
                Package
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>
    </>
  );
});

export const Java_ClassListFull_05 = forwardRef(({ firstpath, secondpath }, ref) => {
  return (
    <>
      <EachClass ref={ref}>
        <ClassHeader>
          <ClassHeaderTitle>05. Java API 클래스</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>
              <a href="/study/java/05/01" className="menu-link">
                Java API
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/05/02" className="menu-link">
                Object 클래스
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/05/03" className="menu-link">
                StringBuffer, StringBuilder
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/05/04" className="menu-link">
                Math 클래스
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/05/05" className="menu-link">
                Enum 클래스
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/05/06" className="menu-link">
                Date & Calendar 클래스
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/05/07" className="menu-link">
                Wrapper 클래스
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/05/08" className="menu-link">
                Arrays 클래스
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/05/09" className="menu-link">
                System 클래스
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/05/10" className="menu-link">
                String Tokenizer
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/05/11" className="menu-link">
                Class 클래스
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>
    </>
  );
});

export const Java_ClassListFull_06 = forwardRef(({ firstpath, secondpath }, ref) => {
  return (
    <>
      <EachClass ref={ref}>
        <ClassHeader>
          <ClassHeaderTitle>06. 제네릭 / 컬렉션 프레임워크</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>
              <a href="/study/java/06/01" className="menu-link">
                제네릭
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/06/02" className="menu-link">
                컬렉션 프레임워크
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/06/03" className="menu-link">
                List
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/06/04" className="menu-link">
                Map
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/06/05" className="menu-link">
                Set Interface
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/06/06" className="menu-link">
                검색기능을 강화시킨 컬렉션
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/06/07" className="menu-link">
                Comparable & Comparator
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/06/08" className="menu-link">
                LIFO와 FIFO
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/06/09" className="menu-link">
                Iterator와 향상된 for문
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/06/10" className="menu-link">
                ✏️ 예제 : 컬렉션 프레임워크
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>
    </>
  );
});

export const Java_ClassListFull_07 = forwardRef(({ firstpath, secondpath }, ref) => {
  return (
    <>
      <EachClass ref={ref}>
        <ClassHeader>
          <ClassHeaderTitle ref={ref}>07. Thread / 예외 처리</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>
              <a href="/study/java/07/01" className="menu-link">
                Thread
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/07/02" className="menu-link">
                ✏️ 예제 : RPG 게임 만들기
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/07/03" className="menu-link">
                예외 처리
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>
    </>
  );
});

export const Java_ClassListFull_08 = forwardRef(({ firstpath, secondpath }, ref) => {
  return (
    <>
      <EachClass ref={ref}>
        <ClassHeader>
          <ClassHeaderTitle>08. 람다와 스트림 / 입력과 출력</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>
              <a href="/study/java/08/01" className="menu-link">
                함수형 프로그래밍
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/08/02" className="menu-link">
                스트림
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/08/03" className="menu-link">
                입출력 스트림
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>
    </>
  );
});

export const Java_ClassListFull_09 = forwardRef(({ firstpath, secondpath }, ref) => {
  return (
    <>
      <EachClass ref={ref}>
        <ClassHeader>
          <ClassHeaderTitle>09. 네트워킹</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>
              <a href="/study/java/09/01" className="menu-link">
                웹의 개요
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/09/02" className="menu-link">
                TCP / IP와 소켓 통신
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/09/03" className="menu-link">
                TCP 네트워킹
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/09/04" className="menu-link">
                Server (단일 채팅 서버)
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/09/05" className="menu-link">
                Client (단일 채팅 클라이언트)
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/09/06" className="menu-link">
                socket을 이용한 다중 채팅
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/09/07" className="menu-link">
                직렬화를 이용한 네트워크
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{color: "#313131"}}>●</ClassStatusDot>
              <ClassStatusText>학습 전</ClassStatusText>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>
    </>
  );
});

const Java_ClassListFull = ({ firstpath, secondpath, refs }) => {
  return (
    <>
      <Java_ClassListFull_01 ref={refs.section01} firstpath={firstpath} secondpath={secondpath} />
      <Java_ClassListFull_02 ref={refs.section02} firstpath={firstpath} secondpath={secondpath} />
      <Java_ClassListFull_03 ref={refs.section03} firstpath={firstpath} secondpath={secondpath} />
      <Java_ClassListFull_04 ref={refs.section04} firstpath={firstpath} secondpath={secondpath} />
      <Java_ClassListFull_05 ref={refs.section05} firstpath={firstpath} secondpath={secondpath} />
      <Java_ClassListFull_06 ref={refs.section06} firstpath={firstpath} secondpath={secondpath} />
      <Java_ClassListFull_07 ref={refs.section07} firstpath={firstpath} secondpath={secondpath} />
      <Java_ClassListFull_08 ref={refs.section08} firstpath={firstpath} secondpath={secondpath} />
      <Java_ClassListFull_09 ref={refs.section09} firstpath={firstpath} secondpath={secondpath} />
    </>
  );
};

export default Java_ClassListFull;
