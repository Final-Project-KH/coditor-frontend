import {
  Wrap,
  Container,
  LeftContainer,
  RightContainer,
  LeftSubjectContainer,
  SubjectImgContainerJavaScript,
  SubjectTitle,
  SubjectContents,
  SubjectRateBlack,
  SubjectRateWhite,
  SubjectRateContents,
  SubjectRateContainer,
  SubjectRateBox,
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassName,
  ClassContents,
  ClassStatus,
  ClassStatusDot,
  ClassStatusText,
  ClassSet,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxWide,
} from "../../../styles/study/Study";
import JavaScript_ChapterList from "./JavaScript_ChapterList";
import JavaScript_SubjectTitle from "./JavaScript_SubjectTitle";
import JavaScript_ClassListFull from "./JavaScript_ClassListFull";

const JavaScript_Main = () => {
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
          <JavaScript_ChapterList />
        </LeftContainer>
        <RightContainer><JavaScript_ClassListFull /></RightContainer>
      </Container>
    </Wrap>
  );
};

export default JavaScript_Main;
