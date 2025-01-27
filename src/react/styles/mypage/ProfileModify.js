import styled, {css} from "styled-components";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: flex-start;
  align-items: center;
`;

export const TopBoxWide = styled.div.attrs({
  id: "topboxwide",
})`
  width: 100%;
  height: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #313131;
  position: fixed;
  left: 0;
  top: 100px;
  z-index: 5;
`;

export const TopBox = styled.div.attrs({
  id: "topbox",
})`
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TopBoxText = styled.div.attrs({
  id: "topboxtext",
})`
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 30px;
  border: 1px solid #313131;
  font-family: "bold", sans-serif;
  font-size: 18px;
  align-items: center;
  padding-bottom: 3px;
  cursor: pointer;
  color: white;
  background-color: #313131;
  &:hover {
    color: #313131;
    background-color: white;
  }
`;

export const TopBoxArrow = styled.div.attrs({
  id: "topboxarrow",
})`
  color: white;
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
  font-family: "light", sans-serif;
  padding-bottom: 3px;
`;

export const TopBoxLink = styled.button.attrs({
  id: "topboxlink",
})`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  padding: 5px 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: white;
  }
`;

export const Container = styled.div.attrs({
  id: "container",
})`
  max-width: 1280px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 75px;
  box-sizing: border-box;
  background-color: yellow;
`;
export const ProfileContainer = styled.div.attrs({
  id: "profilecontainer",
})`
  max-width: 1280px;
  width: 320px;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: pink;
`;
export const ProfileImage = styled.div.attrs({
  id: "profileimage",
})`
  width: 320px;
  height: 320px;
  display: flex;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: white;
  ${(props) =>
    props.isProfile === "" &&
    props.isPreview === null &&
    css`
      background-image: url("/images/general/default_profile.png");
    `}
  ${(props) =>
    props.isProfile === "" &&
    props.isPreview !== null &&
    css`
      background-image: url(${(props) => props.isPreview});
    `}
  ${(props) =>
    props.isProfile !== "" &&
    css`
      background-image: url(${(props) => props.isProfile});
    `}
`;
export const HiddenInput = styled.input`
  display: none;
`;

export const ProfileEditButton = styled.button.attrs({
  id: "profileeditbutton",
})`
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 50%;
  position: absolute;
  right: 30px;
  bottom: 30px;
  border: 1px solid black;
  z-index: 3;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: white;
  background-image: url("/images/icon/edit.png");
  &:hover {
    background-color: #f1f1f1;
  }
`;
