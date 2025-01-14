import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/a11y-dark.css";

import {
  Wrap,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxWide,
  Container,
  LeftContainer,
  RightContainer,
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassHeaderTitleButton,
  ClassContents,
  ClassSet,
  ClassName,
} from "../../../styles/study/Class_Main";
import {
  ClassContentsTitle1,
  ClassContentsText,
  ClassContentsContainer,
  ClassContentsTitle2,
  ClassContentsTitle3,
  ClassContentsTextTab,
  ClassContentsImage,
  ClassContentsCodeBox,
  ClassContentsCode,
  ClassTable,
  ClassTableTd,
  ClassTableTr,
  ArrowContainer,
  LeftArrow,
  RightArrow,
  ArrowLink,
} from "../../../styles/study/Class_Each";
import { StickyClassBox } from "../../../styles/study/Study";
import Java_Title from "./Java_Title";
import { JavaStudyChapter } from "../../../../util/study/JavaStudyChapter";
import ArrowNavigation from "../ArrowNavigation";

const Java_01_02 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath, thirdpath, fourthpath } = location.state || {};

  const handleStudy = () => {
    navigate("/study", {
      state: {
        firstpath: firstpath,
      },
    });
  };
  const handleStudyJava = () => {
    navigate("/study/java", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
  };
  const handleStudyJava01 = () => {
    navigate("/study/java/01", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: thirdpath,
      },
    });
  };
  const handleRefresh = () => {
    navigate("/study/java/01/02", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: thirdpath,
        fourthpath: fourthpath,
      },
    });
    window.location.reload();
  };

  const handleNext = (cls) => {
    navigate(`/study/java/${cls.id}`, {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: cls.title,
      },
    });
  };

  // 챕터리스트 토글링 및 간소화
  const handleNavigation = (navigatepath, data) => {
    navigate(navigatepath, { state: data });
  };

  const [isToggleOpenId, setIsToggleOpenId] = useState([]);

  const toggleVisibility = (id) => {
    setIsToggleOpenId((prevId) =>
      prevId.includes(id) ? prevId.filter((i) => i !== id) : [...prevId, id]
    );
  };

  const updatedJavaStudyChapter = JavaStudyChapter.map((menu) => ({
    ...menu,
    contents: menu.contents.map((content) => ({
      ...content,
      label: content.label,
      navigatepath: content.navigatepath,
      firstpath: firstpath,
      secondpath: secondpath,
      thirdpath: content.thirdpath,
    })),
  }));

  // 좌측 스터디 영역 컴포넌트로 분리
  const EachClassComponent = ({ cls, isOpen, onToggle }) => (
    <EachClass key={cls.id}>
      <ClassHeader isOpen={isOpen}>
        <ClassHeaderTitle onClick={() => handleNext(cls)}>
          {cls.title}
        </ClassHeaderTitle>
        <ClassHeaderTitleButton
          isOpen={isOpen}
          onClick={() => onToggle(cls.id)}
        />
      </ClassHeader>
      <ClassContents isOpen={isOpen}>
        {cls.contents.map((content, index) => (
          <ClassSet key={index}>
            <ClassName
              onClick={() =>
                handleNavigation(content.navigatepath, {
                  firstpath: firstpath,
                  secondpath: secondpath,
                  thirdpath: content.thirdpath,
                  fourthpath: content.label,
                })
              }
            >
              {content.label}
            </ClassName>
          </ClassSet>
        ))}
      </ClassContents>
    </EachClass>
  );

  const filteredJavaStudyChapter = updatedJavaStudyChapter.filter(
    (chapter) => chapter.id === "01"
  );

  const TopicCodeBlock = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);

    return (
      <pre>
        <code>
          <div>안녕하세요</div>
          <div>제니입니다</div>
        </code>
      </pre>
    );
  };

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxText onClick={() => handleStudy()}>{firstpath}</TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleStudyJava()}>
            {secondpath}
          </TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleStudyJava01()}>
            {thirdpath}
          </TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleRefresh()}>{fourthpath}</TopBoxText>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <Java_Title />
          <StickyClassBox>
            {filteredJavaStudyChapter.map((cls) => (
              <EachClassComponent
                key={cls.id}
                cls={cls}
                isOpen={isToggleOpenId.includes(cls.id)}
                onToggle={toggleVisibility}
              />
            ))}
          </StickyClassBox>
        </LeftContainer>
        <RightContainer>
          <EachClass>
            <ClassHeader>
              <ClassHeaderTitle>Java 프로젝트 생성 및 기본</ClassHeaderTitle>
            </ClassHeader>
            <ClassContentsContainer>
              <TopicCodeBlock />
              <ClassContentsText>
                자바 개발을 위해 자바와 자바 프로그래밍을 위한 통합 개발
                환경(Integrated Development Environment)이 필요 합니다.
                통합개발환경에는 이클립스, 인텔리제이, VS Code 등이 있으며,
                인텔리제이를 주로 사용하도록 하겠습니다.
              </ClassContentsText>
              <ClassContentsTitle2>프로그램 설치</ClassContentsTitle2>
              <hr />
              <ClassContentsTitle3>JDK 설치</ClassContentsTitle3>
              <ClassContentsText>
                <a href="https://oracle.com">https://oracle.com</a> 접속
                <br />
                Java SE Development Kit 11.0.15
                <br />
                오라클 계정 생성 필요
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>인텔리제이 설치</ClassContentsTitle3>
              <ClassContentsText>
                주로 자바 개발시 이클립스와 더불어 많이 사용되고 있으며,
                이클립스 보다 더 많은 장점을 가지고 있어 인텔리제이를 통합 개발
                환경(IDE)로 사용하도록 하겠습니다.
                <br />
                상용 버전인 Uitimate 버전과 무료 버전이 Community 버전이
                존재하며 Community 버전으로도 충분히 개발을 진행할 수 있으므로
                Community 버전을 사용하도록 하겠습니다.
                <br />
                <a href="https://www.jetbrains.com/ko-kr/idea/">
                  https://www.jetbrains.com/ko-kr/idea/
                </a>
                <br />
                <ClassContentsTextTab>
                  - 환경 설정 → 에디터 → 일반 → Ctrl + 마우스 휠로 글꼴 크기
                  변경
                </ClassContentsTextTab>
              </ClassContentsText>
              <ClassContentsTitle2>환경 변수 설정</ClassContentsTitle2>
              <hr />
              <ClassContentsText>
                인텔리제이를 이용해 자바를 컴파일하고 실행하는 경우는 필요 없을
                수 있으나, 스프링부트를 사용하는 백앤드 개발 시 필요합니다.
                <br />
                시스템 환경변수는 모든 사용자 및 프로세스에 적용되는 전역적인
                설정입니다. 이러한 변수는 컴퓨터의 운영체제 및 시스템 구성
                요소와 관련된 정보를 저장하며, 모든 계정에서 공유됩니다.
                <br />
                사용자 환경변수는 특정 사용자 계정에 대한 설정을 지정합니다.
                <br />
                PATH의 경로는 JDK 설치 경로에 따라 달라집니다.
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>Mac OS</ClassContentsTitle3>
              <ClassContentsText>
                아래의 내용은 .zshrc 파일에 대한 설정 예시 이며, 자바 JDK 설치
                경로와 안드로이드 설치 경로는 개인 PC의 설치 경로로 변경해야
                합니다.
              </ClassContentsText>
              <ClassContentsCodeBox>
                <ClassContentsCode>
                  export
                  JAVA_HOME=/Users/kyungsoojeong/Library/Java/JavaVirtualMachines/corretto-17.0.9/Contents/Home
                  <br />
                  export PATH=${`{PATH}`}:$JAVA_HOME/bin
                </ClassContentsCode>
              </ClassContentsCodeBox>
              <ClassContentsTitle3>윈도우</ClassContentsTitle3>
              <ClassContentsText>시스템 환경 변수 편집</ClassContentsText>

              <ClassContentsCodeBox>
                👉 설치 후 버전 변경이 안되는 경우 해당 경로를 찾아서 환경
                변수를 설정해주어야 합니다.
                <ClassContentsTextTab>
                  <br />
                  예) C:\Program Files\java\jdk-11
                  <br />
                  <font color="red">환경 변수 추가</font>
                  <br />
                  <b>JAVA_HOME</b>
                  <br />
                  C:\Program Files\java\jdk-11
                  <br />
                  <font color="red">환경변수 편집</font>
                  <br />
                  <b>Path</b>
                  <br />
                  %JAVA_HOME%\bin
                  <br />
                </ClassContentsTextTab>
              </ClassContentsCodeBox>
              <ClassContentsTitle3>환경 변수 테스트</ClassContentsTitle3>
              <ClassContentsText>
                - 검색창에서 cmd d 입력
                <br />
                <br />
                <ClassContentsImage
                  style={{
                    backgroundImage: `url(${"/images/study/java/java_01_02_01.png"})`,
                  }}
                />
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>
                인텔리제이에서 JDK 버전 확인하기
              </ClassContentsTitle3>
              <ClassContentsText>
                - 파일 → Project Structure 이동
                <br />
                <br />
                <ClassContentsImage
                  style={{
                    backgroundImage: `url(${"/images/study/java/java_01_02_02.png"})`,
                  }}
                />
                <br />
              </ClassContentsText>
              <ClassContentsText>
                👉 SDK 버전이 정상적으로 잡혀 있는지 확인 합니다.
                <br />
                <br />
                <ClassContentsCodeBox>
                  👉 설치 후 버전 변경이 안되는 경우 해당 경로를 찾아서 환경
                  변수를 설정해주어야 합니다.
                </ClassContentsCodeBox>{" "}
              </ClassContentsText>
            </ClassContentsContainer>
          </EachClass>
          <ArrowContainer>
            <ArrowNavigation direction="left" />
            <ArrowNavigation direction="right" />
          </ArrowContainer>
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default Java_01_02;
