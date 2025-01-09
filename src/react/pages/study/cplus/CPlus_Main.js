import React, { useRef } from "react";

import {
  Wrap,
  Container,
  LeftContainer,
  RightContainer,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxWide,
} from "../../../styles/study/Study";
import CPlus_ChapterList from "./CPlus_ChapterList";
import CPlus_SubjectTitle from "./CPlus_SubjectTitle";
import CPlus_ClassListFull from "./CPlus_ClassListFull";

const CPlus_Main = () => {

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
    }

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <a href="/study" className="menu-link">
            <TopBoxText>study</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/cplus" className="menu-link">
            <TopBoxText>C++</TopBoxText>
          </a>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <CPlus_SubjectTitle />
          <CPlus_ChapterList refs={sectionRefs} />
        </LeftContainer>
        <RightContainer>
          <CPlus_ClassListFull refs={sectionRefs} />
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default CPlus_Main;
