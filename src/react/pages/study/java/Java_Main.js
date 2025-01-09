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
import Java_ChapterList from "./Java_ChapterList";
import Java_ClassListFull from "./Java_ClassListFull";
import Java_SubjectTitle from "./Java_SubjectTitle";
import {useLocation, useNavigate} from "react-router-dom";

const Java_Main = () => {
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
  const handleJavaMain = () => {
    navigate("/study/java/main", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
  };
  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          {/* <a href="/study" className="menu-link">
            <TopBoxText>{firstpath}</TopBoxText>
          </a> */}
          <PathLink onClick={() => handleStudy()}>
            <TopBoxText>{firstpath}</TopBoxText>
          </PathLink>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          {/* <a href="/study/java/main" className="menu-link">
            <TopBoxText>{secondpath}</TopBoxText>
          </a> */}
          <PathLink onClick={() => handleJavaMain()}>
            <TopBoxText>{secondpath}</TopBoxText>
          </PathLink>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <Java_SubjectTitle />
          <Java_ChapterList />
        </LeftContainer>
        <RightContainer>
          <Java_ClassListFull firstpath={firstpath} secondpath={secondpath} />
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default Java_Main;
