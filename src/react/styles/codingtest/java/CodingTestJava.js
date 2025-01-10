import styled from "styled-components";

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
  padding-left: 10px;
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
  .menu-link {
    text-decoration: none;
    color: inherit;
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
  margin-top: 75px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: center;
  margin-bottom: 0;
  gap: 25px;
`;
export const LeftContainer = styled.div.attrs({
  id: "leftcontainer",
})`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 0;
  gap: 25px;
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
  border-radius: 30px 30px 0px 0px;
`;

export const ClassHeaderTitle = styled.div.attrs({
  id: "classheadertitle",
})`
  width: 90%;
  padding-left: 30px;
  color: white;
  font-size: 20px;
  font-family: "bold", sans-serif;
`;
export const InputClass = styled.div.attrs({
  id: "inputclass",
})`
  width: 100%;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 30px;
`;
export const InputClassInner = styled.textarea.attrs({
  id: "inputclassinner",
})`
  width: 90%;
  height: 80%;
  color: white;
`;

export const ConsoleClass = styled.div.attrs({
  id: "consoleclass",
})`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 30px;
`;

export const ConsoleClassInner = styled.div.attrs({
  id: "consoleclassinner",
})`
  width: 90%;
  color: white;
`;

export const RightContainer = styled.div.attrs({
  id: "rightcontainer",
})`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-bottom: 50px;
  position: relative;
`;