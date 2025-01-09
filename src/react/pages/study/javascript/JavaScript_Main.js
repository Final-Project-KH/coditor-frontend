import React, { useRef } from "react";

import {
  Wrap,
  Container,
  LeftContainer,
  RightContainer,
  LeftSubjectContainer,
  SubjectImgContainerJavaScript,
  SubjectTitle,
  SubjectContents,
  SubjectRateBlack,
  SubjectRateWhite,
  SubjectRateContents,
  SubjectRateContainer,
  SubjectRateBox,
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassName,
  ClassContents,
  ClassStatus,
  ClassStatusDot,
  ClassStatusText,
  ClassSet,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxWide,
} from "../../../styles/study/Study";
import JavaScript_ChapterList from "./JavaScript_ChapterList";
import JavaScript_SubjectTitle from "./JavaScript_SubjectTitle";
import JavaScript_ClassListFull from "./JavaScript_ClassListFull";

const JavaScript_Main = () => {

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
          <a href="/study" className="menu-link">
            <TopBoxText>study</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/javascript" className="menu-link">
            <TopBoxText>JavaScript</TopBoxText>
          </a>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <JavaScript_SubjectTitle />
          <JavaScript_ChapterList refs={sectionRefs} />
        </LeftContainer>
        <RightContainer><JavaScript_ClassListFull refs={sectionRefs} /></RightContainer>
      </Container>
    </Wrap>
  );
};

export default JavaScript_Main;
