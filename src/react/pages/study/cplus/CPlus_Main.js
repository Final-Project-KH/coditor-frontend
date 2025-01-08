import {
  Wrap,
  Container,
  LeftContainer,
  RightContainer,
  LeftSubjectContainer,
  SubjectImgContainerCPlus,
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
          <LeftSubjectContainer>
            <SubjectImgContainerCPlus />
            <SubjectTitle>C++ 개념잡기</SubjectTitle>
            <SubjectContents>기본 자료형과 연산자 / 학습중</SubjectContents>
            <SubjectRateContainer>
              <SubjectRateBox>
                <SubjectRateWhite />
                <SubjectRateBlack />
              </SubjectRateBox>
              <SubjectRateContents>52%</SubjectRateContents>
            </SubjectRateContainer>
          </LeftSubjectContainer>
          {/* <Java_ChapterList /> */}
        </LeftContainer>
        <RightContainer>{/* <Java_ClassListFull /> */}</RightContainer>
      </Container>
    </Wrap>
  );
};

export default CPlus_Main;
