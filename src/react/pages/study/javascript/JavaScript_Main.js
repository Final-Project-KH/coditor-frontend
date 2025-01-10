import React, { useRef } from "react";

import {
  Wrap,
  Container,
  LeftContainer,
  RightContainer,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxWide,
  PathLink,
} from "../../../styles/study/Study";
import JavaScript_ChapterList from "./JavaScript_ChapterList";
import JavaScript_SubjectTitle from "./JavaScript_SubjectTitle";
import JavaScript_ClassListFull from "./JavaScript_ClassListFull";
import {useLocation, useNavigate} from "react-router-dom";

const JavaScript_Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {firstpath, secondpath} = location.state || {};

  const handleStudy = () => {
    navigate("/study", {
      state: {
        firstpath: firstpath,
      },
    });
  };
  const handleJavaScriptMain = () => {
    navigate("/study/javascript/main", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
  };

  const sectionRefs = {
    section01: useRef(null),
    section02: useRef(null),
    section03: useRef(null),
    section04: useRef(null),
    section05: useRef(null),
  }

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <PathLink onClick={() => handleStudy()}>
            <TopBoxText>{firstpath}</TopBoxText>
          </PathLink>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <PathLink onClick={() => handleJavaScriptMain()}>
            <TopBoxText>{secondpath}</TopBoxText>
          </PathLink>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <JavaScript_SubjectTitle />
          <JavaScript_ChapterList refs={sectionRefs} />
        </LeftContainer>
        <RightContainer>
          <JavaScript_ClassListFull refs={sectionRefs}  />
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default JavaScript_Main;
