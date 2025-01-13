import React, { useRef, useState } from "react";

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

import Java_ChapterList from "./Java_ChapterList";
import Java_ClassListFull from "./Java_ClassListFull";
import Java_SubjectTitle from "./Java_SubjectTitle";
import { useLocation, useNavigate } from "react-router-dom";
import { JavaStudyChapter } from "../../../../util/study/JavaStudyChapter";
import Java_ClassListFull_Test from "./Java_ClassListFull_Test";

const Java_Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath, thirdpath } = location.state || {};

  const handleStudy = () => {
    navigate("/study", {
      state: {
        firstpath: firstpath,
      },
    });
  };
  const handleRefresh = () => {
    navigate("/study/java", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
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
      fourthpath: content.fourthpath,
    })),
  }));

  // 챕터 스크롤링
  const sectionRefs = {
    section01: useRef(null),
    section02: useRef(null),
    section03: useRef(null),
    section04: useRef(null),
    section05: useRef(null),
    section06: useRef(null),
    section07: useRef(null),
    section08: useRef(null),
    section09: useRef(null),
  };

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
                  firstpath: content.firstpath,
                  secondpath: content.secondpath,
                  thirdpath: content.thirdpath,
                  fourthpath: content.fourthpath,
                  lowerpath: content.label,
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
          <Java_SubjectTitle />
          <Java_ChapterList refs={sectionRefs} />
        </LeftContainer>
        <RightContainer>
          {updatedJavaStudyChapter.map((cls) => (
            <EachClassComponent
              key={cls.id}
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

export default Java_Main;
