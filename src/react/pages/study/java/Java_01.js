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
import { Java_ClassListFull_01 } from "./Java_ClassListFull";

const Java_01 = () => {
  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <a href="/study" className="menu-link">
            <TopBoxText>study</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/java" className="menu-link">
            <TopBoxText>Java</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/java/01" className="menu-link">
            <TopBoxText>01. Java 시작</TopBoxText>
          </a>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <Java_SubjectTitle />
        </LeftContainer>
        <RightContainer>
          <Java_ClassListFull_01 />
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default Java_01;
