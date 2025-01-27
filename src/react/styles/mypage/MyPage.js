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
  flex-direction: row;
  align-items: center;
  margin-top: 75px;
  box-sizing: border-box;
  background-color: yellow;
`;

export const LeftContainer = styled.div.attrs({
  id: "leftcontainer",
})`
  max-width: 1280px;
  width: 320px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: blue;
`;
export const MiddleContainer = styled.div.attrs({
  id: "middlecontainer",
})`
  max-width: 1280px;
  width: 480px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0;
  box-sizing: border-box;
  background-color: red;
`;
export const RightContainer = styled.div.attrs({
  id: "rightcontainer",
})`
  max-width: 1280px;
  width: 480px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0;
  box-sizing: border-box;
  background-color: green;
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
  left: 0px;
  box-sizing: border-box;
  background-color: pink;
`;
export const ProfileImage = styled.div.attrs({
  id: "profileimage",
})`
  width: 50%;
  height: 50%;
  display: flex;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: gray;
  ${(props) =>
    props.isProfile === "" &&
    css`
      background-image: url("/images/general/default_profile.png");
    `}
  ${(props) =>
    props.isProfile !== "" &&
    css`
      background-image: url(${(props) => props.isProfile});
    `}
`;
export const UserNickName = styled.div.attrs({
  id: "usernickname",
})`
  width: 50%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: bold;
`;
export const UserRating = styled.div.attrs({
  id: "userrating",
})`
  width: 50%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
`;
export const UserTier = styled.div.attrs({
  id: "usertier",
})`
  width: 50%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
`;
export const UserContentsContainer = styled.div.attrs({
  id: "usercontentscontainer",
})`
  max-width: 1280px;
  width: 320px;
  height: calc(100vh - 320px);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  background-color: violet;
`;

export const UserContentsHeader = styled.div.attrs({
  id: "usercontentsheader",
})`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 30px 30px 0px 0px;
`;
export const UserContentsHeaderTitle = styled.div.attrs({
  id: "usercontentsheadertitle",
})`
  width: 90%;
  padding-left: 30px;
  color: white;
  font-size: 18px;
  font-family: "bold", sans-serif;
  cursor: pointer;
`;
export const UserContents = styled.div.attrs({
  id: "usercontents",
})`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  user-select: none;
`;
export const UserContentsSet = styled.div.attrs({
  id: "usercontentsset",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  background-color: #f1f1f1;
  & + &::before {
    content: "";
    position: absolute;
    left: 3%;
    width: 94%;
    height: 1px;
    background-color: black;
    transform: rotate(0deg);
  }
  &:last-child {
    border-radius: 0px 0px 30px 30px;
  }
`;
export const UserContentsName = styled.div.attrs({
  id: "usercontentsname",
})`
  color: black;
  font-size: 15px;
  font-family: "medium", sans-serif;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  &:hover {
    font-family: "extrabold", sans-serif;
  }
  &:hover::before {
    content: "<";
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    color: red;
    font-size: 18px;
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: 1;
  }
`;
export const StudyContainer = styled.div.attrs({
  id: "studycontainer",
})`
  max-width: 1280px;
  width: 480px;
  height: 50vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  background-color: yellowgreen;
`;
export const CodingTestContainer = styled.div.attrs({
  id: "codingtestcontainer",
})`
  max-width: 1280px;
  width: 480px;
  height: 50vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  background-color: orange;
`;
export const CommunityContainer = styled.div.attrs({
  id: "communitycontainer",
})`
  max-width: 1280px;
  width: 480px;
  height: 50vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  background-color: blueviolet;
`;
export const CSContainer = styled.div.attrs({
  id: "cscontainer",
})`
  max-width: 1280px;
  width: 480px;
  height: 50vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  background-color: red;
`;
