import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  Container,
  LeftContainer,
  RightContainer,
  SubjectLink,
  ClassContentsText,
  ClassContentsContainer,
  PathLink,
} from "../../styles/study/Study";
import Java_SubjectTitle from "./java/Java_SubjectTitle";
import Python_SubjectTitle from "./python/Python_SubjectTitle";
import C_SubjectTitle from "./c/C_SubjectTitle";
import CPlus_SubjectTitle from "./cplus/CPlus_SubjectTitle";
import JavaScript_SubjectTitle from "./javascript/JavaScript_SubjectTitle";
import {useLocation, useNavigate} from "react-router-dom";

const Study = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {firstpath} = location.state || {};

  const handleRefresh = () => {
    navigate("/study", {
      state: {
        firstpath: firstpath,
      },
    });
  };
  const handleJavaCheck = () => {
    navigate("/study/java/main", {
      state: {
        firstpath: firstpath,
        secondpath: "Java",
      },
    });
  };
  const handlePythonCheck = () => {
    navigate("/study/python/main", {
      state: {
        firstpath: firstpath,
        secondpath: "Python",
      },
    });
  };
  const handleCCheck = () => {
    navigate("/study/c/main", {
      state: {
        firstpath: firstpath,
        secondpath: "C",
      },
    });
  };
  const handleCPlusCheck = () => {
    navigate("/study/cplus/main", {
      state: {
        firstpath: firstpath,
        secondpath: "C++",
      },
    });
  };
  const handleJavaScriptCheck = () => {
    navigate("/study/javascript/main", {
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
            <PathLink>
              <TopBoxText>{firstpath}</TopBoxText>
            </PathLink>
          </TopBox>
        </TopBoxWide>
        <Container>
          <SubjectLink onClick={() => handleJavaCheck()}>
            <Java_SubjectTitle />
          </SubjectLink>
          <SubjectLink onClick={() => handlePythonCheck()}>
            <Python_SubjectTitle />
          </SubjectLink>
          <SubjectLink onClick={() => handleCCheck()}>
            <C_SubjectTitle />
          </SubjectLink>
          <SubjectLink onClick={() => handleCPlusCheck()}>
            <CPlus_SubjectTitle />
          </SubjectLink>
          <SubjectLink onClick={() => handleJavaScriptCheck()}>
            <JavaScript_SubjectTitle />
          </SubjectLink>
        </Container>
      </Wrap>
    </>
  );
};

export default Study;
