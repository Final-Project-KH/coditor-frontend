import { useEffect } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxLink,
  Container,
} from "../../../../styles/study/Language_00_M";

import Java_Title_M from "../java_components/Java_Title_M";
import Java_ClassList_Filtered_M from "../java_components/Java_ClassList_Filtered_M";
import ScrollToTopButton from "../../../ScrollToTopButton";

const Java_01_M = () => {
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
  const handleStudyJava = () => {
    navigate("/study/java", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
  };

  // TopBox thirdpath
  const handleRefresh = () => {
    navigate("/study/java/01", {
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
          <TopBoxLink onClick={() => handleStudy()}>
            <TopBoxText>{firstpath}</TopBoxText>
          </TopBoxLink>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxLink onClick={() => handleStudyJava()}>
            <TopBoxText>{secondpath}</TopBoxText>
          </TopBoxLink>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxLink onClick={() => handleRefresh()}>
            <TopBoxText>{thirdpath}</TopBoxText>
          </TopBoxLink>
        </TopBox>
      </TopBoxWide>
      <Container>
        <Java_Title_M />
        <Java_ClassList_Filtered_M chapter="01" />
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};

export default Java_01_M;
