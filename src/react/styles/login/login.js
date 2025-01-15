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
  margin: 0 auto;
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
  id: "floatingcontainer",
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
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 13px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: 10px auto;
  background-position: 20px center;
  background-image: url(${(props) => props.icon});
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
  font-size: 14px;
  color: #313131;
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
  font-size: 14px;
  color: #313131;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  & + &::before {
    content: "";
    position: absolute;
    left: 0px;
    bottom: 8px;
    width: 11px;
    height: 1px;
    background-color: #313131;
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
  background-color: ${(props) => (props.disabled ? "#313131" : "#007bff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: none;
  margin-top: 35px;
  color: white;
  transition: all 0.3s ease-in-out;
  font-size: 14px;
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
  font-size: 14px;
  transition: all 0.3s ease-in-out;
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
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${(props) => props.icon});
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
  font-size: 14px;
  font-family: "medium", sans-serif;
  color: #313131;
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
  font-size: 14px;
  user-select: none;
  & + &::before {
    content: "";
    position: absolute;
    left: -8px;
    bottom: 8px;
    width: 10px;
    height: 1px;
    background-color: #dadcdf;
    transform: rotate(90deg);
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
