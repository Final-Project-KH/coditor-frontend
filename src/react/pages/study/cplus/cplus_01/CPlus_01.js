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
} from "../../../../styles/study/Class_Main";
import CPlus_Title from "../cplus_components/CPlus_Title";
import CPlus_ClassList_Filtered from "../cplus_components/CPlus_ClassList_Filtered";
import { useEffect } from "react";
import ScrollToTopButton from "../../../ScrollToTopButton";

const CPlus_01 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath, thirdpath } = location.state || {};
  const { mainContentRef } = useOutletContext();

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  // TopBox firstpath
  const handleStudy = () => {
    navigate("/study", {
      state: {
        firstpath: firstpath,
      },
    });
  };

  // TopBox secondpath
  const handleStudyCPlus = () => {
    navigate("/study/cplus", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
  };

  // TopBox thirdpath
  const handleRefresh = () => {
    navigate("/study/cplus/01", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: thirdpath,
      },
    });
    window.location.reload();
  };

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxText onClick={() => handleStudy()}>{firstpath}</TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleStudyCPlus()}>
            {secondpath}
          </TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleRefresh()}>{thirdpath}</TopBoxText>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <CPlus_Title />
        </LeftContainer>
        <RightContainer>
          <CPlus_ClassList_Filtered chapter="01" />
        </RightContainer>
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};

export default CPlus_01;
