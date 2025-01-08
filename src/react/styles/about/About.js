import styled from "styled-components";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export const TopBox = styled.div.attrs({
  id: "topbox",
})`
  width: 100%;
  height: 200px;
  background-color: #313131;
`;
export const Container = styled.div.attrs({
  id: "container",
})`
  max-width: 1280px;
  margin-top: 50px;
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0;
  background-repeat: no-repeat;
  background-size: 500px 500px;
  background-position: bottom right;
  background-image: url("/images/general/aboutimg_50.png");
`;
export const AboutTitle = styled.div.attrs({
  id: "abouttitle",
})`
  width: 100%;
  margin-bottom: 50px;
  font-family: "bold", sans-serif;
  font-size: 30px;
`;
export const AboutContents = styled.div.attrs({
  id: "aboutcontents",
})`
  width: 100%;
  font-family: "regular", sans-serif;
  font-size: 24px;
  margin-bottom: 30px;
`;