import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { useEffect } from "react";

import {
  Wrap,
  TopBoxWide,
  TopBoxWide2,
  TopBox,
  TopBox2,
  TopBoxText,
  TopBoxText2,
  TopBoxArrow,
  TopBoxArrow2,
  TopBoxLink,
  Container,
} from "../../../../styles/study/Language_00_M";

import Java_Title_M from "../java_components/Java_Title_M";
import Java_ClassList_Filtered_M from "../java_components/Java_ClassList_Filtered_M";
import ScrollToTopButton from "../../../ScrollToTopButton";

const Java_02_M = () => {
  const navigate = useNavigate();
  const { mainContentRef } = useOutletContext();

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
    navigate("/study/java/02");
    window.location.reload();
  };

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxLink onClick={() => handleStudy()}>
            <TopBoxText>study</TopBoxText>
          </TopBoxLink>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxLink onClick={() => handleStudyJava()}>
            <TopBoxText>Java</TopBoxText>
          </TopBoxLink>
          </TopBox>
          </TopBoxWide>
          <TopBoxWide2>
          <TopBox2>
          <TopBoxLink onClick={() => handleRefresh()}>
            <TopBoxText2>02. 기본 자료형과 연산자</TopBoxText2>
          </TopBoxLink>
        </TopBox2>
      </TopBoxWide2>
      <Container>
          <Java_Title_M />
          <Java_ClassList_Filtered_M chapter="02" />
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};

export default Java_02_M;
