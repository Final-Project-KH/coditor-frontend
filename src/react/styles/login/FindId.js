import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100%;
  /* height: calc(var(--vh, 1vh) * 100); */
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: rgba(0, 0, 0, 0.8); */
  justify-content: flex-start;
  align-items: center;
`;
export const TopBarContainer = styled.div.attrs({
  id: "topbarcontainer",
})`
  width: 100%;
  height: 100px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const TopBar = styled.div.attrs({
  id: "topbar",
})`
  max-width: 1280px;
  width: 100%;
  height: 100%;
`;
export const LogoContainer = styled.div.attrs({
  id: "logocontainer",
})`
  margin-left: 10px;
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
export const BodyContainer = styled.div.attrs({
  id: "bodycontainer",
})`
  width: 100%;
  height: calc(100vh - 100px);
  padding-top: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-bottom: 50px;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
    height: 100%;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 30px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const FloatingContainer = styled.div.attrs({
  id: "floatingcontainer",
})`
  width: 95%;
  max-width: 500px;
  padding: 50px;
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
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  margin-bottom: 30px;
  font-size: 30px;
`;
export const Input = styled.input.attrs({
  id: "input",
})`
  width: 100%;
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
export const SignIn = styled.button.attrs({
  id: "signin",
})`
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  background-color: #313131;
  cursor: pointer;
  border: none;
  margin-top: 20px;
  color: white;
  transition: all 0.3s ease-in-out;
  font-size: 14px;
  font-family: "medium", sans-serif;
`;
export const LinkDiv = styled.div.attrs({
  id: "linkdiv",
})`
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 10px;
  gap: 10px;
`;
export const SignUp = styled.button.attrs({
  id: "signup",
})`
  width: 50%;
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
  font-family: "medium", sans-serif;
`;
export const FindPw = styled.button.attrs({
  id: "findpw",
})`
  width: 50%;
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
  font-family: "medium", sans-serif;
`;
export const NoticeContainer = styled.div.attrs({
  id: "noticecontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 30px;
`;

export const Notice = styled.div.attrs({
  id: "notice",
})`
  width: 150px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  font-family: "medium", sans-serif;
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
