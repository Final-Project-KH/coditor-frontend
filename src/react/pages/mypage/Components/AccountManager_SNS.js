import {
  CenterContainerEach,
  CenterContainerTitle,
  CenterContentsContainer,
  SubmitButton,
  AlertTitle,
  CenterSNSContentsEach1,
  CenterSNSContentsEach2,
  CenterSNSContentsEach3,
  CenterSNSContentsInner,
  SNSIcon,
} from "../../../styles/mypage/MyPage";

const AccountManager_SNS = () => {
  return (
    <>
      <CenterContainerEach>
        <CenterContainerTitle>SNS 계정 연동</CenterContainerTitle>
        <CenterContentsContainer>
          <CenterSNSContentsEach1>
            <CenterSNSContentsInner>
              <SNSIcon icon="/images/sns/gmail.png"></SNSIcon>
              <AlertTitle>Google</AlertTitle>
              <SubmitButton>연결하기</SubmitButton>
            </CenterSNSContentsInner>
          </CenterSNSContentsEach1>
          <CenterSNSContentsEach2>
            <CenterSNSContentsInner>
              <SNSIcon icon="/images/sns/kakao.png"></SNSIcon>
              <AlertTitle>Kakao</AlertTitle>
              <SubmitButton>연결하기</SubmitButton>
            </CenterSNSContentsInner>
          </CenterSNSContentsEach2>
          <CenterSNSContentsEach3>
            <CenterSNSContentsInner>
              <SNSIcon icon="/images/sns/naver.png"></SNSIcon>
              <AlertTitle>Naver</AlertTitle>
              <SubmitButton>연결하기</SubmitButton>
            </CenterSNSContentsInner>
          </CenterSNSContentsEach3>
        </CenterContentsContainer>
      </CenterContainerEach>
    </>
  );
};

export default AccountManager_SNS;
