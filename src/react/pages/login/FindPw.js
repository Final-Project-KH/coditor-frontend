import React, {useEffect, useState, useRef} from "react";
import AxiosApi from "../../../api/AxiosApi";
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
  FindPwButtonDiv,
  FindPwButtonTimer,
  FindPwButtonRefresh,
  SignIn,
  LinkDiv,
  SignUp,
  BodyContainer,
  FindPwButton,
  SecurityButton,
  ValidEmailMessage,
  ValidSecurityMessage,
} from "../../styles/login/FindPw";
import {RotatingLines} from "react-loader-spinner";

const FindPw = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isEmailAvailable, setIsEmailAvailable] = useState(true);
  const [emailMessage, setEmailMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inputSecurity, setInputSecurity] = useState("");
  const [isSecurity, setIsSecurity] = useState(false);
  const [securityMessage, setSecurityMessage] = useState("");
  const [isSecurityAvailable, setIsSecurityAvailable] = useState(false);
  const [isPwAvailable, setIsPwAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // 타이머 설정
  const [timeLeft, setTimeLeft] = useState(180);
  const [isRunning, setIsRunning] = useState(false);
  const timeLeftRef = useRef(180);

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

  // 타이머 업데이트 함수 (정확한 1초 단위 실행)
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      console.log("setInterval 실행됨", timeLeftRef.current);
      timeLeftRef.current -= 1;
      setTimeLeft(timeLeftRef.current);
      if (timeLeftRef.current <= 0) {
        clearInterval(interval);
        stopTimer();
        return;
      }
      if (!isEmail) {
        clearInterval(interval);
        resetTimer();
        return;
      }
    }, 1000);

    return () => clearInterval(interval); // 기존 타이머 정리
  }, [isRunning, isEmail]); // 타이머 상태가 변경될 때만 실행

  const startTimer = () => {
    timeLeftRef.current = 180;
    setTimeLeft(180);
    setIsRunning(true);
  };
  const resetTimer = () => {
    timeLeftRef.current = 0;
    setTimeLeft(0);
    setEmailMessage("새로운 이메일을 입력해주세요.");
    setIsRunning(false);
    setIsSecurityAvailable(false);
  };

  const stopTimer = () => {
    timeLeftRef.current = 0;
    setTimeLeft(0);
    setEmailMessage("요청시간이 지났습니다. 다시 시도해주세요.");
    setIsRunning(false);
    setIsSecurityAvailable(false);
  };

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
    setIsRunning(false);
    setIsLoading(true);
    setIsSubmitting(true);
    const currentValue = inputEmail;
    try {
      const emailExist = await verifyemail(currentValue);
      if (emailExist) {
        setSecurityMessage("");
        setIsSecurityAvailable(true);
        startTimer();
      } else {
        setEmailMessage("등록된 이메일이 없습니다.");
        setIsEmail(false);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
      setIsSubmitting(false);
    }
  };

  const onChangeSecurity = (e) => {
    setInputSecurity(e.target.value);
  };

  const onClickVerifySecurity = async (e) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    const currentValue = inputSecurity;
    console.log(currentValue);
    try {
      const otpAvailable = await verifysecurity(currentValue, inputEmail);
      if (!otpAvailable) {
        setSecurityMessage("인증번호가 일치하지 않습니다.");
        setIsSecurity(false);
      } else {
        setEmailMessage("");
        setSecurityMessage("");
        setIsSecurity(true);
        setIsRunning(false);
        setIsSecurityAvailable(false);
        setIsEmailAvailable(false);
      }
    } catch (error) {
    } finally {
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
            {!isSecurityAvailable ? "비밀번호 재설정" : "비밀번호 찾기 결과"}
          </FloatingTitle>
          <InputDiv isSecurityAvailable={isSecurityAvailable}>
            <Input
              autoComplete="off"
              placeholder="등록한 이메일 주소 입력"
              icon="/images/icon/mail.png"
              value={inputEmail}
              isEmail={isEmail}
              isLoading={isLoading}
              onChange={(e) => onChangeEmail(e)}
              onBlur={(e) => onBlurEmail(e)}
            ></Input>
            {isEmail &&
            isEmailAvailable &&
            !isSecurity &&
            !isSecurityAvailable &&
            !isLoading ? (
              <FindPwButton isEmail={isEmail} onClick={(e) => onClickFindPw(e)}>
                인증번호 받기
              </FindPwButton>
            ) : isEmail && isEmailAvailable && !isRunning && isLoading ? (
              <FindPwButtonDiv>
                <RotatingLines
                  visible={true}
                  height="30"
                  width="30"
                  strokeColor="black"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </FindPwButtonDiv>
            ) : (
              isEmail &&
              isEmailAvailable &&
              isSecurityAvailable &&
              isRunning &&
              !isLoading && (
                <FindPwButtonDiv>
                  <FindPwButtonTimer>
                    {Math.floor(timeLeft / 60)}:
                    {timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
                  </FindPwButtonTimer>
                  <FindPwButtonRefresh
                    onClick={(e) => {
                      onClickFindPw(e);
                    }}
                  ></FindPwButtonRefresh>
                </FindPwButtonDiv>
              )
            )}
          </InputDiv>
          <ValidEmailMessage isEmail={isEmail}>
            {emailMessage}
          </ValidEmailMessage>
          {isSecurityAvailable && (
            <>
              <InputDiv>
                <InputSecurity
                  autoComplete="off"
                  placeholder="인증번호 입력"
                  icon="/images/icon/mail.png"
                  onChange={onChangeSecurity}
                ></InputSecurity>
                <SecurityButton
                  isSecurity={isSecurity}
                  onClick={(e) => {
                    onClickVerifySecurity(e);
                  }}
                >
                  이메일 인증
                </SecurityButton>
              </InputDiv>
              <ValidSecurityMessage isSecurity={isSecurity}>
                {securityMessage}
              </ValidSecurityMessage>
            </>
          )}
          <SignIn>
            <StyledLink to="/login"></StyledLink>비밀번호 재설정하기
          </SignIn>
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
