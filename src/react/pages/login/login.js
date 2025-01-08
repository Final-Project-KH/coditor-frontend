import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AxiosApi from "../../../api/AxiosApi";
import { setLoginData, setError } from "../../../redux/slice/authSlice";
import JwtDecoding from "../../../api/JwtDecode";
import { useNavigate } from "react-router-dom";
import Modal from "../../../util/Modal";
import Common from "../../../util/Common";
import { GoogleOAuthProvider } from "@react-oauth/google"; // GoogleOAuthProvider 추가
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
  // 모달 (Modal) 창을 열고 닫기
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창에 대한 문구
  const [modalContent, setModalContent] = useState("");
  // Modal 모달창 닫는 함수
  const closeMadal = () => {
    setModalOpen(false);
  };

  // Modal 모달창 confirm 동작 함수
  const confirmModal = () => {
    console.log("Confirm 버튼이 눌러졌습니다.");
    closeMadal();
  };

  const [inputUserId, setInputUserId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [isId, setIsId] = useState("");
  const [isPw, setIsPw] = useState("");
  const [isChecked, setIsChecked] = useState("");
  const [googleToken, setGoogleToken] = useState(null); // 구글 토큰 상태 추가

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

  const onGoogleLoginSuccess = async (response) => {
    const token = response.credential;

    if (!token) {
      setModalOpen(true);
      setModalContent("Google 토큰이 존재하지 않습니다.");
      return;
    }

    try {
      // 백엔드 API 호출
      const rsp = await AxiosApi.googleLogin(token);
      const data = rsp.data;

      if (data && data.grantType === "Bearer") {
        // 정상 로그인 처리
        Common.setAccessToken(data.accessToken);
        Common.setRefreshToken(data.refreshToken);

        // 로그인 성공 후 홈 페이지로 리디렉션
        navigate("/");

        console.log("로그인 성공");
      } else if (data.error && data.error === "EMAIL_EXISTS") {
        // 이메일이 이미 존재하는 경우
        console.log("이미 존재하는 이메일: ", data.error);  // 로그 추가

        // 로그인 실패 후 홈 페이지로 리디렉션
        navigate("/");

        // 페이지 이동 후 alert을 띄우기 위한 방법
        setTimeout(() => {
          alert("이미 존재하는 계정입니다.");
          console.log("이미 존재하는 계정입니다.");  // 로그 추가
        }, 500);  // 페이지가 이동할 때까지 약간의 시간 딜레이 추가
      } else {
        setModalOpen(true);
        setModalContent(`구글 로그인 실패: ${data.error}`);
      }
    } catch (error) {
      // 백엔드와의 통신 에러 처리
      console.error("Google login failure: ", error.response?.data || error.message);
      setModalOpen(true);
      setModalContent("구글 로그인 중 서버 오류가 발생했습니다.");
    }
  };



  const onGoogleLoginFailure = (error) => {
    const errorMessage = error?.details || "구글 로그인에 실패했습니다.";
    setModalOpen(true);
    setModalContent(`구글 로그인 실패: ${errorMessage}`);
  };
  // 구글 로그인 스크립트 로드
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id:
            "159300514752-4da56n3as35i523kr5resdcqaba8e7t4.apps.googleusercontent.com",
        callback: onGoogleLoginSuccess,
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // 컴포넌트가 unmount 될 때 스크립트 제거
    };
  }, []);
  // 이미지 클릭 시 구글 로그인 트리거
  const handleGoogleLoginClick = () => {
    window.google.accounts.id.prompt();
  };

  return (
      <GoogleOAuthProvider clientId="159300514752-4da56n3as35i523kr5resdcqaba8e7t4.apps.googleusercontent.com">
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
                <ThirdLoginItem
                    icon="/images/sns/gmail.png"
                    onClick={handleGoogleLoginClick}
                >
                  <StyledP></StyledP>
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
                <NoticeLink to="#"></NoticeLink>
                서비스 이용약관
              </Notice>
              <Notice>
                <NoticeLink to="#"></NoticeLink>
                개인정보 처리방침
              </Notice>
            </NoticeContainer>
          </Container>
        </Wrap>
      </GoogleOAuthProvider>
  );
};
export default Login;
