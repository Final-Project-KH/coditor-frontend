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

const Java_ClassListSmall_09 = () => {
  return (
    <>
      <EachClass>
        <ClassHeader>
          <ClassHeaderTitle>09. 네트워킹</ClassHeaderTitle>
        </ClassHeader>
        <ClassContents>
          <ClassSet>
            <ClassName>웹의 개요</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>TCP / IP와 소켓 통신</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>TCP 네트워킹</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Server (단일 채팅 서버)</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>Client (단일 채팅 클라이언트)</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>socket을 이용한 다중 채팅</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
            </ClassStatus>
          </ClassSet>
          <hr />
          <ClassSet>
            <ClassName>직렬화를 이용한 네트워크</ClassName>
            <ClassStatus>
              <ClassStatusDot style={{ color: "#313131" }}>●</ClassStatusDot>
            </ClassStatus>
          </ClassSet>
        </ClassContents>
      </EachClass>
    </>
  );
};

export default Java_ClassListSmall_09;
