import {useState, useEffect, useRef} from "react";
import React from "react";
import {
  Wrap,
  Container,
  LeftContainer,
  LeftTopSubjectContainer,
  LeftMiddleSubjectContainer,
  LeftSubjectSubContainer,
  SubjectImgContainer,
  SubjectUserContainer,
  SubjectTitle,
  SubjectContent,
  RightContainer,
} from "../../styles/codingtest/CoddingTestCommons";
import AxiosApi from "../../../api/AxiosApi";
import Common from "../../../util/Common";

// User Nickname, 등급
// Coding Test 난이도 받아와야함
const CodingTestCommons = () => {
  return (
    <Wrap>
      <Container>
        <LeftContainer>
          <LeftTopSubjectContainer>
            <LeftSubjectSubContainer>
              <SubjectImgContainer />
              <SubjectTitle>Java</SubjectTitle>
              <SubjectContent>Basic</SubjectContent>
            </LeftSubjectSubContainer>
            <LeftSubjectSubContainer>
              <SubjectUserContainer />
              {/* User 정보 실제로는 받아와야함 */}
              <SubjectTitle>User</SubjectTitle>
              <SubjectContent>Platinum</SubjectContent>
            </LeftSubjectSubContainer>
          </LeftTopSubjectContainer>
          {/* 격언 정보 받아올지 Front End에서 처리할지 논의 필요 */}
          <LeftMiddleSubjectContainer></LeftMiddleSubjectContainer>
        </LeftContainer>
        <RightContainer></RightContainer>
      </Container>
    </Wrap>
  );
};
export default CodingTestCommons;
