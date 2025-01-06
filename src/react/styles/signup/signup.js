import styled, {css, keyframes} from "styled-components";
import {Link} from "react-router-dom";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div.attrs({
  id: "container",
})`
  width: 1280px;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TopBar = styled.div.attrs({
  id: "topbar",
})`
  width: 100%;
  height: 100px;
  top: 0;
  left: 0;
  position: absolute;
`;
export const LogoContainer = styled.div.attrs({
  id: "logocontainer",
})`
  margin-left: 25px;
  width: 186px;
  height: 100%;
  display: flex;
  flex-direction: row;
  /* background-color: white; */
  position: relative;
  align-items: center;
`;
export const Logo = styled.div.attrs({
  id: "logo",
})`
  width: 186px;
  height: 50px;
  display: flex;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/logo/fulllogo_white.png");
  position: absolute;
  align-items: center;
  justify-content: center;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
`;
export const FloatingContainer = styled.div.attrs({
  id: "inputcontainer",
})`
  width: 500px;
  height: 682px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
`;
export const FloatingInnerContainer = styled.div.attrs({
  id: "floatinginnercontainer",
}) `
  width: 400px;
  height: 763px;
`;
export const FloatingTitle = styled.h1.attrs({
  id: "inputtitle",
})`
  width: 400px;
  height: 32px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  margin-top: 100px;
  margin-bottom: 50px;
  font-size: 30px;
`;
export const InputIndex = styled.div`
  width: 100px;
  height: 20px;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  font-size: 13px;
  margin-bottom: 0px;
  margin-right: 300px;
  margin-top: 10px;
`;
export const InputId = styled.input.attrs({
  id: "inputid",
})`
  width: 400px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin-top: 10px;
  margin-bottom: 10px;
  color: #313131;
  font-family: 'medium', sans-serif;
  font-size: 13px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: 10px auto;
  background-position: 20px center;
  background-image: url("/images/icon/user.png");
  &:focus {
  outline: none;
  }
`;
export const InputPwContainer = styled.div.attrs({
  id: "inputpwcontainer",
})`
  width: 400px;
  margin-bottom: 10px;
`;
export const InputPwDiv = styled.div.attrs({
  id: "inputpwdiv",
})`
  width: 400px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  border: none;
  user-select: none;
  border-radius: 5px;
  margin-top: 10px;
`;
export const InputPw = styled.input.attrs({
  id: "inputpw",
})`
  width: 400px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin-top: 10px;
  margin-bottom: 10px;
  color: #313131;
  font-family: 'medium', sans-serif;
  font-size: 13px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: 10px auto;
  background-position: 20px center;
  background-image: url("/images/icon/pwd.png");
  &:focus {
  outline: none;
  }
`;
export const InputPwDivToggle = styled.button.attrs({
  id: "inputpwdivtoggle",
})`
  width: 10px;
  height: 10px;
  display: flex;
  position: absolute;
  align-items: center;
  border: none;
  background-color: transparent;
  border-radius: 5px;
  right: 10px;
  ${(props) =>
    props.isVisible
      ? css`
          &::before {
            content: "";
            position: absolute;
            background-repeat: no-repeat;
            background-size: contain;
            right: 10px;
            margin-top: 5px;
            width: 15px;
            height: 15px;
            background-image: url("/images/icon/eye_open.png");
            z-index: 5;
            cursor: pointer;
          }
        `
      : css`
          &::before {
            content: "";
            position: absolute;
            background-repeat: no-repeat;
            background-size: contain;
            right: 10px;
            top: -6px;
            margin-top: 5px;
            width: 15px;
            height: 15px;
            background-image: url("/images/icon/eye_close.png");
            z-index: 5;
            cursor: pointer;
          }
        `}
`;
export const InputEmail = styled.input.attrs({
  id: "inputemail",
})`
  width: 400px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin-top: 10px;
  margin-bottom: 10px;
  color: #313131;
  font-family: 'medium', sans-serif;
  font-size: 13px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: 10px auto;
  background-position: 20px center;
  background-image: url("/images/icon/mail.png");
  &:focus {
  outline: none;
  }
`;
export const InputNickName = styled.input.attrs({
  id: "inputuser",
})`
  width: 400px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin-top: 10px;
  margin-bottom: 10px;
  color: #313131;
  font-family: 'medium', sans-serif;
  font-size: 13px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: 10px auto;
  background-position: 20px center;
  background-image: url("/images/icon/nickname.png");
  &:focus {
  outline: none;
  }
`;

export const InputExtra = styled.div.attrs({
  id: "inputextra",
})`
  width: 400px;
  height: 20px;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  user-select: none;
  margin-top: 40px;
`;
export const InputExtraItemCheckBox = styled.input.attrs({
  id: "inputextraitemcheckbox",
})`
  appearance: none;
  width: 14px;
  height: 14px;
  display: flex;
  position: absolute;
  outline: none;
  cursor: pointer;
  left: 0px;
  bottom: 2.5px;
  background-color: white;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, border-color 0.3s ease;
  &:hover {
    border-color: black;
  }
  ${(props) =>
    props.checked &&
    css`
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 8px;
        height: 8px;
        background-color: #313131;
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }
    `}
`;
export const InputExtraItemP = styled.p.attrs({
  id: "inputextraitemleftp",
})`
  width: 400px;
  height: 20px;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  font-size: 14px;
  color: #313131;
  margin-left: 25px;
  margin-bottom: 2px;
  margin-right: 50px;
`;
export const SignUp = styled.button.attrs({
  id: "signup",
})`
  width: 400px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  background-color: ${(props) => (props.disabled ? "black" : "#007bff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: none;
  margin-top: 20px;
  color: white;
  transition: all 0.3s ease-in-out;
  &:hover {
    text-decoration: underline;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;
export const NoticeContainer = styled.div.attrs({
  id: "noticecontainer",
})`
  width: 241px;
  height: 20px;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 20px;
`;

export const Notice = styled.div.attrs({
  id: "notice",
})`
  width: 120px;
  height: 20px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 10px;
  user-select: none;
  & + &::before {
    content: "";
    position: absolute;
    left: -5px;
    bottom: 8px;
    width: 10px;
    height: 1px;
    background-color: #dadcdf;
    transform: rotate(90deg);
  }
  &:hover {
    text-decoration: underline;
  }
`;
export const NoticeLink = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
`;
