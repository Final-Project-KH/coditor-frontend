import { useEffect, useState } from "react";
import {
  CenterContentsContainer,
  AccountEachContainer,
  InputLabel,
  IDInput,
  InputContainer,
  EmailInput,
  SubmitButton,
  PasswordInput,
  ProfileImage,
  UserNickName,
  UserEmail,
  AccountManagerContainer,
  ModifyButton,
  ButtonContainer,
  CancelButton,
  NicknameInput,
} from "../../../styles/mypage/MyPage_M";
import AxiosApi from "../../../../api/AxiosApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AccountManager_ProfileIMG_M from "./AccountManager_ProfileIMG_M";

const AccountManager_Account_M = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const profile = useSelector((state) => state.auth.profile);
  const nickname = useSelector((state) => state.auth.nickname);
  const [userSignupDate, setUserSignupDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const mypage = async () => {
      try {
        const response = await AxiosApi.getmyprofile();
        console.log(response);
        setUserSignupDate(response.registeredAt);
      } catch (error) {
        navigate("/login", { replace: true });
      }
    };
    mypage();
  }, []);

  useEffect(() => {
    const mypage = async () => {
      try {
        const response = await AxiosApi.getmyprofile();
        console.log(response);
        setUserId(response.userId);
        setUserEmail(response.email);
      } catch (error) {
        navigate("/login", { replace: true });
      }
    };
    mypage();
  }, []);

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      <AccountManagerContainer>
        {!isEditing ? (
          // 프로필 관리 컨테이너 (기본 화면)
          <>
            <AccountManager_ProfileIMG_M />
            <UserNickName>{nickname}</UserNickName>
            <UserEmail>{userEmail}</UserEmail>
            <ModifyButton onClick={() => setIsEditing(true)}>
              정보 수정하기
            </ModifyButton>
          </>
        ) : (
          <>
            <AccountEachContainer>
              <InputLabel>아이디</InputLabel>
              <IDInput disabled value={userId} />
            </AccountEachContainer>
            <AccountEachContainer>
              <InputLabel>닉네임</InputLabel>
              <InputContainer>
                <NicknameInput value={nickname} />
                <SubmitButton>변경</SubmitButton>
              </InputContainer>
            </AccountEachContainer>
            <AccountEachContainer>
              <InputLabel>이메일</InputLabel>
              <InputContainer>
                <EmailInput value={userEmail} autoComplete="off" />
                <SubmitButton>변경</SubmitButton>
              </InputContainer>
            </AccountEachContainer>
            <AccountEachContainer>
              <InputLabel>비밀번호</InputLabel>
              <InputContainer>
                <PasswordInput
                  placeholder="현재 비밀번호 입력"
                  type="password"
                />
                <SubmitButton>변경</SubmitButton>
              </InputContainer>
            </AccountEachContainer>
            <ButtonContainer>
              <CancelButton onClick={() => handleCancel()}>
                뒤로가기
              </CancelButton>
            </ButtonContainer>
          </>
        )}
      </AccountManagerContainer>
    </>
  );
};

export default AccountManager_Account_M;
