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
import Java_SubjectTitle from "./Java_SubjectTitle";
import { Java_ClassListFull_02 } from "./Java_ClassListFull";

const Java_02 = () => {
  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <a href="/study" className="menu-link">
            <TopBoxText>study</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/java/main" className="menu-link">
            <TopBoxText>JavaScript</TopBoxText>
          </a>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <Java_SubjectTitle />
        </LeftContainer>
        <RightContainer>
          <Java_ClassListFull_02 />
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default Java_02;
