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
import Java_ChapterList from "./Java_ChapterList";
import Java_ClassListFull from "./Java_ClassListFull";
import Java_SubjectTitle from "./Java_SubjectTitle";

const Java_Main = () => {

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
  }

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <a href="/study" className="menu-link">
            <TopBoxText>study</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/java" className="menu-link">
            <TopBoxText>Java</TopBoxText>
          </a>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <Java_SubjectTitle />
          <Java_ChapterList refs={sectionRefs} />
        </LeftContainer>
        <RightContainer>
          <Java_ClassListFull refs={sectionRefs} />
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default Java_Main;
