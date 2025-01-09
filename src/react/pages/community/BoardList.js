import {
  BoardListTitle,
  BoardListActiveContents,
  BoardListInactiveContents,
  BoardListContainer,
} from "../../styles/community/BoardList";

export const BoardList_Coding = () => {
  return (
    <>
      <BoardListContainer>
        <BoardListTitle>코디터 커뮤니티</BoardListTitle>
        <BoardListActiveContents>코딩 질문</BoardListActiveContents>
        <BoardListInactiveContents>진로 질문</BoardListInactiveContents>
        <BoardListInactiveContents>스터디</BoardListInactiveContents>
        <BoardListInactiveContents>팀 프로젝트</BoardListInactiveContents>
        <BoardListInactiveContents>멘토링</BoardListInactiveContents>
      </BoardListContainer>
    </>
  );
};

export const BoardList_Course = () => {
  return (
    <>
      <BoardListContainer>
        <BoardListTitle>코디터 커뮤니티</BoardListTitle>
        <BoardListInactiveContents>코딩 질문</BoardListInactiveContents>
        <BoardListActiveContents>진로 질문</BoardListActiveContents>
        <BoardListInactiveContents>스터디</BoardListInactiveContents>
        <BoardListInactiveContents>팀 프로젝트</BoardListInactiveContents>
        <BoardListInactiveContents>멘토링</BoardListInactiveContents>
      </BoardListContainer>
    </>
  );
};

export const BoardList_Study = () => {
  return (
    <>
      <BoardListContainer>
        <BoardListTitle>코디터 커뮤니티</BoardListTitle>
        <BoardListInactiveContents>코딩 질문</BoardListInactiveContents>
        <BoardListInactiveContents>진로 질문</BoardListInactiveContents>
        <BoardListActiveContents>스터디</BoardListActiveContents>
        <BoardListInactiveContents>팀 프로젝트</BoardListInactiveContents>
        <BoardListInactiveContents>멘토링</BoardListInactiveContents>
      </BoardListContainer>
    </>
  );
};

export const BoardList_Team = () => {
  return (
    <>
      <BoardListContainer>
        <BoardListTitle>코디터 커뮤니티</BoardListTitle>
        <BoardListInactiveContents>코딩 질문</BoardListInactiveContents>
        <BoardListInactiveContents>진로 질문</BoardListInactiveContents>
        <BoardListInactiveContents>스터디</BoardListInactiveContents>
        <BoardListActiveContents>팀 프로젝트</BoardListActiveContents>
        <BoardListInactiveContents>멘토링</BoardListInactiveContents>
      </BoardListContainer>
    </>
  );
};

export const BoardList_Mentoring = () => {
  return (
    <>
      <BoardListContainer>
        <BoardListTitle>코디터 커뮤니티</BoardListTitle>
        <BoardListInactiveContents>코딩 질문</BoardListInactiveContents>
        <BoardListInactiveContents>진로 질문</BoardListInactiveContents>
        <BoardListInactiveContents>스터디</BoardListInactiveContents>
        <BoardListInactiveContents>팀 프로젝트</BoardListInactiveContents>
        <BoardListActiveContents>멘토링</BoardListActiveContents>
      </BoardListContainer>
    </>
  );
};

const BoardList = () => {
  return (
    <>
      <BoardListContainer>
        <BoardListTitle>코디터 커뮤니티</BoardListTitle>
        <BoardListInactiveContents>코딩 질문</BoardListInactiveContents>
        <BoardListInactiveContents>진로 질문</BoardListInactiveContents>
        <BoardListInactiveContents>스터디</BoardListInactiveContents>
        <BoardListInactiveContents>팀 프로젝트</BoardListInactiveContents>
        <BoardListInactiveContents>멘토링</BoardListInactiveContents>
      </BoardListContainer>
    </>
  );
};

export default BoardList;
