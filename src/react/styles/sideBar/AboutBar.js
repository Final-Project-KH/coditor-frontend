import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div.attrs({
  id: "container",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 100px;
  left: 0px;
  background-color: yellow;
  overflow: hidden;
  ${(props) =>
    props.isOpen
      ? css`
          animation: ${expandHeight} 0.3s ease-out forwards;
        `
      : css`
          animation: ${collapseHeight} 0.3s ease-out forwards;
        `}
`;
const expandHeight = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: 300px;
    opacity: 1;
  }
`;
const collapseHeight = keyframes`
  0% {
    height: 300px;
    opacity: 1;
  }
  100% {
    height: 0;
    opacity: 0;
  }
`;
const fadeInOpacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const fadeOutOpacity = keyframes`
  0% {
    opacity: 1;
  }
  10% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;
export const CloseButton = styled.button.attrs({
  id: "container",
})`
  display: flex;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: background-color 0.5s ease;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    left: 2px;
    bottom: 14px;
    width: 25px;
    height: 2px;
    background-color: black;
    border-radius: 2px;
    transform: rotate(45deg);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease;
  }
  &::after {
    content: "";
    position: absolute;
    left: 2px;
    bottom: 14px;
    width: 25px;
    height: 2px;
    background-color: black;
    border-radius: 2px;
    transform: rotate(-45deg);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover::before {
    transform: rotate(-45deg) scale(0.8);
    opacity: 0.7;
  }
  &:hover::after {
    transform: rotate(45deg) scale(0.8);
    opacity: 0.7;
  }
  &:hover {
    background-color: rgba(128, 128, 128, 0.3);
  }
  ${(props) =>
    props.isOpen
      ? css`
          &::before,
          &::after {
            animation: ${fadeInOpacity} 0.3s ease-out forwards;
          }
        `
      : css`
          &::before,
          &::after {
            animation: ${fadeOutOpacity} 0.3s ease-out forwards;
          }
        `}
`;
export const LogoContainer = styled.div.attrs({
  id: "logocontainer",
})`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
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
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  align-items: center;
`;
export const LoginContainer = styled.div.attrs({
  id: "logincontainer",
})`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
`;
