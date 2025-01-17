import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../../../api/AxiosApi";
import {
  Wrap,
  TopBar,
  LogoContainer,
  Logo,
  StyledLink,
  FloatingContainer,
  FloatingTitle,
  InputIndex,
  InputId,
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
  ValidIdMessage,
  ValidPwMessage,
  TopBarContainer,
  BodyContainer,
  InputEach,
  InputPwConfirm,
  ValidNameMessage,
  InputExtraAll,
} from "../../styles/signup/signup";
import { useDispatch } from "react-redux";
import { setError } from "../../../redux/slice/authSlice";

const Signup = () => {
  const navigate = useNavigate();
  // 키보드 입력
  const [inputUserId, setInputUserId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputConPw, setInputConPw] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputSecurity, setInputSecurity] = useState("");
  // 오류 메시지
  const [userIdMessage, setUserIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [conPwMessage, setConPwMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [securityMessage, setSecurityMessage] = useState("");
  // 유효성 검사
  const [isUserId, setIsUserId] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isConPw, setIsConPw] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isSecurity, setIsSecurity] = useState(false);
  // 약관동의
  const [isCheckedAll, setIsCheckedAll] = useState("");
  const [isCheckedTerms, setIsCheckedTerms] = useState("");
  const [isCheckedUses, setIsCheckedUses] = useState("");
  const [isChecked14, setIsChecked14] = useState("");
  const [isCheckedMarketing, setIsCheckedMarketing] = useState("");
  // 인증번호 입력 가능 / 불가능 여부
  const [isSecurityAvailabe, setIsSecurityAvailable] = useState(false); // 현재만 true 시작 실제로는 false 시작
  // 이메일 수정 가능 / 불가능 여부
  const [isEmailAvailable, setIsEmailAvailable] = useState(true);

  // 전체 동의 누를 시 모든 체크박스 선택
  const handleCheckAllBox = (e) => {
    setIsCheckedAll(e.target.checked);
    setIsCheckedTerms(e.target.checked);
    setIsCheckedUses(e.target.checked);
    setIsChecked14(e.target.checked);
    setIsCheckedMarketing(e.target.checked);
  };
  // 전체 동의 누르지 않고 체크 박스 전부 체크/해제 시 전체 동의 란의 상태 결정
  useEffect(() => {
    if (
      !isCheckedTerms &&
      !isCheckedUses &&
      !isChecked14 &&
      !isCheckedMarketing
    ) {
      setIsCheckedAll("");
    } else if (
      isCheckedTerms &&
      isCheckedUses &&
      isChecked14 &&
      isCheckedMarketing
    ) {
      setIsCheckedAll("checked");
    }
  }, [isCheckedTerms, isCheckedUses, isChecked14, isCheckedMarketing]);

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

  // 유효성 검사 나누기
  // 1. ID 유효성 검사
  // 특수 문자열 포함 여부 (포함 시 -> true)
  function isIdContainsSpecialCharacter(input) {
    const specialCharRegex = /[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]/;
    return specialCharRegex.test(input);
  }
  function isIdContainsKorean(input) {
    const koreanRegex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
    return koreanRegex.test(input);
  }
  function idAvailable(input) {
    const idRegex = /^[a-zA-Z0-9]{6,16}$/;
    return idRegex.test(input);
  }
  // ID input 문자열 길이 검사 (6보다 작을 시 -> true)
  function isIdTooShort(input) {
    return input.length < 6;
  }
  // ID input 문자열 길이 검사 (16보다 클 시 -> true)
  function isIdTooLong(input) {
    return input.length > 16;
  }
  // 2. PW 유효성 검사
  // PW input 문자열 길이 검사 (8보다 작을 시 -> true)
  function isPwTooShort(input) {
    return input.length < 8;
  }
  // PW input 문자열 길이 검사 (20보다 클 시 -> true)
  function isPwTooLong(input) {
    return input.length > 20;
  }
  function pwAvailable(input) {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
    return passwordRegex.test(input);
  }
  //  특수 문자열 포함 여부 (포함 시 -> true)
  function isPwContainsSpecialCharacter(input) {
    const specialCharRegex = /[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]/;
    return specialCharRegex.test(input);
  }
  //  숫자열 포함 여부 (포함 시 -> true)
  function isPwContainsNumber(input) {
    const numberRegex = /\d/;
    return numberRegex.test(input);
  }
  //  문자열 포함 여부 (포함 시 -> true)
  function isPwContainsCharacter(input) {
    const charRegex = /[a-zA-Z]/;
    return charRegex.test(input);
  }
  function eamilAvailable(input) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(input);
  }
  // 6. 닉네임 유효성 검사
  // Name input 문자열 길이 검사 (3보다 작을 시 -> true)
  function isNameTooShort(input) {
    return input.length < 3;
  }
  // Name input 문자열 길이 검사 (3보다 작을 시 -> true)
  function isNameTooLong(input) {
    return input.length > 16;
  }
  // 특수 문자열 포함 여부 (포함 시 -> true)
  function isNameContainsSpecialCharacter(input) {
    const specialCharRegex = /[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣._-]/;
    return specialCharRegex.test(input);
  }
  function nameAvailable(input) {
    const nameRegex = /^[a-zA-Zㄱ-ㅎ가-힣0-9._-]{3,16}$/;
    return nameRegex.test(input);
  }

  // 공통 공란 여부 검사 (공란 시 -> true)
  function isBlank(input) {
    return input.trim() === "";
  }

  const onChangeUserId = (e) => {
    setInputUserId(e.target.value);
    const currentValue = e.target.value;
    if (isIdContainsSpecialCharacter(currentValue)) {
      setUserIdMessage("아이디는 특수문자가 포함될 수 없습니다.");
      setIsUserId(false);
      return;
    }
    if (isIdContainsKorean(currentValue)) {
      setUserIdMessage("아이디는 한글이 포함될 수 없습니다.");
      setIsUserId(false);
    }
    if (isIdTooLong(currentValue)) {
      setUserIdMessage("아이디는 16자 이하 6자 이상이어야 합니다.");
      setIsUserId(false);
      return;
    }
    if (idAvailable(currentValue)) {
      setUserIdMessage("");
      setIsUserId(true);
    } else {
      setIsUserId(false);
    }
  };
  async function validate(key, data) {
    // const data = inputUserId;
    try {
      const response = await AxiosApi.validate(key, data);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return "다시 시도해주세요";
    }
  }
  const onBlurUserId = async (e) => {
    setInputUserId(e.target.value);
    const currentValue = e.target.value;
    if (isBlank(currentValue)) {
      setUserIdMessage("아이디는 필수 입력 정보입니다.");
      setIsUserId(false);
      return;
    }
    if (isIdTooShort(currentValue)) {
      setUserIdMessage("아이디는 6자 이상 16자 이하이어야 합니다.");
      setIsUserId(false);
      return;
    }
    try {
      const isIdAvailable = await validate("userId", currentValue);
      if (isIdAvailable && idAvailable(currentValue)) {
        setUserIdMessage("");
        setIsUserId(true);
      } else {
        setUserIdMessage("사용할 수 없는 아이디입니다.");
        setIsUserId(false);
      }
    } catch (error) {
      setUserIdMessage("ID 확인 중 오류가 발생했습니다. 다시 시도해주세요.");
      setIsUserId(false);
    }
  };
  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
    const currentValue = e.target.value;
    if (eamilAvailable(currentValue)) {
      setEmailMessage("");
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
  };
  const onBlurEmail = (e) => {
    setInputEmail(e.target.value);
    const currentValue = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (isBlank(currentValue)) {
      setEmailMessage("이메일 인증이 필요합니다.");
      setIsEmail(false);
      return;
    }
    if (!emailRegex.test(currentValue)) {
      setEmailMessage("이메일 형식이 올바르지 않습니다.");
      setIsEmail(false);
      return;
    } else {
      setIsEmail(true);
    }
  };
  const onClickEmail = async (e) => {
    setInputEmail(e.target.value);
    const currentValue = e.target.value;
    try {
      const response = await AxiosApi.validate("email", currentValue);
      if (response) {
        try {
        } catch (error) {}
      }
    } catch (error) {}
  };

  const onChangeSecurity = (e) => {
    setInputSecurity(e.target.value);
    const securityRegex = /^[1-9][0-9]{5}$/;
    if (securityRegex.test(e.target.value)) {
      setEmailMessage("인증번호 형식이 올바르지 않습니다.");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 형식입니다.");
      setIsEmail(true); // 나중에 Email Check 추가해야함
    }
  };
  const onChangePw = (e) => {
    setInputPw(e.target.value);
    const currentValue = e.target.value;
    if (pwAvailable(currentValue)) {
      setPwMessage("");
      setIsPw(true);
    } else {
      setIsPw(false);
    }
  };
  const onBlurPw = (e) => {
    setInputPw(e.target.value);
    const currentValue = e.target.value;
    if (isBlank(currentValue)) {
      setPwMessage("비밀번호는 필수 입력 정보입니다.");
      setIsPw(false);
      return;
    }
    if (!isPwContainsCharacter(currentValue)) {
      setPwMessage("비밀번호는 1개 이상의 영문자를 포함해야 합니다.");
      setIsPw(false);
      return;
    }
    if (!isPwContainsNumber(currentValue)) {
      setPwMessage("비밀번호는 1개 이상의 숫자를 포함해야 합니다.");
      setIsPw(false);
      return;
    }
    if (!isPwContainsSpecialCharacter(currentValue)) {
      setPwMessage("비밀번호는 1개 이상의 특수문자를 포함해야 합니다.");
      setIsPw(false);
      return;
    }
    if (isPwTooLong(currentValue)) {
      setPwMessage("비밀번호는 20자 이하 8자 이상이어야 합니다.");
      setIsPw(false);
      return;
    }
    if (isPwTooShort(currentValue)) {
      setPwMessage("비밀번호는 8자 이상 20자 이하이어야 합니다.");
      setIsPw(false);
      return;
    } else {
      setPwMessage("");
      setIsPw(true);
    }
  };
  const onChangeConPw = (e) => {
    setInputConPw(e.target.value);
    const currentValue = e.target.value;
    if (currentValue === inputPw) {
      setConPwMessage("");
      setIsConPw(true);
    } else {
      setIsConPw(false);
    }
  };
  const onBlurConPw = (e) => {
    setInputConPw(e.target.value);
    const currentValue = e.target.value;
    if (isBlank(inputPw)) {
      setConPwMessage("비밀번호 입력이 필요합니다.");
      setIsConPw(false);
      return;
    }
    if (isBlank(currentValue)) {
      setConPwMessage("비밀번호 확인이 필요합니다.");
      setIsConPw(false);
      return;
    }
    if (currentValue !== inputPw) {
      setConPwMessage("비밀번호가 일치하지 않습니다.");
      setIsConPw(false);
      return;
    } else {
      setConPwMessage("");
      setIsConPw(true);
    }
  };

  const onChangeName = (e) => {
    setInputName(e.target.value);
    const currentValue = e.target.value;
    if (isNameContainsSpecialCharacter(currentValue)) {
      setNameMessage("특수문자 기호는 (.),(-),(_) 만 사용 가능합니다.");
      setIsName(false);
    }
    if (isNameTooLong(currentValue)) {
      setNameMessage("닉네임은 16자 이하 3자 이상이어야 합니다.");
      setIsName(false);
    }
    if (nameAvailable(currentValue)) {
      setNameMessage("");
      setIsName(true);
    } else {
      setIsName(false);
    }
  };
  const onBlurName = async (e) => {
    setInputName(e.target.value);
    const currentValue = e.target.value;
    if (isBlank(currentValue)) {
      setNameMessage("닉네임은 필수 입력 정보입니다.");
      setIsName(false);
      return;
    }
    if (isNameTooShort(currentValue)) {
      setNameMessage("닉네임은 3자 이상 16자 이하이어야 합니다.");
      setIsName(false);
      return;
    }
    try {
      const isNameAvailable = await validate("nickname", currentValue);
      if (isNameAvailable && nameAvailable(currentValue)) {
        setNameMessage("");
        setIsName(true);
      } else {
        setNameMessage("사용할 수 없는 닉네임입니다.");
        setIsName(false);
      }
    } catch (error) {
      setNameMessage("닉네임 확인 중 오류가 발생했습니다. 다시 시도해주세요.");
      setIsName(false);
    }
  };
  const onClickSignUp = async () => {
    try {
      const memberReg = await AxiosApi.signup(
        inputUserId.trim().replace(/\s+/g, ""),
        inputEmail.trim().replace(/\s+/g, ""),
        inputPw.trim().replace(/\s+/g, ""),
        inputName.trim()
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

  const [isVisiblePwd, setIsVisiblePwd] = useState(false);
  const [isVisibleConPwd, setIsVisibleConPwd] = useState(false);

  const toggleVisiblePwd = () => {
    setIsVisiblePwd(!isVisiblePwd);
  };
  const toggleVisibleConPwd = () => {
    setIsVisibleConPwd(!isVisibleConPwd);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const handleVerify = async (e) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await AxiosApi.verifyemail(inputEmail);
      if (response.data) {
        setIsEmailAvailable(false);
        setIsSecurityAvailable(true);
      }
    } catch (error) {
      console.error("인증번호 요청 실패", error);
      dispatch(setError(error.response?.data?.message || "Verify Failed"));
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <FloatingTitle>회원가입</FloatingTitle>
          <InputEach>
            <InputIndex>아이디</InputIndex>
            <InputId
              autoComplete="off"
              type="userId"
              placeholder="아이디 입력"
              value={inputUserId}
              onChange={onChangeUserId}
              onBlur={onBlurUserId}
              isUserId={isUserId}
            ></InputId>
            {!isUserId && (
              <ValidIdMessage isUserId={isUserId}>
                {userIdMessage}
              </ValidIdMessage>
            )}
          </InputEach>
          <InputEach>
              <InputIndex>비밀번호</InputIndex>
              <InputPwDiv>
                <InputPw
                  type={isVisiblePwd ? "text" : "password"}
                  placeholder="영문자, 숫자, 특수문자 포함 8~20자"
                  value={inputPw}
                  onChange={onChangePw}
                  onBlur={onBlurPw}
                  isPw={isPw}
                ></InputPw>
                <InputPwDivToggle
                  isVisible={isVisiblePwd}
                  onClick={() => toggleVisiblePwd()}
                />
              </InputPwDiv>
              {!isPw && (
                <ValidPwMessage isPw={isPw}>{pwMessage}</ValidPwMessage>
              )}
              <InputPwDiv>
              <InputPwConfirm
                  type={isVisibleConPwd ? "text" : "password"}
                  placeholder="비밀번호 확인"
                  value={inputConPw}
                  onChange={onChangeConPw}
                  onBlur={onBlurConPw}
                  isConPw={isConPw}
                ></InputPwConfirm>
                <InputPwDivToggle
                  isVisible={isVisibleConPwd}
                  onClick={() => toggleVisibleConPwd()}
                />
              </InputPwDiv>
              {!isConPw && (
                <ValidPwMessage isConPw={isConPw}>
                  {conPwMessage}
                </ValidPwMessage>
              )}
          </InputEach>
          <InputEach>
            <InputIndex>이메일</InputIndex>
            <InputEmailDiv>
              <InputEmail
                autoComplete="off"
                type="email"
                placeholder="이메일 주소 입력"
                value={inputEmail}
                onChange={onChangeEmail}
                onBlur={onBlurEmail}
                isEmailAvailable={isEmailAvailable}
                isEmail={isEmail}
                isSecurityAvailabe={isSecurityAvailabe}
                isSecurity={isSecurity}
              ></InputEmail>
              {isEmail ? (
                <InputEmailButton enabled onClick={(e) => handleVerify(e)}>
                  인증번호받기
                  </InputEmailButton>
              ) : isEmail && !isEmailAvailable ? (
                <InputEmailButton></InputEmailButton> // 타이머 및 새로고침 버튼
              ) : !isEmail && isEmailAvailable ? (
                <InputEmailButton>인증번호받기</InputEmailButton> // 기존의 disabled 역할
              ) : (
                <InputEmailButton disabled>인증번호받기</InputEmailButton> // 필요없음
              )}
            </InputEmailDiv>
            {isSecurityAvailabe && (
              <InputSecurityDiv>
                <InputSecurity
                  autoComplete="off"
                  type="text"
                  placeholder="인증번호 입력"
                ></InputSecurity>
                <InputSecurityButton>이메일 인증</InputSecurityButton>
              </InputSecurityDiv>
            )}
                      </InputEach>
            <InputIndex>닉네임</InputIndex>
            <InputNickName
              autoComplete="off"
              type="text"
              placeholder="닉네임 입력"
              value={inputName}
              onChange={onChangeName}
              onBlur={onBlurName}
              isName={isName}
            ></InputNickName>
            {!isName && (
              <ValidIdMessage isName={isName}>{nameMessage}</ValidIdMessage>
            )}
            <InputExtraContainer>
            <InputExtraAll>
                <InputExtraItemCheckBox
                  type="checkbox"
                  id="agreeall"
                  checked={isCheckedAll}
                  onChange={handleCheckAllBox}
                ></InputExtraItemCheckBox>
                <InputExtraItemP>전체동의</InputExtraItemP>
                </InputExtraAll>
              {/* <hr style={{marginTop: "10px", marginBottom: "10px"}} /> */}
              <InputExtraAll>
                <InputExtraItemCheckBox
                  type="checkbox"
                  id="agreeterms"
                  checked={isCheckedTerms}
                  onChange={handleCheckTermsBox}
                ></InputExtraItemCheckBox>
                <InputExtraItemP>이용약관 동의</InputExtraItemP>
              </InputExtraAll>
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
            isCheckedTerms &&
            isCheckedUses ? (
              <SignUp enabled onClick={onClickSignUp}>
                회원가입하기
              </SignUp>
            ) : (
              <SignUp disabled>회원가입하기</SignUp>
            )}
          
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
export default Signup;
