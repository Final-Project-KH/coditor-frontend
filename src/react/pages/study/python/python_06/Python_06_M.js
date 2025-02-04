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

import Python_Title_M from "../python_components/Python_Title_M";
import Python_ClassList_Filtered_M from "../python_components/Python_ClassList_Filtered_M";
import ScrollToTopButton from "../../../ScrollToTopButton";

const Python_06_M = () => {
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
  const handleStudyPython = () => {
    navigate("/study/python");
  };

  // TopBox thirdpath
  const handleRefresh = () => {
    navigate("/study/python/06");
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
          <TopBoxLink onClick={() => handleStudyPython()}>
            <TopBoxText>Python</TopBoxText>
          </TopBoxLink>
        </TopBox>
      </TopBoxWide>
      <TopBoxWide2>
        <TopBox2>
          <TopBoxLink onClick={() => handleRefresh()}>
            <TopBoxText2>06. 데이터 분석을 위한 패키지</TopBoxText2>
          </TopBoxLink>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        <Python_Title_M />
        <Python_ClassList_Filtered_M chapter="06" />
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};

export default Python_06_M;
