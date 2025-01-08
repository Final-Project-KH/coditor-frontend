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

const Java_ClassListSmall_01 = () => {
  return (
    <>
      <EachClass>
        <ClassHeader>
          <ClassHeaderTitle>01. Java 시작</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>
              <a href="/study/java/01/01" className="menu-link">
                Java 시작하기
              </a>
            </ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#28B657" }}>●</ClassStatusDot>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/01/02" className="menu-link">
                Java 개발 환경 구축
              </a>
            </ClassName>

            <ClassStatus>
              <ClassStatusDot style={{ color: "#28B657" }}>●</ClassStatusDot>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>
              <a href="/study/java/01/03" className="menu-link">
                Java 프로젝트 생성 및 기본
              </a>
            </ClassName>{" "}
            <ClassStatus>
              <ClassStatusDot style={{ color: "#28B657" }}>●</ClassStatusDot>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>
    </>
  );
};

export default Java_ClassListSmall_01;
