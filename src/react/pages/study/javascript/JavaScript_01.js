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
import JavaScript_SubjectTitle from "./JavaScript_SubjectTitle";
import { JavaScript_ClassListFull_01 } from "./JavaScript_ClassListFull";

const JavaScript_01 = () => {
  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <a href="/study" className="menu-link">
            <TopBoxText>study</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/javascript/main" className="menu-link">
            <TopBoxText>JavaScript</TopBoxText>
          </a>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <JavaScript_SubjectTitle />
        </LeftContainer>
        <RightContainer>
          <JavaScript_ClassListFull_01 />
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default JavaScript_01;
