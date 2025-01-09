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
import C_ChapterList from "./C_ChapterList";
import C_ClassListFull from "./C_ClassListFull";
import C_SubjectTitle from "./C_SubjectTitle";

const C_Main = () => {

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
          <a href="/study/c" className="menu-link">
            <TopBoxText>C</TopBoxText>
          </a>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <C_SubjectTitle />
          <C_ChapterList refs={sectionRefs} />
        </LeftContainer>
        <RightContainer>
          <C_ClassListFull refs={sectionRefs} />
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default C_Main;
