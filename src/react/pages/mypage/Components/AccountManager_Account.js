import { useEffect, useState } from "react";
import {
  CenterContainerEach,
  CenterContainerTitle,
  CenterContentsContainer,
  AccountEachContainer,
  InputLabel,
  IDInput,
  InputContainer,
  EmailInput,
  SubmitButton,
  PasswordInput,
} from "../../../styles/mypage/MyPage";
import AxiosApi from "../../../../api/AxiosApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AccountManager_Account = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const nickname = useSelector((state) => state.auth.nickname);

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

  return (
    <>
      <CenterContainerEach>
        <CenterContainerTitle>계정 관리</CenterContainerTitle>
        <CenterContentsContainer>
          <AccountEachContainer>
            <InputLabel>아이디</InputLabel>
            <IDInput disabled value={userId}></IDInput>
          </AccountEachContainer>
          <AccountEachContainer>
            <InputLabel>이메일</InputLabel>
            <InputContainer>
              <EmailInput value={userEmail} autoComplete="off"></EmailInput>
              <SubmitButton>이메일 변경</SubmitButton>
            </InputContainer>
          </AccountEachContainer>
          <AccountEachContainer>
            <InputLabel>비밀번호</InputLabel>
            <InputContainer>
              <PasswordInput placeholder="현재 비밀번호 입력" type="password"></PasswordInput>
              <SubmitButton>비밀번호 변경</SubmitButton>
            </InputContainer>
          </AccountEachContainer>
        </CenterContentsContainer>
      </CenterContainerEach>
    </>
  );
};

export default AccountManager_Account;
