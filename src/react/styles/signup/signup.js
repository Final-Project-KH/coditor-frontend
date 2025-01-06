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
  margin-top: 100px;
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
  border: 1px solid black;
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 13px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: 20px 15px;
  background-position: left 10px center;
  background-image: url("/logo/mail.png");
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
  border: 1px solid black;
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 13px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: 20px 15px;
  background-position: left 10px center;
  background-image: url("/logo/mail.png");
`;
export const InputUser = styled.input.attrs({
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
  border: 1px solid black;
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 13px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: left 10px center;
  background-image: url("/logo/user.png");
`;
export const InputPw = styled.input.attrs({
  id: "inputpw",
})`
  width: 400px;
  height: 50px;
  display: flex;
  left: 0px;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  border-radius: 5px;
  border: 1px solid black;
  color: rgba(0, 0, 0, 0.5);
  font-size: 13px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: 18px 19px;
  background-position: left 11px center;
  background-image: url("/logo/pwd.png");
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
export const InputPwDivToggle = styled.button.attrs({
  id: "inputpwdivtoggle",
})`
  width: 15px;
  height: 15px;
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
            right: 0px;
            margin-top: 5px;
            width: 15px;
            height: 15px;
            background-image: url("/logo/eye_open.png");
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
            right: 0px;
            margin-top: 5px;
            width: 15px;
            height: 15px;
            background-image: url("/logo/eye_close.png");
            z-index: 5;
            cursor: pointer;
          }
        `}
`;
export const InputStyledDiv = styled.div`
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
