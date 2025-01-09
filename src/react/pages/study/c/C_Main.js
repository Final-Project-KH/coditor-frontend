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
import C_ChapterList from "./C_ChapterList";
import C_ClassListFull from "./C_ClassListFull";
import C_SubjectTitle from "./C_SubjectTitle";

const C_Main = () => {
  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <a href="/study" className="menu-link">
            <TopBoxText>study</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/c/main" className="menu-link">
            <TopBoxText>C</TopBoxText>
          </a>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <C_SubjectTitle />
          <C_ChapterList />
        </LeftContainer>
        <RightContainer>
          <C_ClassListFull />
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default C_Main;
