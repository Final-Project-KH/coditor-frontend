import styled from "styled-components";

export const MenuWrapper = styled.div.attrs({
  id: "menuwrapper",
})`
  display: none;
  @media (max-width: 768px) {
    margin-top: 65px;
    width: 100vw;
    height: calc(100vh - 65px);
    display: block; /* PC에서는 숨김 */
    background-color: white;
  }
`;
export const MenuContainer = styled.div.attrs({
  id: "menucontainer",
})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const MenuLeftContainer = styled.div.attrs({
  id: "menuleftcontainer",
})`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MenuLeftActive = styled.div.attrs({
  id: "menuleftactive",
})`
  width: 100%;
  height: 70px;
  background-color: white;
  font-family: "cocogoose-md";
  color: black;
  font-size: 24px;
  padding-left: 22px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: underline;
  text-underline-offset: 5px;
  cursor: pointer;
`;

export const MenuLeftInctive = styled.div.attrs({
  id: "menuleftinactive",
})`
  width: 100%;
  height: 70px;
  background-color: #f1f1f1;
  font-family: "cocogoose-md";
  color: black;
  font-size: 24px;
  padding-left: 22px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;

export const MenuLeftLogin = styled.div.attrs({
  id: "menuleftlogin",
})`
  width: 100%;
  height: 70px;
  background-color: rgba(0, 0, 0, 0.8);
  font-family: "cocogoose-md";
  color: white;
  font-size: 24px;
  padding-left: 22px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 7px;
  }
`;

export const MenuRightContainer = styled.div.attrs({
  id: "menurightcontainer",
})`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #ddd;
`;

export const MenuRightContentsWrap = styled.div.attrs({
  id: "menurightcontentswrap",
})`
  width: 100%;
  height: 100%;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
`;
export const MenuRightColumn = styled.div.attrs({
  id: "menurightcolumn",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  gap: 15px;
`;
export const MenuRightColumnTitle = styled.div.attrs({
  id: "menurightcolumntitle",
})`
  width: 100%;
  padding-left: 30px;
  font-family: "semibold", sans-serif;
  font-size: 20px;
  color: black;
`;

export const MenuRightColumnContents = styled.div.attrs({
  id: "menurightcolumncontents",
})`
  width: 100%;
  padding-left: 20px;
  font-family: "medium", sans-serif;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`;

export const MenuRightLink = styled.div.attrs({
  id: "menurightlink",
})`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  padding: 3px 10px;
  background-color: transparent;
  font-family: "medium", sans-serif;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 30px;
  }
`;
