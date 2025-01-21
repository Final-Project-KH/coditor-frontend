import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import AxiosApi from "../../../api/AxiosApi";
import {setLoginData, setError} from "../../../redux/slice/authSlice";
import {useNavigate} from "react-router-dom";
import Common from "../../../util/Common";
import {
  Wrap,
  TopBarContainer,
  TopBar,
  LogoContainer,
  Logo,
  StyledLink,
  FloatingContainer,
  NoticeContainer,
  Notice,
  NoticeLink,
  FloatingTitle,
  InputDiv,
  Input,
  InputSecurity,
  SignIn,
  LinkDiv,
  SignUp,
  BodyContainer,
  FindIdButton,
  ValidEmailMessage,
  FindIdOutput,
} from "../../styles/login/FindPw";

const FindPw = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const closeMadal = () => {
    console.log("closeMadal 호출됨");
    setModalOpen(false);
  };

  const confirmModal = () => {
    console.log("Confirm 버튼이 눌러졌습니다.");
    closeMadal();
  };
  const [inputEmail, setInputEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // 로그인 중 상태 관리
  const [inputSecurity, setInputSecurity] = useState("");
  const [isSecurity, setIsSecurity] = useState(false);
  const [securityMessage, setSecurityMessage] = useState("");
  const [isSecurityAvailable, setIsSecurityAvailable] = useState(false);
  const [isPwAvailable, setIsPwAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rsp, setRsp] = useState(null); // rsp 상태 추가
  const navigate = useNavigate();

  function emailAvailable(input) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(input);
  }
  // 공통 공란 여부 검사 (공란 시 -> true)
  function isBlank(input) {
    return input.trim() === "";
  }

  async function verifyemail(email) {
    try {
      const response = await AxiosApi.findpw(email);
      console.log(response.data);
      return response.data;
    } catch (error) {
      setEmailMessage("등록된 이메일이 없습니다.");
      setIsEmail(false);
      return null;
    }
  }

  async function verifysecurity(optnumber, email) {
    try {
      const response = await AxiosApi.verifypwsecurity(optnumber, email);
      console.log(response.data);
      return response.data;
    } catch (error) {
      setSecurityMessage("인증번호가 일치하지 않습니다.");
      setIsSecurity(false);
      return null;
    }
  }

  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
    const currentValue = e.target.value;
    if (emailAvailable(currentValue)) {
      setEmailMessage("");
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
  };
  const onBlurEmail = (e) => {
    const currentValue = inputEmail;
    if (isBlank(currentValue)) {
      setEmailMessage("비밀번호를 찾기 위해서는 이메일 인증이 필요합니다.");
      setIsEmail(false);
      return;
    }
    if (!emailAvailable(currentValue)) {
      setEmailMessage("이메일 형식이 올바르지 않습니다.");
      setIsEmail(false);
      return;
    } else {
      setIsEmail(true);
    }
  };
  const onClickFindPw = async (e) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsLoading(true);
    setIsSubmitting(true);
    const currentValue = inputEmail;
    try {
      const emailExist = await verifyemail(currentValue);
      if (emailExist) {
        setIsSecurityAvailable(true);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
      setIsSubmitting(false);
    }
  };

  const setViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    // console.log(`Viewport height 설정: ${vh}`);
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  setViewportHeight();
  window.addEventListener("resize", setViewportHeight);

  return (
    <Wrap>
      <TopBarContainer>
        <TopBar>
          <LogoContainer>
            <Logo>
              <StyledLink to="/"></StyledLink>
            </Logo>
          </LogoContainer>
        </TopBar>
      </TopBarContainer>
      <BodyContainer>
        <FloatingContainer>
          <FloatingTitle>
            {!isSecurityAvailable ? "비밀번호 찾기" : "비밀번호 찾기 결과"}
          </FloatingTitle>
          <InputDiv isSecurityAvailable={isSecurityAvailable}>
            <Input
              autoComplete="off"
              placeholder="등록한 이메일 주소 입력"
              icon="/images/icon/mail.png"
              value={inputEmail}
              isEmail={isEmail}
              onChange={(e) => onChangeEmail(e)}
              onBlur={(e) => onBlurEmail(e)}
            ></Input>
            {isEmail && !isSecurityAvailable && !isLoading ? (
              <FindIdButton isEmail={isEmail} onClick={(e) => onClickFindPw(e)}>
                이메일 인증
              </FindIdButton>
            ) : (
              isEmail &&
              !isSecurityAvailable &&
              isLoading && <FindIdButton></FindIdButton>
            )}
          </InputDiv>
          {!isEmail && (
            <ValidEmailMessage isEmail={isEmail}>
              {emailMessage}
            </ValidEmailMessage>
          )}
          {isSecurityAvailable && (
            <InputDiv>
              <InputSecurity
                autoComplete="off"
                placeholder="인증번호 입력"
                icon="/images/icon/mail.png"
              ></InputSecurity>
            </InputDiv>
          )}
          <SignIn>
            <StyledLink to="/login"></StyledLink>로그인 페이지 이동
          </SignIn>
          <LinkDiv>
            <SignUp>
              <StyledLink to="/signup"></StyledLink>
              회원가입
            </SignUp>
          </LinkDiv>
        </FloatingContainer>
        <NoticeContainer>
          <Notice>
            <NoticeLink to="../legal/Terms"></NoticeLink>
            서비스 이용약관
          </Notice>
          <Notice>
            <NoticeLink to="../legal/Privacy"></NoticeLink>
            개인정보 처리방침
          </Notice>
        </NoticeContainer>
      </BodyContainer>
    </Wrap>
  );
};
export default FindPw;
