import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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

import JavaScript_ChapterList from "./JavaScript_ChapterList";
import JavaScript_Title from "./JavaScript_Title";
import { JavaScriptStudyChapter } from "../../../../util/study/JavaScriptStudyChapter";

const JavaScript_Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath } = location.state || {};

  const handleStudy = () => {
    navigate("/study", {
      state: {
        firstpath: firstpath,
      },
    });
  };

  const handleRefresh = () => {
    navigate("/study/javascript", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
  };

  const handleNext = (cls) => {
    navigate(`/study/javascript/${cls.id}`, {
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

  const updatedJavaScriptStudyChapter = JavaScriptStudyChapter.map((menu) => ({
    ...menu,
    contents: menu.contents.map((content) => ({
      ...content,
      label: content.label,
      navigatepath: content.navigatepath,
      firstpath: firstpath,
      secondpath: secondpath,
      thirdpath: content.thirdpath,
      fourthpath: content.fourthpath,
    })),
  }));

    // 우측 스터디 영역 컴포넌트로 분리
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

    
  // 챕터 스크롤링
  const sectionRefs = {
    section01: useRef(null),
    section02: useRef(null),
    section03: useRef(null),
    section04: useRef(null),
    section05: useRef(null),
  }

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxText onClick={() => handleStudy()}>{firstpath}</TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleRefresh()}>{secondpath}</TopBoxText>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <JavaScript_Title />
          <JavaScript_ChapterList refs={sectionRefs} />
        </LeftContainer>
        <RightContainer>
        {updatedJavaScriptStudyChapter.map((cls) => (
            <EachClassComponent
              // key={cls.id}
              cls={cls}
              isOpen={isToggleOpenId.includes(cls.id)}
              onToggle={toggleVisibility}
            />
          ))}
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default JavaScript_Main;
