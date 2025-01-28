import styled, { css } from "styled-components";

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
`;

export const LeftContainer = styled.div.attrs({
  id: "leftcontainer",
})`
  max-width: 1280px;
  width: 200px;
  height: 100vh;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
export const MiddleContainer = styled.div.attrs({
  id: "middlecontainer",
})`
  max-width: 1280px;
  width: calc(1280px - 500px);
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
  width: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0;
  box-sizing: border-box;
  background-color: green;
  margin-left: 50px;
`;
export const ProfileContainer = styled.div.attrs({
  id: "profilecontainer",
})`
  max-width: 1280px;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 0px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 15px;
  border: 1px solid black;
`;
export const ProfileImage = styled.div.attrs({
  id: "profileimage",
})`
  width: 80px;
  height: 80px;
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
  width: 200px;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  border-radius: 15px;
  border: 1px solid black;
  margin-top: 25px;
`;
export const UserContentsTitle = styled.div.attrs({
  id: "usercontentstitle",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
`;
export const UserContents = styled.div.attrs({
  id: "usercontents",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
`;
export const DashboardContainer = styled.div.attrs({
  id: "dashboardcontainer",
})`
  max-width: 1280px;
  width: 200px;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  border-radius: 15px;
  border: 1px solid black;
  margin-top: 25px;
`;
export const DashboardTitle = styled.div.attrs({
  id: "dashboardtitle",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
`;
export const DashboardContents = styled.div.attrs({
  id: "dashboardcontents",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
`;
export const PostContainer = styled.div.attrs({
  id: "postcontainer",
})`
  max-width: 1280px;
  width: 200px;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  border-radius: 15px;
  border: 1px solid black;
  margin-top: 25px;
`;
export const PostTitle = styled.div.attrs({
  id: "posttitle",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
`;
export const PostContents = styled.div.attrs({
  id: "postcontents",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
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
export const ProfileContainerModify = styled.div.attrs({
  id: "profilecontainermodify",
})`
  max-width: 1280px;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: white;
  border-radius: 15px;
  border: 1px solid black;
`;
export const ProfileImageModify = styled.div.attrs({
  id: "profileimagemodify",
})`
  width: 140px;
  height: 140px;
  display: flex;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  width: 30px;
  height: 30px;
  display: flex;
  border-radius: 50%;
  position: absolute;
  right: 35px;
  bottom: 35px;
  z-index: 3;
  border: 1px solid black;
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
