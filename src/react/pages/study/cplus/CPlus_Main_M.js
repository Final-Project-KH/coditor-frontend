import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxLink,
  Container,
} from "../../../styles/study/Language_Main_M";

import CPlus_Title_M from "./cplus_components/CPlus_Title_M";
import CPlus_ClassList_M from "./cplus_components/CPlus_ClassList_M";
import ScrollToTopButton from "../../ScrollToTopButton";

const CPlus_Main_M = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath } = location.state || {};
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
  const handleRefresh = () => {
    navigate("/study/cplus", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
  };

  // Chapter Scrolling
  const sectionRefs = {
    section01: useRef(null),
    section02: useRef(null),
    section03: useRef(null),
    section04: useRef(null),
    section05: useRef(null),
    section06: useRef(null),
    section07: useRef(null),
    section08: useRef(null),
    section09: useRef(null),
    section10: useRef(null),
  };

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxLink onClick={() => handleStudy()}>
            <TopBoxText>{firstpath}</TopBoxText>
          </TopBoxLink>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxLink onClick={() => handleRefresh()}>
            <TopBoxText>{secondpath}</TopBoxText>
          </TopBoxLink>
        </TopBox>
      </TopBoxWide>
      <Container>
        <CPlus_Title_M />
        <CPlus_ClassList_M refs={sectionRefs} />
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};

export default CPlus_Main_M;
