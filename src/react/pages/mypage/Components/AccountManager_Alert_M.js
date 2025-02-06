import {
  AlertTitle,
  AlertText,
  CenterAlertContentsEach1,
  CenterAlertContentsEach2,
  CenterAlertContentsInner,
  AlertContainer,
  AlertTitleArea,
} from "../../../styles/mypage/MyPage_M";
import AlertSwtich from "./AlertSwitch";

const AccountManager_Alert_M = () => {
  return (
    <>
      <AlertContainer>
        <CenterAlertContentsEach1>
          <AlertTitleArea>
            <AlertTitle>댓글 알림</AlertTitle>
            <AlertSwtich />
          </AlertTitleArea>
          <CenterAlertContentsInner>
            <AlertText>내 질문에 댓글이 등록되면 알림을 받겠습니다.</AlertText>
          </CenterAlertContentsInner>
        </CenterAlertContentsEach1>
        <CenterAlertContentsEach2>
          <AlertTitleArea>
            <AlertTitle>마케팅 활용 동의 및 광고 수신 동의</AlertTitle>
            <AlertSwtich />
          </AlertTitleArea>
          <CenterAlertContentsInner>
            <AlertText>
              강의 오픈, 신규 테스트 등록, 각종 이벤트, 회원 혜택 등<br />
              코디터 마케팅 알림을 받겠습니다.
            </AlertText>
          </CenterAlertContentsInner>
        </CenterAlertContentsEach2>
      </AlertContainer>
    </>
  );
};

export default AccountManager_Alert_M;
