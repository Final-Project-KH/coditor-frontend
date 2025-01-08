import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AxiosApi from "../../../api/AxiosApi";
import { setLoginData, setError } from "../../../redux/slice/authSlice";
import JwtDecoding from "../../../api/JwtDecode";
import { useNavigate } from "react-router-dom";
import {
  Wrap,
  Container,
  TopBar,
  LogoContainer,
  Logo,
  StyledLink,
  FloatingContainer,
  NoticeContainer,
  Notice,
  NoticeLink,
  FloatingTitle,
  Input,
  InputExtra,
  SignIn,
  SignUp,
  ThirdLogin,
  ThirdLoginItem,
  StyledP,
  InputExtraItem,
  InputExtraItemCheckBox,
  InputExtraItemLeftP,
  InputExtraItemRightP,
} from "../../styles/login/login";

const Login = () => {
  const [inputUserId, setInputUserId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [isId, setIsId] = useState("");
  const [isPw, setIsPw] = useState("");
  const [isChecked, setIsChecked] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, nickname } = useSelector((state) => state.auth);

  const handleInputChange = (e, setState, setValidState) => {
    setState(e.target.value);
    setValidState(e.target.value.length >= 5);
  };

  const handleCheckBox = (e) => {
    setIsChecked(e.target.checked);
  };

  // 실제 뷰포트 높이를 계산하여 CSS 변수에 설정
  const setViewportHeight = () => {
    const vh = window.innerHeight * 0.01; // 1 vh에 해당하는 값 계산
    document.documentElement.style.setProperty("--vh", `${vh}px`); // CSS 변수에 설ㄹ정
  };

  setViewportHeight();
  window.addEventListener("resize", setViewportHeight);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const rsp = await AxiosApi.login(inputUserId, inputPw);
      console.log(rsp.data);

      if (rsp.data.grantType === "Bearer") {
        const nickname = JwtDecoding.getFieldFromToken(
          rsp.data.accessToken,
          "nickname"
        ); // 이 부분 체크 (아직 Dispatch 전에 가져오기 떄문에 null 가능성 높음)
        console.log("액세스 토큰 : ", rsp.data.accessToken);
        console.log("리프레쉬 토큰 : ", rsp.data.refreshToken);
        dispatch(
          setLoginData({
            nickname: nickname,
            accesstoken: rsp.data.accessToken,
            refreshtoken: rsp.data.refreshToken,
          })
        );
        navigate("/");
      }
    } catch (err) {
      dispatch(setError(err.rsp?.data?.message || "Login Failed"));
    }
  };
  return (
    <Wrap>
      <Container>
        <TopBar>
          <LogoContainer>
            <Logo>
              <StyledLink to="/"></StyledLink>
            </Logo>
          </LogoContainer>
        </TopBar>
        <FloatingContainer>
          <FloatingTitle>로그인</FloatingTitle>
          <Input
            autoComplete="off"
            placeholder="아이디 입력"
            icon="/images/icon/user.png"
            value={inputUserId}
            onChange={(e) => handleInputChange(e, setInputUserId, setIsId)}
          ></Input>
          <Input
            type="password"
            placeholder="비밀번호 입력"
            icon="/images/icon/pwd.png"
            value={inputPw}
            onChange={(e) => handleInputChange(e, setInputPw, setIsPw)}
          ></Input>
          <InputExtra>
            <InputExtraItem>
              <InputExtraItemCheckBox
                type="checkbox"
                id="autologin"
                checked={isChecked}
                onChange={handleCheckBox}
              ></InputExtraItemCheckBox>
              {/* 아이디 저장 관련 로직 아직 미구현 */}
              <InputExtraItemLeftP>아이디 저장</InputExtraItemLeftP>
            </InputExtraItem>
            <InputExtraItem>
              <InputExtraItemRightP>
                {/* 아이디 찾기 페이지 링크 연결 미구현 */}
                <StyledLink to="#"></StyledLink>
                아이디 찾기
              </InputExtraItemRightP>
              {/* 비밀번호 찾기 페이지 링크 연결 미구현 */}
              <InputExtraItemRightP>
              <StyledLink to="#"></StyledLink>
              비밀번호 찾기
              </InputExtraItemRightP>
            </InputExtraItem>
          </InputExtra>
          {isId && isPw ? (
            <SignIn enabled onClick={handleSubmit}>
              로그인하기
            </SignIn>
          ) : (
            <SignIn disabled>로그인하기</SignIn>
          )}
          <SignUp>
            <StyledLink to="/signup"></StyledLink>
            회원가입
          </SignUp>
          <ThirdLogin>
            <ThirdLoginItem icon="/images/sns/gmail.png">
              {/* 3자 인증 로그인 페이지 링크 연결 미구현 */}
              <StyledLink to="#"></StyledLink>
            </ThirdLoginItem>
            <ThirdLoginItem icon="/images/sns/kakao.png">
              <StyledLink to="#"></StyledLink>
            </ThirdLoginItem>
            <ThirdLoginItem icon="/images/sns/naver.png">
              <StyledLink to="#"></StyledLink>
            </ThirdLoginItem>
            <ThirdLoginItem icon="/images/sns/facebook.png">
              <StyledLink to="#"></StyledLink>
            </ThirdLoginItem>
          </ThirdLogin>
          <StyledP>SNS 계정으로 로그인하실 경우</StyledP>
          <StyledP>일부 서비스 이용에 제한이 있을 수 있습니다.</StyledP>
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
      </Container>
    </Wrap>
  );
};
export default Login;
