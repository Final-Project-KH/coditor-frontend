import { useState, useEffect, useRef } from "react";
import React from "react";
import {
  Wrap,
  Container,
  LeftContainer,
  LeftTopSubjectContainer,
  LeftMiddleSubjectContainer,
  LeftSubjectSubContainer,
  SubjectImgContainerC,
  SubjectUserImgContainer,
  SubjectTitle,
  SubjectContent,
  RightContainer,
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassHeaderTitleButton,
  ClassContents,
  ClassSet,
  ClassName,
  StyledLink,
  TopBox,
  Navigator,
  TopBoxWide,
  TopBoxText,
  TopBoxArrow,
  NavigatiePath,
} from "../../../styles/codingtest/CoddingTestCommons";
import AxiosApi from "../../../../api/AxiosApi";
import Common from "../../../../util/Common";
import { useLocation, useNavigate } from "react-router-dom";
import { classCMenuData } from "../../../../util/codingtestpractice/ClassCMenuData";
import ScrollToTopButton from "../../ScrollToTopButton";
// User Nickname, 등급
// Coding Test 난이도 받아와야함
// 경로 받아와야함
const CT_C_Practice_Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath, thirdpath } = location.state || {};

  const handleCodingTest = () => {
    navigate("/codingtest", {
      state: {
        firstpath: firstpath,
      },
    });
  };

  const handleCodingTestC = () => {
    navigate("/codingtest/c", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
  };

  const handleRefresh = () => {
    navigate(`/codingtest/c/practice`, {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: thirdpath,
      },
    });
  };

  const handleNavigation = (navigatepath, data) => {
    navigate(navigatepath, { state: data });
  };

  const [isToggleOpenId, setIsToggleOpenId] = useState([]);

  const toggleVisibility = (id) => {
    setIsToggleOpenId((prevId) =>
      prevId.includes(id) ? prevId.filter((i) => i !== id) : [...prevId, id]
    );
  };

  const updatedCMenuData = classCMenuData.map((menu) => ({
    ...menu,
    contents: menu.contents.map((content) => ({
      ...content,
      label: content.label,
      navigatepath: content.navigatepath,
      firstpath: firstpath,
      secondpath: secondpath,
      thirdpath: thirdpath,
      fourthpath: content.fourthpath,
    })),
  }));

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxText onClick={() => handleCodingTest()}>
            {firstpath}
          </TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleCodingTestC()}>
            {secondpath}
          </TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleRefresh()}>{thirdpath}</TopBoxText>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <LeftTopSubjectContainer>
            <LeftSubjectSubContainer>
              <SubjectImgContainerC />
              <SubjectTitle>{secondpath}</SubjectTitle>
              <SubjectContent>{thirdpath}</SubjectContent>
            </LeftSubjectSubContainer>
            <LeftSubjectSubContainer>
              <SubjectUserImgContainer />
              {/* User 정보 실제로는 받아와야함 */}
              <SubjectTitle>User</SubjectTitle>
              <SubjectContent>Platinum</SubjectContent>
            </LeftSubjectSubContainer>
          </LeftTopSubjectContainer>
          {/* 격언 정보 받아올지 Front End에서 처리할지 논의 필요 */}
          <LeftMiddleSubjectContainer></LeftMiddleSubjectContainer>
        </LeftContainer>
        <RightContainer>
          {updatedCMenuData.map((cls) => (
            <EachClass key={cls.id}>
              <ClassHeader isOpen={isToggleOpenId.includes(cls.id)}>
                <ClassHeaderTitle>{cls.title}</ClassHeaderTitle>
                <ClassHeaderTitleButton
                  isOpen={isToggleOpenId.includes(cls.id)}
                  onClick={() => toggleVisibility(cls.id)}
                />
              </ClassHeader>
              <ClassContents isOpen={isToggleOpenId.includes(cls.id)}>
                {cls.contents.map((content, index) => (
                  <ClassSet key={index}>
                    <ClassName>
                      <NavigatiePath
                        onClick={() =>
                          handleNavigation(content.navigatepath, {
                            firstpath: content.firstpath,
                            secondpath: content.secondpath,
                            thirdpath: content.thirdpath,
                            fourthpath: content.fourthpath,
                            lowerpath: content.label,
                          })
                        }
                      ></NavigatiePath>
                      {content.label}
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
export default CT_C_Practice_Main;
