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
  width: 17%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  left: 0;
  margin-top: 25px;
`;

export const CenterContainer = styled.div.attrs({
  id: "centercontainer",
})`
  width: 66%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  left: 0;
  margin-top: 25px;
`;
export const RightContainer = styled.div.attrs({
  id: "rightcontainer",
})`
  width: 17%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  left: 0;
  margin-top: 25px;
`;
export const PathLink = styled.button.attrs({
  id: "pathlink",
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
    background-color: #313131;
    color: white;
  }
`;
