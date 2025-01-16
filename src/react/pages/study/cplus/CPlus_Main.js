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

import CPlus_ChapterList from "./CPlus_ChapterList";
import CPlus_Title from "./CPlus_Title";
import CPlus_ClassList from "./CPlus_ClassList";

const CPlus_Main = () => {
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
    navigate("/study/cplus", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
  };

  // Chapter Scrolling
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
    section10: useRef(null),
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
          <CPlus_Title />
          <CPlus_ChapterList refs={sectionRefs} />
        </LeftContainer>
        <RightContainer>
          <CPlus_ClassList refs={sectionRefs} />
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default CPlus_Main;
