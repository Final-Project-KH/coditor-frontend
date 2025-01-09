import styled from "styled-components";

export const BoardListContainer = styled.div.attrs({
  id: "boardlistbox",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-left: 15px;
`;
export const BoardListTitle = styled.div.attrs({
  id: "boardlisttitle",
})`
  width: 100%;
  font-family: "bold", sans-serif;
  font-size: 24px;
  color: black;
`;
export const BoardListActiveContents = styled.div.attrs({
  id: "boardlistactivecontents",
})`
  width: 100%;
  font-family: "semibold", sans-serif;
  font-size: 18px;
  color: black;
`;
export const BoardListInactiveContents = styled.div.attrs({
  id: "boardlistactivecontents",
})`
  width: 100%;
  font-family: "regular", sans-serif;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.4);
`;