import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { useEffect } from "react";

import {
  Wrap,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxWide,
  Container,
  LeftContainer,
  RightContainer,
} from "../../../../styles/study/Language_00";

import Java_Title from "../java_components/Java_Title";
import Java_ClassList_Filtered from "../java_components/Java_ClassList_Filtered";
import ScrollToTopButton from "../../../ScrollToTopButton";
import Java_05_M from "./Java_05_M";

const Java_05 = () => {
  const navigate = useNavigate();
  const { mainContentRef } = useOutletContext();
  const { isMobile } = useOutletContext();

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  // TopBox firstpath
  const handleStudy = () => {
    navigate("/study");
  };

  // TopBox secondpath
  const handleStudyJava = () => {
    navigate("/study/java");
  };

  // TopBox thirdpath
  const handleRefresh = () => {
    navigate("/study/java/05");
    window.location.reload();
  };

  return (
    <>
    {isMobile ? (
      <Java_05_M />
    ) : (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleStudyJava()}>
            Java
          </TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleRefresh()}>05. Java API 클래스</TopBoxText>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <Java_Title />
        </LeftContainer>
        <RightContainer>
          <Java_ClassList_Filtered chapter="05" />
        </RightContainer>
      </Container>
      <ScrollToTopButton />
    </Wrap>
          )}
    </>
  );
};

export default Java_05;
