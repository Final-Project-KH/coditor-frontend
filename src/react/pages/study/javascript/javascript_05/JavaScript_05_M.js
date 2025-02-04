import { useEffect } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

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

import JavaScript_Title_M from "../javascript_components/JavaScript_Title_M";
import JavaScript_ClassList_Filtered_M from "../javascript_components/JavaScript_ClassList_Filtered_M";
import ScrollToTopButton from "../../../ScrollToTopButton";

const JavaScript_05_M = () => {
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
  const handleStudyJavaScript = () => {
    navigate("/study/javascript");
  };

  // TopBox thirdpath
  const handleRefresh = () => {
    navigate("/study/javascript/05");
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
          <TopBoxLink onClick={() => handleStudyJavaScript()}>
            <TopBoxText>JavaScript</TopBoxText>
          </TopBoxLink>
        </TopBox>
      </TopBoxWide>
      <TopBoxWide2>
        <TopBox2>
          <TopBoxLink onClick={() => handleRefresh()}>
            <TopBoxText2>05. 알고리즘과 웹화면</TopBoxText2>
          </TopBoxLink>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        <JavaScript_Title_M />
        <JavaScript_ClassList_Filtered_M chapter="05" />
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};

export default JavaScript_05_M;
