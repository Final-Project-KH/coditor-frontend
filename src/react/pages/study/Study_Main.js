import { useLocation, useNavigate } from "react-router-dom";

import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  Container,
  SubjectLink,
  PathLink,
} from "../../styles/study/Study";
import Java_Title from "./java/Java_Title";
import Python_Title from "./python/Python_Title";
import C_Title from "./c/C_Title";
import CPlus_Title from "./cplus/CPlus_Title";
import JavaScript_Title from "./javascript/JavaScript_Title";

const Study_Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath } = location.state || {};

  // TopBox firstpath
  const handleRefresh = () => {
    navigate("/study", {
      state: {
        firstpath: firstpath,
      },
    });
  };

  // Java onClick
  const handleJavaCheck = () => {
    navigate("/study/java", {
      state: {
        firstpath: firstpath,
        secondpath: "Java",
      },
    });
  };

  // Python onClick
  const handlePythonCheck = () => {
    navigate("/study/python", {
      state: {
        firstpath: firstpath,
        secondpath: "Python",
      },
    });
  };

  // C onClick
  const handleCCheck = () => {
    navigate("/study/c", {
      state: {
        firstpath: firstpath,
        secondpath: "C",
      },
    });
  };

  // C++ onClick
  const handleCPlusCheck = () => {
    navigate("/study/cplus", {
      state: {
        firstpath: firstpath,
        secondpath: "C++",
      },
    });
  };

  // JavaScript onClick
  const handleJavaScriptCheck = () => {
    navigate("/study/javascript", {
      state: {
        firstpath: firstpath,
        secondpath: "JavaScript",
      },
    });
  };

  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <PathLink onClick={() => handleRefresh()}>
              <TopBoxText>{firstpath}</TopBoxText>
            </PathLink>
          </TopBox>
        </TopBoxWide>
        <Container>
          <SubjectLink onClick={() => handleJavaCheck()}>
            <Java_Title />
          </SubjectLink>
          <SubjectLink onClick={() => handlePythonCheck()}>
            <Python_Title />
          </SubjectLink>
          <SubjectLink onClick={() => handleCCheck()}>
            <C_Title />
          </SubjectLink>
          <SubjectLink onClick={() => handleCPlusCheck()}>
            <CPlus_Title />
          </SubjectLink>
          <SubjectLink onClick={() => handleJavaScriptCheck()}>
            <JavaScript_Title />
          </SubjectLink>
        </Container>
      </Wrap>
    </>
  );
};

export default Study_Main;
