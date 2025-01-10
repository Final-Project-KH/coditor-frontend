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
import C_SubjectTitle from "./C_SubjectTitle";
import { C_ClassListFull_01 } from "./C_ClassListFull";

const C_01 = () => {
  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <a href="/study" className="menu-link">
            <TopBoxText>study</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/c" className="menu-link">
            <TopBoxText>C</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/c/01" className="menu-link">
            <TopBoxText>01. C 기본</TopBoxText>
          </a>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <C_SubjectTitle />
        </LeftContainer>
        <RightContainer>
          <C_ClassListFull_01 />
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default C_01;
