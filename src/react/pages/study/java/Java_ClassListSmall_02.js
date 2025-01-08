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

const Java_ClassListSmall_02 = () => {
  return (
    <>
      <EachClass>
        <ClassHeader>
          <ClassHeaderTitle>02. 기본 자료형과 연산자 / 제어문</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>
              <a href="/study/java/02/01" className="menu-link">
                변수와 자료형
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#28B657" }}>●</ClassStatusDot>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
            <a href="/study/java/02/02" className="menu-link">
              변수와 시스템 입출력
              </a></ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#28B657" }}>●</ClassStatusDot>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
            <a href="/study/java/02/03" className="menu-link">
              연산자
              </a></ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#28B657" }}>●</ClassStatusDot>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
            <a href="/study/java/02/04" className="menu-link">
              조건문</a></ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#28B657" }}>●</ClassStatusDot>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
            <a href="/study/java/02/05" className="menu-link">
              반복문</a></ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#28B657" }}>●</ClassStatusDot>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>
    </>
  );
};

export default Java_ClassListSmall_02;
