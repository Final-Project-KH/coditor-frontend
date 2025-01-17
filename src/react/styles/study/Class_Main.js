import styled, { css } from "styled-components";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
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

export const Container = styled.div.attrs({
  id: "container",
})`
  max-width: 1280px;
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: center;
  margin-bottom: 0;
  gap: 25px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const LeftContainer = styled.div.attrs({
  id: "leftcontainer",
})`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  left: 0;
`;

export const RightContainer = styled.div.attrs({
  id: "rightcontainer",
})`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-bottom: 50px;
`;

export const EachClass = styled.div.attrs({
  id: "eachclass",
})`
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ClassHeader = styled.div.attrs({
  id: "classheader",
})`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: ${(props) => (props.isOpen ? "30px" : "30px 30px 0px 0px")};
  transition: border-radius 1s ease-in-out, background-color 1s ease-in-out;
`;

export const ClassHeaderTitle = styled.div.attrs({
  id: "classheadertitle",
})`
  width: 90%;
  padding-left: 30px;
  color: white;
  font-size: 20px;
  font-family: "bold", sans-serif;
  cursor: pointer;
`;

export const ClassHeaderTitlePathLink = styled.button.attrs({
  id: "classheadertitlepathlink",
})`
  width: inherit;
  height: 30px;
  text-align: left;
  font-size: inherit;
  font-family: inherit;
  text-decoration: none;
  color: inherit;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
`;
export const ClassHeaderTitleButton = styled.div.attrs({
  id: "classheadertitlebutton",
})`
  width: 30px;
  height: 30px;
  margin-top: 8px;
  position: relative;
  margin-right: 30px;
  color: white;
  cursor: pointer;
  &::before {
    /* 토글 상태에 따라 아이콘 변경 */
    content: ${(props) => (props.isOpen ? '"◀"' : '"▼"')};
    position: relative;
    margin-left: 7px;
  }
`;

export const ClassContents = styled.div.attrs({
  id: "classcontents",
})`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  user-select: none;
  /* 토글 상태에 따라 표시/숨김 */
  display: ${(props) => (props.isOpen ? "none" : "block")};
`;

export const ClassSet = styled.div.attrs({
  id: "classset",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  & + &::before {
    content: "";
    position: absolute;
    left: 3%;
    width: 94%;
    height: 1px;
    background-color: black;
    transform: rotate(0deg);
  }
`;
export const ClassName = styled.div.attrs({
  id: "classname",
})`
  color: black;
  font-size: 20px;
  font-family: "medium", sans-serif;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    background-color: #313131;
    color: white;
  }
`;

export const NavigatePath = styled.button`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 30px;
  position: absolute;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
