import {
  Wrap,
  Container,
  LeftContainer,
  RightContainer,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxWide,
} from "../../../styles/study/Study";
import Java_ChapterList from "./Java_ChapterList";
import Java_ClassListFull from "./Java_ClassListFull";
import Java_SubjectTitle from "./Java_SubjectTitle";

const Java_Main = () => {
  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <a href="/study" className="menu-link">
            <TopBoxText>study</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/java/main" className="menu-link">
            <TopBoxText>Java</TopBoxText>
          </a>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <Java_SubjectTitle />
          <Java_ChapterList />
        </LeftContainer>
        <RightContainer>
          <Java_ClassListFull />
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default Java_Main;
