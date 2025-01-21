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
import {useLocation, useNavigate, useOutletContext} from "react-router-dom";
import {classJavaMenuData} from "../../../../util/codingtestpractice/ClassJavaMenuData";
import {useDispatch, useSelector} from "react-redux";
import ScrollToTopButton from "../../../styles/ScrollToTopButton";

// User Nickname, 등급
// Coding Test 난이도 받아와야함
// 경로 받아와야함
const CT_Java_Practice_Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {firstpath, secondpath, thirdpath} = location.state || {};

  const handleCodingTest = () => {
    navigate("/codingtest", {
      state: {
        firstpath: firstpath,
      },
    });
  };

  const handleCodingTestJava = () => {
    navigate("/codingtest/java", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
  };

  const handleRefresh = () => {
    navigate(`/codingtest/java/practice`, {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: thirdpath,
      },
    });
  };

  const handleNavigation = (navigatepath, data) => {
    navigate(navigatepath, {state: data});
  };

  const updatedJavaMenuData = classJavaMenuData.map((menu) => ({
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
  const initialIds = updatedJavaMenuData.map((menu) => menu.id);

  const [isToggleOpenId, setIsToggleOpenId] = useState(initialIds);

  const toggleVisibility = (id) => {
    setIsToggleOpenId((prevId) =>
      prevId.includes(id) ? prevId.filter((i) => i !== id) : [...prevId, id]
    );
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
            {firstpath}
          </TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleCodingTestJava()}>
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
              <SubjectImgContainerJava />
              <SubjectTitle>{secondpath}</SubjectTitle>
              <SubjectContent>{thirdpath}</SubjectContent>
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
          {updatedJavaMenuData.map((cls) => (
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
export default CT_Java_Practice_Main;
