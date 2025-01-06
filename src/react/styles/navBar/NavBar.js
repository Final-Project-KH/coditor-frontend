import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100vw;
  height: 100px;
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div.attrs({
  id: "container",
})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  /* background-color: blue; */
  position: relative;
  border-bottom: 2px solid #ddd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const LogoContainer = styled.div.attrs({
  id: "logocontainer",
})`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  /* background-color: white; */
  position: relative;
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
  background-image: url("/logo/logo.PNG");
  border-radius: 7px;
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
  transition: all 0.3s ease-in-out;
  &:hover {
    font-size: 35px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
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
`;

export const MenuTitle = styled.div.attrs({
  id: "menutitle",
})`
  width: 14%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  & + &::before {
    content: "";
    position: absolute;
    left: -14px;
    bottom: 47px;
    width: 25px;
    height: 2px;
    background-color: #dadcdf;
    transform: rotate(90deg);
  }
`;

export const MenuBox = styled.div.attrs({
  id: "menubox",
})`
  width: 100%;
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
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  user-select: none;
  font-size: 18px;
  &:focus {
    outline: none;
    box-shadow: none;
  }
  transition: all 0.1s ease-in-out;
  &:hover {
    font-size: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
  ${(props) =>
    props.isOpen &&
    css`
      & {
        font-size: 20px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      }
    `}
`;

export const LoginContainer = styled.div.attrs({
  id: "logincontainer",
})`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div.attrs({
  id: "logincontainer",
})`
  width: 100px;
  height: 50px;
  display: flex;
  background-color: black;
  position: relative;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;
