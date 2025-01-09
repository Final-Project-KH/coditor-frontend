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
import Python_ChapterList from "./Python_ChapterList";
import Python_ClassListFull from "./Python_ClassListFull";
import Python_SubjectTitle from "./Python_SubjectTitle";

const Python_Main = () => {

    const sectionRefs = {
      section01: useRef(null),
      section02: useRef(null),
      section03: useRef(null),
      section04: useRef(null),
      section05: useRef(null),
      section06: useRef(null),
    }

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <a href="/study" className="menu-link">
            <TopBoxText>study</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/python" className="menu-link">
            <TopBoxText>Python</TopBoxText>
          </a>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <Python_SubjectTitle />
          <Python_ChapterList refs={sectionRefs} />
        </LeftContainer>
        <RightContainer>
          <Python_ClassListFull refs={sectionRefs} />
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default Python_Main;
