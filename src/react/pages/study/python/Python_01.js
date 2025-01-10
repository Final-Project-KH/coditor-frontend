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
import Python_SubjectTitle from "./Python_SubjectTitle";
import { Python_ClassListFull_01 } from "./Python_ClassListFull";

const Python_01 = () => {
  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <a href="/study" className="menu-link">
            <TopBoxText>study</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/python" className="menu-link">
            <TopBoxText>Python</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/python/01" className="menu-link">
            <TopBoxText>01. 개발 환경 구성 및 기본 문법</TopBoxText>
          </a>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <Python_SubjectTitle />
        </LeftContainer>
        <RightContainer>
          <Python_ClassListFull_01 />
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default Python_01;
