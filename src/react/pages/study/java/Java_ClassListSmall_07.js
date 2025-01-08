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
  ClassContentsTitle1,
  ClassContentsText,
  ClassContentsContainer,
  ClassContentsTitle2,
  ClassContentsTitle3,
  ClassContentsTextTab,
  ClassContentsImage,
  ClassContents,
  ClassSet,
  ClassName,
  ClassStatus,
  ClassStatusDot,
  ClassStatusText,
  StickyClassBox,
} from "../../../styles/study/Study";

const Java_ClassListSmall_07 = () => {
  return (
    <>
      <EachClass>
        <ClassHeader>
          <ClassHeaderTitle>07. Thread / 예외 처리</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>Thread</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>✏️ 예제 풀어보기 (RPG 게임 만들기)</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>예외 처리</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>
    </>
  );
};

export default Java_ClassListSmall_07;
