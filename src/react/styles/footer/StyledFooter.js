import styled from "styled-components";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100vw;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #313131;
`;

export const Container = styled.div.attrs({
  id: "container",
})`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const MainBox = styled.div.attrs({
  id: "mainbox",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const FooterName = styled.div.attrs({
  id: "footername",
})`
  color: white;
  font-family: "bold", sans-serif;
  font-size: 14px;
`;

export const FooterContents = styled.div.attrs({
  id: "footercontents",
})`
  color: white;
  font-family: "regular", sans-serif;
  font-size: 12px;
`;
