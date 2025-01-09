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
import Java_SubjectTitle from "./Java_SubjectTitle";
import {Java_ClassListFull_01} from "./Java_ClassListFull";
import {useLocation, useNavigate} from "react-router-dom";

const Java_01 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {firstpath, secondpath, thirdpath} = location.state || {};

  const handleStudy = () => {
    navigate("/study", {
      state: {
        firstpath: firstpath,
      },
    });
  };
  const handleJavaMain = () => {
    navigate("/study/java/main", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
  };
  const handleRefresh = () => {
    navigate("/study/java/01", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: thirdpath,
      },
    });
  };
  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          {/* <a href="/study" className="menu-link">
            <TopBoxText>study</TopBoxText>
          </a> */}
          <PathLink onClick={() => handleStudy()}>
            <TopBoxText>{firstpath}</TopBoxText>
          </PathLink>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          {/* <a href="/study/java/main" className="menu-link">
            <TopBoxText>Java</TopBoxText>
          </a> */}
          <PathLink onClick={() => handleJavaMain()}>
            <TopBoxText>{secondpath}</TopBoxText>
          </PathLink>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <PathLink onClick={() => handleRefresh()}>
            <TopBoxText>{thirdpath}</TopBoxText>
          </PathLink>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <Java_SubjectTitle />
        </LeftContainer>
        <RightContainer>
          <Java_ClassListFull_01
            firstpath={firstpath}
            secondpath={secondpath}
          />
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default Java_01;
