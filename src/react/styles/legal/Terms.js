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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;
export const TermsTitle = styled.div.attrs({
  id: "termstitle",
})`
  width: 100%;
  margin-bottom: 50px;
  font-family: "bold", sans-serif;
  font-size: 30px;
`;
export const Chapter = styled.div.attrs({
  id: "chapter",
})`
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
`;
export const ChapterTitle = styled.div.attrs({
  id: "chaptertitle",
})`
  width: 100%;
  font-family: "semibold", sans-serif;
  font-size: 24px;
  margin-bottom: 30px;
`;
export const Article = styled.div.attrs({
  id: "article",
})`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;
export const ArticleTitle = styled.div.attrs({
  id: "articletitle",
})`
  width: 100%;
  margin-bottom: 20px;
  font-family: "medium", sans-serif;
  font-size: 20px;
`;
export const Item = styled.div.attrs({
  id: "item",
})`
  width: 100%;
  font-family: "medium", sans-serif;
  font-size: 16px;
`;
export const ItemTab = styled.div.attrs({
  id: "itemtap",
})`
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 25px;
  font-family: "medium", sans-serif;
  font-size: 16px;
`;
