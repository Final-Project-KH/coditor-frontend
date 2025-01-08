import {
  Wrap,
  Container,
  LeftContainer,
  RightContainer,
  LeftSubjectContainer,
  SubjectImgContainerJava,
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

const Java_ClassListSmall_03 = () => {
  return (
    <>
      <EachClass>
        <ClassHeader>
          <ClassHeaderTitle>03. 배열과 문자열(참조 타입)</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>참조 타입과 메모리 구조</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#28B657" }}>●</ClassStatusDot>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>배열</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#28B657" }}>●</ClassStatusDot>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>String</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#FF0000" }}>●</ClassStatusDot>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>✏️ 예제 풀어보기 (회원정보)</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>
    </>
  );
};

export default Java_ClassListSmall_03;
