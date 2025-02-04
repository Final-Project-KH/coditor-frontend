import { useEffect } from "react";
import React from "react";
import {
  Wrap,
  Container,
  LeftContainer,
  LeftTopSubjectContainer,
  LeftMiddleSubjectContainer,
  LeftSubjectSubContainer,
  SubjectImgContainerJava,
  SubjectUserImgContainer,
  SubjectTitle,
  SubjectContent,
  RightContainer,
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassContents,
  ClassSet,
  ClassName,
  TopBox,
  TopBoxWide,
  TopBoxText,
  TopBoxArrow,
  NavigatiePath,
} from "../../../styles/codingtest/CoddingTestCommons";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import ScrollToTopButton from "../../ScrollToTopButton";

// 서버에서 가져올 것
const MENU_ITEMS = [
  {
    category: "기본 연산자 활용",
    contents: [
      {
        title: "두 정수의 덧셈",
        questionId: 1,
      },
    ],
  },
];

// User Nickname, 등급
// Coding Test 난이도 받아와야함
// 경로 받아와야함
const Practice = () => {
  const navigate = useNavigate();

  const handleCodingTest = () => {
    navigate("/codingtest");
  };

  const handleCodingTestJava = () => {
    navigate("/codingtest/java");
  };

  const handleRefresh = () => {
    navigate(`/codingtest/java/practice`);
  };

  const handleNavigation = (navigatepath, data) => {
    navigate(navigatepath, { state: data });
  };

  const nickname = useSelector((state) => state.auth.nickname);
  const { mainContentRef } = useOutletContext();

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxText onClick={() => handleCodingTest()}>
            Coding Test
          </TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleCodingTestJava()}>
            Java
          </TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleRefresh()}>Practice</TopBoxText>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <LeftTopSubjectContainer>
            <LeftSubjectSubContainer>
              <SubjectImgContainerJava />
              <SubjectTitle>Java</SubjectTitle>
              <SubjectContent>Practice</SubjectContent>
            </LeftSubjectSubContainer>
            <LeftSubjectSubContainer>
              <SubjectUserImgContainer />
              {/* User 정보 실제로는 받아와야함 */}
              <SubjectTitle>{nickname}</SubjectTitle>
              <SubjectContent>Platinum</SubjectContent>
            </LeftSubjectSubContainer>
          </LeftTopSubjectContainer>
          {/* 격언 정보 받아올지 Front End에서 처리할지 논의 필요 */}
          <LeftMiddleSubjectContainer></LeftMiddleSubjectContainer>
        </LeftContainer>
        <RightContainer>
          {MENU_ITEMS.map((item, idx) => (
            <EachClass key={idx}>
              <ClassHeader>
                <ClassHeaderTitle>{item.category}</ClassHeaderTitle>
              </ClassHeader>
              <ClassContents isOpen={true}>
                {item.contents.map((content) => (
                  <ClassSet key={content.questionId}>
                    <ClassName>
                      <NavigatiePath
                        onClick={() =>
                          navigate(
                            `/codingtest/challenge/${content.questionId}`
                          )
                        }
                      ></NavigatiePath>
                      {content.title}
                    </ClassName>
                  </ClassSet>
                ))}
              </ClassContents>
            </EachClass>
          ))}
        </RightContainer>
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};
export default Practice;
