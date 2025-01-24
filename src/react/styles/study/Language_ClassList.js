import styled, { css } from "styled-components";

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
