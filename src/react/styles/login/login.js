import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

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
export const LogoContainer = styled.div.attrs({
  id: "logocontainer",
})`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0px;
`;
export const Logo = styled.div.attrs({
  id: "logo",
})`
  width: 50px;
  height: 50px;
  display: flex;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/logo/white_logo.PNG");
  border-radius: 5px;
  position: absolute;
  bottom: 25px;
  transition: all 0.3s ease-in-out;
  margin-left: 10px;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
`;
export const Title = styled.h1.attrs({
  id: "title",
})`
  width: 100px;
  height: 50px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  left: 75px;
  bottom: 25px;
  user-select: none;
  cursor: pointer;
  margin-left: 10px;
  color: white;
  transition: all 0.3s ease-in-out;
  &:hover {
    font-size: 35px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
export const InputContainer = styled.div.attrs({
  id: "inputcontainer",
})`
  width: 500px;
  height: 682px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;
export const InputTitle = styled.h1.attrs({
  id: "inputtitle",
})`
  width: 400px;
  height: 32px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  margin-top: 120px;
`;
export const Input = styled.input.attrs({
  id: "input",
})`
  width: 400px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  border-radius: 5px;
  border: 1px solid black;
  margin-top: 60px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 13px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: 20px 15px;
  background-position: left 10px center;
  background-image: url("/logo/mail.png");
  & + & {
    margin-top: 10px;
    background-repeat: no-repeat;
    background-size: 18px 19px;
    background-position: left 11px center;
    background-image: url("/logo/pwd.png");
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset !important;
    background-color: white !important;
    background-image: url("/logo/mail.png") !important;
    background-repeat: no-repeat;
    background-size: 20px 15px;
    background-position: left 10px center;
    color: rgba(0, 0, 0, 0.5) !important;
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
  margin-top: 10px;
`;

export const InputExtraItem = styled.div.attrs({
  id: "inputextraitem",
})`
  width: 200px;
  height: 20px;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  user-select: none;
`;
export const InputExtraItemChekBox = styled.input.attrs({
  id: "inputextraitemcheckbox",
})`
  appearance: none;
  width: 15px;
  height: 15px;
  display: flex;
  position: absolute;
  outline: none;
  cursor: pointer;
  left: 0px;
  bottom: 2.5px;
  background-color: white;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, border-color 0.3s ease;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-color: #007bff;
  }
  ${(props) =>
    props.checked &&
    css`
      &::after {
        content: "";
        position: absolute;
        top: -10%; /* 부모 요소의 중앙 */
        left: 60%;
        width: 8px;
        height: 14px;
        border: solid #007bff;
        border-width: 0 4px 4px 0;
        transform: translate(-50%, -50%) rotate(45deg);
        animation: ${checkmark} 0.3s ease-in-out;
      }
    `}
`;
export const InputExtraItemLeftP = styled.p.attrs({
  id: "inputextraitemleftp",
})`
  width: 100px;
  height: 20px;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  font-size: 12px;
  margin-bottom: 2px;
  margin-right: 50px;
`;
const checkmark = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0) rotate(45deg);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1) rotate(45deg);
  }
  100% {
    transform: translate(-50%, -50%) scale(1) rotate(45deg);
  }`;

export const InputExtraItemRightP = styled.p.attrs({
  id: "inputextraitemrightp",
})`
  width: 100px;
  height: 20px;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  user-select: none;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    font-weight: bold;
  }
  & + &::before {
    content: "";
    position: absolute;
    left: 8px;
    bottom: 8px;
    width: 15px;
    height: 1px;
    background-color: #dadcdf;
    transform: rotate(90deg);
  }
`;
export const SignIn = styled.button.attrs({
  id: "signin",
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
  margin-top: 35px;
  color: white;
  transition: all 0.3s ease-in-out;
  &:hover {
    text-decoration: underline;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
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
  background-color: #f1f1f1;
  border: none;
  margin-top: 10px;
  color: black;
  transition: all 0.3s ease-in-out;
  &:hover {
    text-decoration: underline;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;
export const ThirdLogin = styled.div.attrs({
  id: "thirdlogin",
})`
  width: 290px;
  height: 50px;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  border: none;
  margin-top: 35px;
`;
export const ThirdLoginItem = styled.div.attrs({
  id: "thirdloginitem",
})`
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
  user-select: none;
  background-color: blue;
  border: none;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  & {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url("/logo/gmail.png");
  }
  & + & {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url("/logo/kakao.png");
  }
  & + & + & {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url("/logo/naver.png");
  }
  & + & + & + & {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url("/logo/facebook.png");
  }
`;
export const StyledP = styled.p.attrs({
  id: "announce",
})`
  width: 255px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-size: 12px;
  & + & {
    margin-top: 0px;
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
