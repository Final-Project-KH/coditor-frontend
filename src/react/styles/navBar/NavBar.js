import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100vw;
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
  &:hover {
    ${(props) =>
      props.isOpen &&
      css`
        & {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}
  }
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
  margin-right: 30px;
`;

export const LoginBox = styled.div.attrs({
  id: "logincontainer",
})`
  width: 100px;
  height: 50px;
  display: flex;
  background-color: #313131;
  position: relative;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  font-size: 25px;
  font-family: "cocogoose-md";
  padding-top: 5px;
  &:hover {
    background-color: white;
    border: 1px solid #313131;
    color: #313131;
  }
`;
