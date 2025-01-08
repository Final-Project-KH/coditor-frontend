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
  ClassIndex,
  ClassIndexName,
  ClassIndexInner,
} from "../../../styles/study/Study";

const Java_ChapterList = () => {
  return (
    <>
    <ClassIndex>
      <ClassIndexInner>
      <ClassIndexName>01. Java 시작</ClassIndexName>
      <hr style={{ width: "95%", color: "white" }} />
      <ClassIndexName>02. 기본 자료형과 연산자 / 제어문</ClassIndexName>
      <hr style={{ width: "95%", color: "white" }} />
      <ClassIndexName>03. 배열과 문자열(참조 타입)</ClassIndexName>
      <hr style={{ width: "95%", color: "white" }} />
      <ClassIndexName>04. 객체 지향 프로그래밍</ClassIndexName>
      <hr style={{ width: "95%", color: "white" }} />
      <ClassIndexName>05. Java API 클래스</ClassIndexName>
      <hr style={{ width: "95%", color: "white" }} />
      <ClassIndexName>06. 제네릭 / 컬렉션 프레임워크</ClassIndexName>
      <hr style={{ width: "95%", color: "white" }} />
      <ClassIndexName>07. Thread / 예외 처리</ClassIndexName>
      <hr style={{ width: "95%", color: "white" }} />
      <ClassIndexName>08. 람다와 스트림 / 입력과 출력</ClassIndexName>
      <hr style={{ width: "95%", color: "white" }} />
      <ClassIndexName>09. 네트워킹</ClassIndexName>
      </ClassIndexInner>
      </ClassIndex>
    </>
  );
};

export default Java_ChapterList;