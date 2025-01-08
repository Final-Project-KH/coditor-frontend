import {useState, useEffect, useRef} from "react";
import React from "react";
import {
  Wrap,
  Container,
  LeftContainer,
  LeftTopSubjectContainer,
  LeftMiddleSubjectContainer,
  LeftSubjectSubContainer,
  SubjectImgContainerJava,
  SubjectUserContainer,
  SubjectTitle,
  SubjectContent,
  RightContainer,
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassContents,
  ClassSet,
  ClassName,
  StyledLink,
  TopBox,
  Navigator,
} from "../../styles/codingtest/CoddingTestCommons";
import AxiosApi from "../../../api/AxiosApi";
import Common from "../../../util/Common";

// User Nickname, 등급
// Coding Test 난이도 받아와야함
// 경로 받아와야함
const CodingTestCommons = () => {
  return (
    <Wrap>
      <TopBox>
        <Navigator>coding test - java - practice</Navigator>
      </TopBox>
      <Container>
        <LeftContainer>
          <LeftTopSubjectContainer>
            <LeftSubjectSubContainer>
              <SubjectImgContainerJava />
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
        <RightContainer>
          <EachClass>
            <ClassHeader>
              {/* Title 및 관련 내용은 백엔드에서 받아올지 논의 필요 */}
              <ClassHeaderTitle>사칙연산</ClassHeaderTitle>
            </ClassHeader>
            <ClassContents>
              <ClassSet>
                <ClassName>
                  <StyledLink to="/ct/java_01"></StyledLink>A + B
                </ClassName>
              </ClassSet>
              <ClassSet>
                <ClassName>
                  <StyledLink></StyledLink>A - B
                </ClassName>
              </ClassSet>
              <ClassSet>
                <ClassName>
                  <StyledLink></StyledLink>A * B
                </ClassName>
              </ClassSet>
              <ClassSet>
                <ClassName>
                  <StyledLink></StyledLink>A / B
                </ClassName>
              </ClassSet>
            </ClassContents>
          </EachClass>
          <EachClass>
            <ClassHeader>
              {/* Title 및 관련 내용은 백엔드에서 받아올지 논의 필요 */}
              <ClassHeaderTitle>조건문</ClassHeaderTitle>
            </ClassHeader>
            <ClassContents>
              <ClassSet>
                <ClassName>두 수 비교</ClassName>
              </ClassSet>
              <ClassSet>
                <ClassName>사분면 고르기</ClassName>
              </ClassSet>
              <ClassSet>
                <ClassName>윤년</ClassName>
              </ClassSet>
              <ClassSet>
                <ClassName>알람시계</ClassName>
              </ClassSet>
            </ClassContents>
          </EachClass>
        </RightContainer>
      </Container>
    </Wrap>
  );
};
export default CodingTestCommons;
