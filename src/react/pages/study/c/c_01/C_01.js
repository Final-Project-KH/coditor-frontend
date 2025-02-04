import { useEffect } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

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

import C_Title from "../c_components/C_Title";
import C_ClassList_Filtered from "../c_components/C_ClassList_Filtered";
import ScrollToTopButton from "../../../ScrollToTopButton";
import C_01_M from "./C_01_M";

const C_01 = () => {
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
  const handleStudyC = () => {
    navigate("/study/c");
  };

  // TopBox thirdpath
  const handleRefresh = () => {
    navigate("/study/c/01");
    window.location.reload();
  };

  return (
    <>
      {isMobile ? (
        <C_01_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyC()}>
                C
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
              01. C 기본
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <C_Title />
            </LeftContainer>
            <RightContainer>
              <C_ClassList_Filtered chapter="01" />
            </RightContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default C_01;
