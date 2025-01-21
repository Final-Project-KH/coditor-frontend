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
  const [inputUserId, setInputUserId] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // 로그인 중 상태 관리
  const [userId, setUserId] = useState(""); // 가입일 추가해야함
  const [isUserIdAvailable, setIsUserIdAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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

  async function confirmemail(email) {
    try {
      const response = await AxiosApi.findid(email);
      console.log(response.data);
      return response.data;
    } catch (error) {
      setEmailMessage("등록된 이메일이 없습니다.");
      setIsEmail(false);
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
      setEmailMessage("아이디를 찾기 위해서는 이메일이 필요합니다.");
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

  const onClickFindId = async (e) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsLoading(true);
    setIsSubmitting(true);
    const currentValue = inputEmail;
    try {
      const emailExist = await confirmemail(currentValue);
      console.log(emailExist);
      console.log(emailExist.userId);
      if (emailExist) {
        setIsUserIdAvailable(true);
        setUserId(emailExist.userId);
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
          <FloatingTitle isUserIdAvailable={isUserIdAvailable}>
            {!isUserIdAvailable ? "아이디 찾기" : "아이디 찾기 결과"}
          </FloatingTitle>
          <InputDiv isUserIdAvailable={isUserIdAvailable}>
            {!isUserIdAvailable ? (
              <Input
                autoComplete="off"
                placeholder="등록한 이메일 주소 입력"
                icon="/images/icon/mail.png"
                value={inputEmail}
                isEmail={isEmail}
                onChange={(e) => onChangeEmail(e)}
                onBlur={(e) => onBlurEmail(e)}
              ></Input>
            ) : (
              <FindIdOutput>{userId}</FindIdOutput>
            )}

            {isEmail && !isUserIdAvailable && (
              <FindIdButton isEmail={isEmail} onClick={(e) => onClickFindId(e)}>
                아이디확인
              </FindIdButton>
            )}
          </InputDiv>
          {!isEmail && !isUserIdAvailable && (
            <ValidEmailMessage isEmail={isEmail}>
              {emailMessage}
            </ValidEmailMessage>
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
            {/* 공지 및 안내 페이지 링크 연결 미구현 */}
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
