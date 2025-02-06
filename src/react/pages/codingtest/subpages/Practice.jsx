import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import AxiosApi from "../../../../api/AxiosApi";

import JwtDecoding from "../../../../api/JwtDecode";

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
import ScrollToTopButton from "../../ScrollToTopButton";

import FeynmanQuote from "../components/FeynmanQuote";

// User Nickname, 등급
// Coding Test 난이도 받아와야함
// 경로 받아와야함
const Practice = () => {
  const [challengeGroups, setChallengeGroups] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath, thirdpath } = location.state || {};

  const nickname = useSelector((state) => state.auth.nickname);
  const { mainContentRef } = useOutletContext();

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  const accessToken = useSelector((state) => state.auth.accesstoken);
  const userId = accessToken
    ? JwtDecoding.getFieldFromToken(accessToken, "sub")
    : null;

  useEffect(() => {
    const fetchChallengeList = async () => {
      const responseData = await AxiosApi.getChallengeList("practice", userId);

      if (!responseData["error"]) {
        setChallengeGroups(
          responseData.reduce((acc, item) => {
            if (!acc[item.category]) {
              acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
          }, {})
        );
      }
    };

    fetchChallengeList();
  }, []);

  const profile = useSelector((state) => state.auth.profile);

    // TopBox firstpath
    const handleCodingTest = () => {
      navigate("/codingtest");
    };
  
    // TopBox secondpath
    const handleRefresh = () => {
      navigate("/codingtest/practice");
    };

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxText onClick={() => handleCodingTest()}>coding test</TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleRefresh()}>practice</TopBoxText>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          {/* <LeftTopSubjectContainer>
            <LeftSubjectSubContainer>
              <SubjectImgContainerJava />
              <SubjectTitle>{"secondpath"}</SubjectTitle>
              <SubjectContent>{"thirdpath"}</SubjectContent>
            </LeftSubjectSubContainer>
            <LeftSubjectSubContainer> */}
          {/* <SubjectUserImgContainer isProfile={profile} /> */}
          {/* User 정보 실제로는 받아와야함 */}
          {/* <SubjectTitle>{nickname}</SubjectTitle> */}
          {/* <SubjectContent>Platinum</SubjectContent> */}
          {/* </LeftSubjectSubContainer> */}
          {/* </LeftTopSubjectContainer> */}
          {/* 격언 정보 받아올지 Front End에서 처리할지 논의 필요 */}
          <LeftMiddleSubjectContainer>
            {
              "프로그래밍 언어를 처음 배우거나 더 익숙해지고 싶으신가요?\n\nPractice 난이도의 문제들은 프로그래밍에 익숙하지 않으신 분들을 위해 디자인 되었어요! 😊\n\n차근차근 문제를 해결하다보면 금새 프로그래밍 언어에 익숙해지실 수 있으실 거에요 😉"
            }
          </LeftMiddleSubjectContainer>
          <FeynmanQuote />
        </LeftContainer>
        <RightContainer>
          {challengeGroups === null
            ? "Loading..."
            : Object.keys(challengeGroups).length === 0
            ? "데이터가 존재하지 않습니다😓.."
            : Object.entries(challengeGroups).map(([category, items]) => (
                <EachClass key={category}>
                  <ClassHeader>
                    <ClassHeaderTitle>{category}</ClassHeaderTitle>
                  </ClassHeader>
                  <ClassContents isOpen={true}>
                    {items.map((content) => (
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
