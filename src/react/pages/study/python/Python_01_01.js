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
import Python_SubjectTitle from "./Python_Title";
import { PythonStudyChapter } from "../../../../util/study/PythonStudyChapter";
import ArrowNavigation from "../ArrowNavigation";

const Python_01_01 = () => {
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
  const handleStudyPython = () => {
    navigate("/study/python", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
  };
  const handleStudyPython01 = () => {
    navigate("/study/python/01", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: thirdpath,
      },
    });
  };
  const handleRefresh = () => {
    navigate("/study/python/01/01", {
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
    navigate(`/study/python/${cls.id}`, {
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

  const updatedPythonStudyChapter = PythonStudyChapter.map((menu) => ({
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

  const filteredPythonStudyChapter = updatedPythonStudyChapter.filter(
    (chapter) => chapter.id === "01"
  );

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxText onClick={() => handleStudy()}>{firstpath}</TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleStudyPython()}>
            {secondpath}
          </TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleStudyPython01()}>
            {thirdpath}
          </TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleRefresh()}>{fourthpath}</TopBoxText>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <Python_SubjectTitle />
          <StickyClassBox>
            {filteredPythonStudyChapter.map((cls) => (
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
              <ClassHeaderTitle>Python?</ClassHeaderTitle>
            </ClassHeader>
            <ClassContentsContainer>
              <ClassContentsText>
                <font color="red">
                  <b>
                    Life is short, You need Python.
                    <br />
                    인생은 짧다. 당신에겐 파이썬이 필요하다.
                  </b>
                </font>
              </ClassContentsText>
              <ClassContentsTitle2>프로그래밍이란?</ClassContentsTitle2>
              <ClassContentsText>
                프로그래밍은 프로그램을 만드는 것을 의미합니다. 프로그래밍
                언어에는 파이썬 외에도 Java, JavaScript, C, C++ 등이 있으며, 앱
                개발에는 Kotlin이나 Swift 같은 언어도 사용됩니다.
              </ClassContentsText>
              <ClassContentsTitle3>코딩이란?</ClassContentsTitle3>
              <ClassContentsText>
                코딩은 사람이 이해하는 언어를 컴퓨터가 이해할 수 있는 언어로
                바꾸는 작업을 말합니다. 이를 위해 코딩과 함께 컴파일 또는
                인터프리터 작업이 필요합니다.
              </ClassContentsText>
              <ClassContentsTitle2>프로그래밍이란?</ClassContentsTitle2>
              <ClassContentsText>
                프로그래밍은 특정 목적을 달성하기 위해 설계된 알고리즘을
                프로그래밍 언어로 구체적으로 표현하는 것을 말합니다. 이 과정에는
                규칙성을 찾아내고 효율적인 방법을 설계하는 논리적 사고가
                필요합니다.
                <br />
                프로그래밍의 일반적인 과정은 다음과 같습니다 :
                <ClassContentsTextTab>
                  - 문제 인식 → 프로그램 설계 → 프로그램 구현 → 테스트와 디버깅
                  → 유지보수
                </ClassContentsTextTab>
                파이썬 강의를 통해 코딩을 배우면서, 여러분은 컴퓨터가 문제를
                해결하는 방식처럼 복잡한 문제를 단순화하고 이를 논리적이고
                효율적으로 해결하는 능력을 배울 수 있습니다. 이는 중요한 학습
                목표입니다.
              </ClassContentsText>
              <ClassContentsTitle2>파이썬(Python)</ClassContentsTitle2>
              <ClassContentsText>
                파이썬은 1991년 귀도 반 로섬에 의해 개발된 고급 프로그래밍
                언어입니다. 현재 전 세계에서 가장 인기 있는 프로그래밍 언어 중
                하나입니다. 다양한 플랫폼에서 사용 가능하며, 풍부한 라이브러리
                덕분에 사용이 쉽고 개발 속도가 빠른 것이 장점입니다.
              </ClassContentsText>
              <ClassContentsTitle2>파이썬의 특징</ClassContentsTitle2>
              <ClassContentsTitle3>간결한 코드</ClassContentsTitle3>
              <ClassContentsText>
                파이썬은 교육용으로 만들어졌기 때문에 코드가 간결하고 가독성이
                좋습니다. 문법이 사람의 사고방식과 유사하여 코딩 과정이 영작하는
                것처럼 느껴질 정도로 쉽습니다. 생산성이 높아 개발 속도가
                빠르다는 장점이 있습니다.
                <br />
                <br />
                · C++로 “Hello World” 출력
                <br />
                <br />
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`#include <iostream>`}
                    <br />
                    {`using namespace std;`}
                    <br />
                    {`int main() {`}
                    <br />
                    {`	cout << "Hello World");`}
                    <br />
                    {`	return 0;`}
                    <br />
                    {`}`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
                <br />
                · Java로 “Hello World” 출력
                <br />
                <br />
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`package sample;`}
                    <br />
                    {`public class Hello { `}
                    <br />
                    {`	public static void main(String[] args) { `}
                    <br />
                    {`		System.out.println("Hello, World"); `}
                    <br />
                    {`	}`}
                    <br />
                    {`}`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
                <br />
                · Python에서의 “Hello World” 출력
                <br />
                <br />
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`print("Hello World")`}
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>들여쓰기</ClassContentsTitle3>
              <ClassContentsText>
                파이썬은 코드의 <b>들여쓰기</b>로 블록을 구분합니다. 이는 다른
                언어가 {}를 사용하는 것과 다릅니다. 이 방식은 코드의 일관성을
                유지하도록 하여, 다른 사람이 작성한 코드도 읽기 쉽게 만들어
                줍니다.
              </ClassContentsText>
              <ClassContentsTitle3>
                인터프리터(Interpreter) 언어
              </ClassContentsTitle3>
              <ClassContentsText>
                파이썬은 <b>인터프리터 언어</b>로, 프로그램의 코드가 한 줄씩
                순서대로 해석되고 실행됩니다. 따라서 코드가 완전히 작성되지
                않아도 작성된 부분까지 테스트가 가능합니다. C/C++이나 자바 같은
                언어는 <b>컴파일 언어</b>인 반면, 파이썬은 인터프리터 언어로
                컴파일 언어에 비해 실행 속도가 느릴 수 있습니다.
              </ClassContentsText>
              <ClassContentsTitle3>멀티 패러다임 언어</ClassContentsTitle3>
              <ClassContentsText>
                파이썬은 <b>절차 지향</b>(C 언어)과 <b>객체 지향</b>(자바 등) 두
                가지 특성을 모두 가지고 있습니다.
                <ClassContentsTextTab>
                  - <b>절차 지향</b> : 프로그램이 위에서 아래로 순차적으로
                  진행됩니다.
                  <br />- <b>객체 지향</b> : 실제 세계를 모델링하여 객체를
                  만드는 방식입니다.
                </ClassContentsTextTab>
              </ClassContentsText>
              <ClassContentsTitle3>
                높은 생산성과 빠른 개발 속도
              </ClassContentsTitle3>
              <ClassContentsText>
                파이썬은 다양한 자료형과 라이브러리를 제공하며, 다른 언어와의
                연동성도 좋습니다(C/C++ 등). 이를 통해 높은 생산성과 빠른 개발
                속도를 자랑합니다.
              </ClassContentsText>
              <br />
              <ClassContentsTitle2>
                활용 영역 (라이브러리 활용)
              </ClassContentsTitle2>
              <ClassContentsText>
                파이썬은 다양한 라이브러리를 활용하여 여러 분야에서 사용됩니다 :
                <ClassContentsTextTab>
                  - <b>업무 자동화</b> : 반복적인 사무 업무(예: 엑셀과 연동)를
                  자동화합니다.
                  <br />- <b>크롤링</b> : 웹상의 데이터를 수집하거나 이미지,
                  정보를 추출합니다.
                  <br />- <b>웹 서버 개발</b> : 데이터베이스와 연동을 위한
                  다양한 솔루션을 제공합니다. 프론트엔드에도 사용되지만
                  JavaScript보다 덜 사용됩니다.
                  <br />- <b>데이터 분석</b> : 판다스(pandas) 라이브러리를
                  사용하여 데이터 분석을 수행합니다. 데이터 분석에 특화된 R
                  언어도 있지만, 파이썬 역시 각광받고 있습니다.
                  <br />- <b>인공지능</b> : 머신 러닝 등의 인공지능 개발에
                  사용됩니다.
                  <br />- <b>C/C++와의 결합</b> : C/C++로 만들어진 코드와
                  결합하여 사용 가능합니다.
                  <br />
                </ClassContentsTextTab>
              </ClassContentsText>
              <ClassContentsTitle2>
                파이썬으로 할 수 없는 일
              </ClassContentsTitle2>
              <ClassContentsText>
                · <b>시스템과 밀접한 프로그래밍</b> : 운영체제 개발, 대규모
                연산이 필요한 영상 처리, 압축 알고리즘 등은 파이썬의 주요 활용
                영역이 아닙니다.
                <br />· <b>임베디드 시스템</b> : 하드웨어와 밀접하게 연관된
                임베디드 시스템 개발에는 적합하지 않습니다.
                <br />· <b>모바일 프로그래밍</b> : 모바일 앱 개발에 있어
                파이썬은 여전히 부족한 점이 있습니다.
                <br />
              </ClassContentsText>
              <ClassContentsTitle2>사용되는 회사</ClassContentsTitle2>
              <ClassContentsText>
                파이썬은 다양한 글로벌 기업에서 사용됩니다. 데이터 분석,
                인공지능, 웹 개발, 자동화 등 여러 분야에서 활용되어, 많은
                회사들이 파이썬을 주요 기술로 채택하고 있습니다.
                <br />
              </ClassContentsText>
              <ClassContentsImage
                style={{
                  backgroundImage: `url(${"/images/study/python/python_01_01_01.png"})`,
                  width: "500px",
                  height: "300px",
                }}
              />
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
export default Python_01_01;
