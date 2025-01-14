import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../../../api/AxiosApi";
import {
  Wrap,
  Container,
  TopBar,
  LogoContainer,
  Logo,
  StyledLink,
  FloatingContainer,
  FloatingInnerContainer,
  FloatingTitle,
  InputIndex,
  InputId,
  InputPwContainer,
  InputPwDiv,
  InputPw,
  InputPwDivToggle,
  InputEmailDiv,
  InputEmail,
  InputEmailButton,
  InputSecurityDiv,
  InputSecurity,
  InputSecurityButton,
  InputNickName,
  InputExtraContainer,
  InputExtra,
  InputExtraItemCheckBox,
  InputExtraItemP,
  SignUp,
  NoticeContainer,
  Notice,
  NoticeLink,
} from "../../styles/signup/signup";

const Signup = () => {
  const navigate = useNavigate();
  // 키보드 입력
  const [inputUserId, setInputUserId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputConPw, setInputConPw] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  // 오류 메시지
  const [userIdMessage, setUserIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [conPwMessage, setConPwMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  // 유효성 검사
  const [isUserId, setIsUserId] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isConPw, setIsConPw] = useState(false);
  const [isName, setIsName] = useState(false);
  // 약관동의
  const [isCheckedAll, setIsCheckedAll] = useState("");
  const [isCheckedTerms, setIsCheckedTerms] = useState("");
  const [isCheckedUses, setIsCheckedUses] = useState("");
  const [isChecked14, setIsChecked14] = useState("");
  const [isCheckedMarketing, setIsCheckedMarketing] = useState("");

  const handleCheckAllBox = (e) => {
    setIsCheckedAll(e.target.checked);
    setIsCheckedTerms(e.target.checked);
    setIsCheckedUses(e.target.checked);
    setIsChecked14(e.target.checked);
    setIsCheckedMarketing(e.target.checked);
  };

  const handleCheckTermsBox = (e) => {
    setIsCheckedTerms(e.target.checked);
  };

  const handleCheckUsesBox = (e) => {
    setIsCheckedUses(e.target.checked);
  };

  const handleCheck14Box = (e) => {
    setIsChecked14(e.target.checked);
  };

  const handleCheckMarketingBox = (e) => {
    setIsCheckedMarketing(e.target.checked);
  };

  const onChangeUserId = (e) => {
    setInputUserId(e.target.value);
    const idRegex = /^[a-zA-Z0-9]{6,16}$/;
    if (!idRegex.test(e.target.value)) {
      setUserIdMessage("아이디 형식이 올바르지 않습니다.");
      setIsUserId(false);
    } else {
      setUserIdMessage("올바른 형식입니다.");
      setIsUserId(true);
    }
  };
  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(e.target.value)) {
      setEmailMessage("이메일 형식이 올바르지 않습니다.");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 형식입니다.");
      setIsEmail(true); // 나중에 Email Check 추가해야함
    }
  };
  const onChangePw = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setInputPw(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      setPwMessage("비밀번호 형식이 올바르지 않습니다.");
      setIsPw(false);
    } else {
      setPwMessage("올바른 형식입니다.");
      setIsPw(true);
    }
  };
  const onChangeConPw = (e) => {
    const passwordCurrent = e.target.value;
    setInputConPw(passwordCurrent);
    if (passwordCurrent !== inputPw) {
      setConPwMessage("비밀번호가 일치하지 않습니다.");
      setIsConPw(false);
    } else {
      setConPwMessage("비밀번호가 일치합니다.");
      setIsConPw(true);
    }
  };
  const onChangeName = (e) => {
    const nameRegex = /^[a-zA-Z가-힣]{4,16}$/;
    const nameCurrent = e.target.value;
    setInputName(nameCurrent);
    if (!nameRegex.test(nameCurrent)) {
      setNameMessage("닉네임 형식이 올바르지 않습니다.");
      setIsName(false);
    } else {
      setNameMessage("올바른 형식입니다.");
      setIsName(true);
    }
  };
  const onClickSignUp = async () => {
    try {
      const memberReg = await AxiosApi.signup(
        inputUserId,
        inputEmail,
        inputPw,
        inputName
      );
      console.log(memberReg.data);
      if (memberReg.data) {
        alert("회원 가입에 성공했습니다.");
        navigate("/");
      } else {
        alert("회원 가입에 실패했습니다.");
      }
    } catch (e) {
      alert("서버가 응답하지 않습니다.");
    }
  };
  const setViewportHeight = () => {
    const vh = window.innerHeight * 0.01; // 1 vh에 해당하는 값 계산
    document.documentElement.style.setProperty("--vh", `${vh}px`); // CSS 변수에 설ㄹ정
  };

  setViewportHeight();
  window.addEventListener("resize", setViewportHeight);

  const [isVisiblePwd, setIsVisiblePwd] = useState(false);
  const [isVisibleConPwd, setIsVisibleConPwd] = useState(false);

  const toggleVisiblePwd = () => {
    setIsVisiblePwd(!isVisiblePwd);
  };
  const toggleVisibleConPwd = () => {
    setIsVisibleConPwd(!isVisibleConPwd);
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
          <FloatingInnerContainer>
            <FloatingTitle>회원가입</FloatingTitle>
            <InputIndex>아이디</InputIndex>
            <InputId
              autoComplete="off"
              type="userId"
              placeholder="아이디 입력"
              value={inputUserId}
              onChange={onChangeUserId}
            ></InputId>
            <InputPwContainer>
              <InputIndex>비밀번호</InputIndex>
              <InputPwDiv>
                <InputPw
                  type={isVisiblePwd ? "text" : "password"}
                  placeholder="영문자,숫자,특수문자 포함 8~20자"
                  value={inputPw}
                  onChange={onChangePw}
                ></InputPw>
                <InputPwDivToggle
                  isVisible={isVisiblePwd}
                  onClick={() => toggleVisiblePwd()}
                />
              </InputPwDiv>
              <InputPwDiv>
                <InputPw
                  type={isVisibleConPwd ? "text" : "password"}
                  placeholder="비밀번호 확인"
                  value={inputConPw}
                  onChange={onChangeConPw}
                ></InputPw>
                <InputPwDivToggle
                  isVisible={isVisibleConPwd}
                  onClick={() => toggleVisibleConPwd()}
                />
              </InputPwDiv>
            </InputPwContainer>
            <InputIndex>이메일</InputIndex>
            <InputEmailDiv>
              <InputEmail
                autoComplete="off"
                type="email"
                placeholder="이메일 주소 입력"
                value={inputEmail}
                onChange={onChangeEmail}
              ></InputEmail>
              <InputEmailButton>인증번호받기</InputEmailButton>
            </InputEmailDiv>
            <InputSecurityDiv>
              <InputSecurity
                autoComplete="off"
                type="text"
                placeholder="인증번호 입력"
              ></InputSecurity>
              <InputSecurityButton>이메일 인증</InputSecurityButton>
            </InputSecurityDiv>
            <InputIndex>닉네임</InputIndex>
            <InputNickName
              autoComplete="off"
              type="text"
              placeholder="닉네임 입력"
              value={inputName}
              onChange={onChangeName}
            ></InputNickName>
            <InputExtraContainer>
              <InputExtra>
                <InputExtraItemCheckBox
                  type="checkbox"
                  id="agreeall"
                  checked={isCheckedAll}
                  onChange={handleCheckAllBox}
                ></InputExtraItemCheckBox>
                <InputExtraItemP>전체동의</InputExtraItemP>
              </InputExtra>
              <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
              <InputExtra>
                <InputExtraItemCheckBox
                  type="checkbox"
                  id="agreeterms"
                  checked={isCheckedTerms}
                  onChange={handleCheckTermsBox}
                ></InputExtraItemCheckBox>
                <InputExtraItemP>이용약관 동의</InputExtraItemP>
              </InputExtra>
              <InputExtra>
                <InputExtraItemCheckBox
                  type="checkbox"
                  id="agreeuses"
                  checked={isCheckedUses}
                  onChange={handleCheckUsesBox}
                ></InputExtraItemCheckBox>
                <InputExtraItemP>개인정보 수집 및 이용 동의</InputExtraItemP>
              </InputExtra>
              <InputExtra>
                <InputExtraItemCheckBox
                  type="checkbox"
                  id="agree14"
                  checked={isChecked14}
                  onChange={handleCheck14Box}
                ></InputExtraItemCheckBox>
                <InputExtraItemP>[선택] 만 14세 이상입니다.</InputExtraItemP>
              </InputExtra>
              <InputExtra>
                <InputExtraItemCheckBox
                  type="checkbox"
                  id="agreemarketing"
                  checked={isCheckedMarketing}
                  onChange={handleCheckMarketingBox}
                ></InputExtraItemCheckBox>
                <InputExtraItemP>
                  [선택] 마케팅 활용 동의 및 광고 수신 동의
                </InputExtraItemP>
              </InputExtra>
            </InputExtraContainer>
            {isUserId &&
            isEmail &&
            isPw &&
            isConPw &&
            isName &&
            isCheckedAll ? (
              <SignUp enabled onClick={onClickSignUp}>
                회원가입하기
              </SignUp>
            ) : (
              <SignUp disabled>회원가입하기</SignUp>
            )}
          </FloatingInnerContainer>
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
      </Container>
    </Wrap>
  );
};
export default Signup;
