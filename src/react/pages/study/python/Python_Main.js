import React, { useEffect, useRef } from "react";
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
} from "../../../styles/study/Class_Main";

import Python_ChapterList from "./Python_ChapterList";
import Python_Title from "./Python_Title";
import Python_ClassList from "./Python_ClassList";

const Python_Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath } = location.state || {};

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // TopBox firstpath
  const handleStudy = () => {
    navigate("/study", {
      state: {
        firstpath: firstpath,
      },
    });
  };

  // TopBox secondpath
  const handleRefresh = () => {
    navigate("/study/python", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
  };

  // 챕터 스크롤링
  const sectionRefs = {
    section01: useRef(null),
    section02: useRef(null),
    section03: useRef(null),
    section04: useRef(null),
    section05: useRef(null),
    section06: useRef(null),
  };

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
          <Python_Title />
          <Python_ChapterList refs={sectionRefs} />
        </LeftContainer>
        <RightContainer>
          <Python_ClassList refs={sectionRefs} />
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default Python_Main;
