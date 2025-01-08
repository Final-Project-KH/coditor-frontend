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
} from "../../../styles/study/Study";

const Java_01_02 = () => {
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
        </LeftContainer>
        <RightContainer>
          <EachClass>
            <ClassHeader>
              <ClassHeaderTitle>Java 개발 환경 구축</ClassHeaderTitle>
            </ClassHeader>
            <ClassContentsContainer>
              <ClassContentsText>
                자바 개발을 위해 자바와 자바 프로그래밍을 위한 통합 개발
                환경(Integrated Development Environment)이 필요 합니다.
                통합개발환경에는 이클립스, 인텔리제이, VS Code 등이 있으며,
                인텔리제이를 주로 사용하도록 하겠습니다.
              </ClassContentsText>
              <ClassContentsTitle2>프로그램 설치</ClassContentsTitle2>
              <hr />
              <ClassContentsTitle3>JDK 설치</ClassContentsTitle3>
              <ClassContentsText>
                https://oracle.com 접속
                <br />
                Java SE Development Kit 11.0.15
                <br />
                오라클 계정 생성 필요
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>인텔리제이 설치</ClassContentsTitle3>
              <ClassContentsText>
                주로 자바 개발시 이클립스와 더불어 많이 사용되고 있으며,
                이클립스 보다 더 많은 장점을 가지고 있어 인텔리제이를 통합 개발
                환경(IDE)로 사용하도록 하겠습니다.
                <br />
                상용 버전인 Uitimate 버전과 무료 버전이 Community 버전이
                존재하며 Community 버전으로도 충분히 개발을 진행할 수 있으므로
                Community 버전을 사용하도록 하겠습니다.
                <br />
                https://www.jetbrains.com/ko-kr/idea/
                <br />
                <ClassContentsTextTab>
                  - 환경 설정 > 에디터 > 일반 > Ctrl + 마우스 휠로 글꼴 크기
                  변경
                </ClassContentsTextTab>
              </ClassContentsText>
              <ClassContentsTitle2>환경 변수 설정</ClassContentsTitle2>
              <hr />
              <ClassContentsText>
                인텔리제이를 이용해 자바를 컴파일하고 실행하는 경우는 필요 없을
                수 있으나, 스프링부트를 사용하는 백앤드 개발 시 필요합니다.
                <br />
                시스템 환경변수는 모든 사용자 및 프로세스에 적용되는 전역적인
                설정입니다. 이러한 변수는 컴퓨터의 운영체제 및 시스템 구성
                요소와 관련된 정보를 저장하며, 모든 계정에서 공유됩니다.
                <br />
                사용자 환경변수는 특정 사용자 계정에 대한 설정을 지정합니다.
                <br />
                PATH의 경로는 JDK 설치 경로에 따라 달라집니다.
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>Mac OS</ClassContentsTitle3>
              <ClassContentsText>
                아래의 내용은 .zshrc 파일에 대한 설정 예시 이며, 자바 JDK 설치
                경로와 안드로이드 설치 경로는 개인 PC의 설치 경로로 변경해야
                합니다.
              </ClassContentsText>
            </ClassContentsContainer>
          </EachClass>
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default Java_01_02;
