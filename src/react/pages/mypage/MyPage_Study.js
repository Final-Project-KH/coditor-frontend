import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxLink,
  Container,
  LeftContainer,
  CenterContainer,
  SubjectContainer,
} from "../../styles/mypage/MyPage";

import { SubjectLink } from "../../styles/study/Study_Main";

import LeftTopProfile from "./Components/LeftTopProfile";
import LeftMenus from "./Components/LeftMenus";
import ScrollToTopButton from "../ScrollToTopButton";

import Java_Title from "../study/java/java_components/Java_Title";
import Python_Title from "../study/python/python_components/Python_Title";
import C_Title from "../study/c/c_components/C_Title";
import CPlus_Title from "../study/cplus/cplus_components/CPlus_Title";
import JavaScript_Title from "../study/javascript/javascript_components/JavaScript_Title";
import { useEffect } from "react";

const MyPage_Study = () => {
  const navigate = useNavigate();
  const { mainContentRef } = useOutletContext();

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  const handleMyPage = () => {
    navigate("/mypage");
  };

  const handleRefresh = () => {
    navigate("/mypage/study");
  };

  // Java onClick
  const handleJavaCheck = () => {
    navigate("/study/java");
  };

  // Python onClick
  const handlePythonCheck = () => {
    navigate("/study/python");
  };

  // C onClick
  const handleCCheck = () => {
    navigate("/study/c");
  };

  // C++ onClick
  const handleCPlusCheck = () => {
    navigate("/study/cplus");
  };

  // JavaScript onClick
  const handleJavaScriptCheck = () => {
    navigate("/study/javascript");
  };

  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <TopBoxLink onClick={() => handleMyPage()}>
              <TopBoxText>마이 페이지</TopBoxText>
            </TopBoxLink>
                <TopBoxArrow>{`>`}</TopBoxArrow>
                <TopBoxLink onClick={() => handleRefresh()}>
                  <TopBoxText>Study</TopBoxText>
                </TopBoxLink>
          </TopBox>
        </TopBoxWide>
        <Container>
          <LeftContainer>
            <LeftTopProfile />
            <LeftMenus />
          </LeftContainer>
          <CenterContainer>
            <SubjectContainer>
              <SubjectLink onClick={() => handleJavaCheck()}>
                <Java_Title />
              </SubjectLink>
              <SubjectLink onClick={() => handlePythonCheck()}>
                <Python_Title />
              </SubjectLink>
              <SubjectLink onClick={() => handleCCheck()}>
                <C_Title />
              </SubjectLink>
              <SubjectLink onClick={() => handleCPlusCheck()}>
                <CPlus_Title />
              </SubjectLink>
              <SubjectLink onClick={() => handleJavaScriptCheck()}>
                <JavaScript_Title />
              </SubjectLink>
            </SubjectContainer>
          </CenterContainer>
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default MyPage_Study;
