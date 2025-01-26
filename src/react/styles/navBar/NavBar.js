import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  border-bottom: 1px solid #ddd;
  background-color: white;
  position: fixed;
  z-index: 10;
`;

export const Container = styled.div.attrs({
  id: "container",
})`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  z-index: 10;
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
  background-image: url("/images/logo/fulllogo_black.png");
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
export const LoginLink = styled.div`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
  color: white;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: black;
  }
`;
export const MenuContainer = styled.div.attrs({
  id: "menucontainer",
})`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-content: center;
`;

export const MenuTitle = styled.div.attrs({
  id: "menutitle",
})`
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const MenuBox = styled.div.attrs({
  id: "menubox",
})`
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isOpen &&
    css`
      &::before {
        content: "";
        position: absolute;
        bottom: -1px;
        width: 100%;
        height: 3px;
        background-color: black;
        transform: rotate(0deg);
        z-index: 5;
      }
    `}
`;

export const MenuButton = styled.button.attrs({
  id: "menubutton",
})`
  height: 50%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  top: 5px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  user-select: none;
  font-size: 25px;
  font-family: "cocogoose-md";
  &:focus {
    outline: none;
    box-shadow: none;
  }
  transition: all 0.1s ease-in-out;
`;

export const LoginContainer = styled.div.attrs({
  id: "logincontainer",
})`
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const LoginBox = styled.div.attrs({
  id: "logincontainer",
})`
  width: 100px;
  height: 50px;
  display: flex;
  position: relative;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 10px;
  font-size: 25px;
  font-family: "cocogoose-md";
  padding-top: 5px;
  &:hover {
    background-color: white;
    border: 1px solid #313131;
    color: #313131;
  }
  ${(props) =>
    props.isUser &&
    css`
      width: 200px;
      height: 50px;
      background-color: transparent;
      user-select: none;
      &:hover {
        background-color: none;
        border: none;
      }
    `}
  ${(props) =>
    !props.isUser &&
    css`
      width: 100px;
      height: 50px;
      display: flex;
      background-color: #313131;
      position: relative;
      justify-content: center;
      align-items: center;
      color: white;
      border-radius: 10px;
      font-size: 25px;
      font-family: "cocogoose-md";
      padding-top: 5px;
      &:hover {
        background-color: white;
        border: 1px solid #313131;
        color: #313131;
      }
    `}
`;

export const ProfileImgDiv = styled.div.attrs({
  id: "profileimgdiv",
})`
  width: 100px;
  height: 50px;
  display: flex;
  position: absolute;
  left: 0px;
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
`;
export const ProfileImg = styled.div.attrs({
  id: "profileimg",
})`
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isProfile === "" &&
    css`
      width: 50px;
      height: 50px;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      border-radius: 50%;
      background-image: url("/images/general/default_profile.png");
    `}
  ${(props) =>
    props.isProfile !== "" &&
    css`
      width: 50px;
      height: 50px;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      border-radius: 50%;
      background-image: url(${(props) => props.isProfile});
    `}
`;
export const MyPageButton = styled.button.attrs({
  id: "mypagebutton",
})`
  width: 100px;
  height: 50px;
  display: flex;
  position: absolute;
  right: 0px;
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  &::before,
  &::after,
  & span {
    content: "";
    width: 30px;
    height: 2px;
    background-color: black;
    border-radius: 5px;
    position: absolute;
    left: 33px;
    transition: 0.3s;
  }
  &::before {
    top: 12px; /* 위쪽 선 */
  }
  & span {
    top: 24px;
  }
  &::after {
    bottom: 12px; /* 아래쪽 선 */
  }
`;
export const MyPageMenu = styled.div.attrs({
  id: "mypagemenu",
})`
  width: 200px;
  height: 300px;
  display: flex;
  position: absolute;
  top: 60px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  transition: 0.2s ease-in-out;
  flex-direction: column;

  ${(props) =>
    props.isToggleMyPage
      ? css`
          width: 200px;
          height: 300px;
          color: black;
        `
      : css`
          width: 200px;
          height: 0px;
          color: transparent;
          display: none;
        `}
`;

export const MyPageMenuContents = styled.div.attrs({
  id: "mypagemenucontents",
})`
  width: 200px;
  height: 50px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  ${(props) =>
    props.isToggleMyPage
      ? css`
          color: black;
        `
      : css`
          color: transparent;
          background-color: transparent;
          display: none;
        `}
  &:first-child {
    font-size: 18px;
  }
  &:nth-child(2) {
    font-size: 20px;
    padding-top: 5px;
  }
  &:nth-child(3) {
    justify-content: center;
    font-size: 18px;
    padding-top: 5px;
  }
  &:last-child {
    justify-content: center;
    font-size: 18px;
    padding-top: 5px;
    cursor: pointer;
  }
`;
