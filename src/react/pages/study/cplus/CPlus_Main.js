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
import CPlus_ChapterList from "./CPlus_ChapterList";
import CPlus_SubjectTitle from "./CPlus_SubjectTitle";
import CPlus_ClassListFull from "./CPlus_ClassListFull";

const CPlus_Main = () => {
  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <a href="/study" className="menu-link">
            <TopBoxText>study</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/cplus/main" className="menu-link">
            <TopBoxText>C++</TopBoxText>
          </a>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <CPlus_SubjectTitle />
          <CPlus_ChapterList />
        </LeftContainer>
        <RightContainer>
          <CPlus_ClassListFull />
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default CPlus_Main;
