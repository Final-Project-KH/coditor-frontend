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

import CPlus_Title from "../cplus_components/CPlus_Title";
import CPlus_ClassList_Filtered from "../cplus_components/CPlus_ClassList_Filtered";
import ScrollToTopButton from "../../../ScrollToTopButton";
import CPlus_04_M from "./CPlus_04_M";

const CPlus_04 = () => {
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
  const handleStudyCPlus = () => {
    navigate("/study/cplus");
  };

  // TopBox thirdpath
  const handleRefresh = () => {
    navigate("/study/cplus/04");
    window.location.reload();
  };

  return (
    <>
      {isMobile ? (
        <CPlus_04_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyCPlus()}>
                C++
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
              04. 배열과 문자열
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <CPlus_Title />
            </LeftContainer>
            <RightContainer>
              <CPlus_ClassList_Filtered chapter="04" />
            </RightContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default CPlus_04;
