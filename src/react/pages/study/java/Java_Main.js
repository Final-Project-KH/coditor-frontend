import {
  Wrap,
  Container,
  LeftContainer,
  RightContainer,
  LeftSubjectContainer,
  SubjectImgContainer,
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
} from "../../../styles/study/Study";
import Java_ChapterList from "./Java_ChapterList";
import Java_ClassListFull from "./Java_ClassListFull";

const Java_Main = () => {
  return (
    <Wrap>
      <Container>
        <LeftContainer>
          <LeftSubjectContainer>
            <SubjectImgContainer />
            <SubjectTitle>Java 개념잡기</SubjectTitle>
            <SubjectContents>기본 자료형과 연산자 / 학습중</SubjectContents>
            <SubjectRateContainer>
              <SubjectRateBox>
                <SubjectRateWhite />
                <SubjectRateBlack />
              </SubjectRateBox>
              <SubjectRateContents>52%</SubjectRateContents>
            </SubjectRateContainer>
          </LeftSubjectContainer>
          <Java_ChapterList />
        </LeftContainer>
        <RightContainer>
          <Java_ClassListFull />
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default Java_Main;
