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
import Python_ChapterList from "./Python_ChapterList";
import Python_ClassListFull from "./Python_ClassListFull";
import Python_SubjectTitle from "./Python_SubjectTitle";

const Python_Main = () => {
  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <a href="/study" className="menu-link">
            <TopBoxText>study</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/python/main" className="menu-link">
            <TopBoxText>Python</TopBoxText>
          </a>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <Python_SubjectTitle />
          <Python_ChapterList />
        </LeftContainer>
        <RightContainer>
          <Python_ClassListFull />
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default Python_Main;
