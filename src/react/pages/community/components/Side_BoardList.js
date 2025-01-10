import { useState } from "react";
import {
  BoardListTitle,
  BoardListActiveContents,
  BoardListInactiveContents,
  BoardListContainer,
} from "../../../styles/community/BoardList";
import { useLocation, useNavigate } from "react-router-dom";

export const BoardList_Test = (firstpath) => {
  const [activeBoard, setActiveBoard] = useState("coding"); // 초기 활성 보드 설정
  const navigate = useNavigate();

  const boards = [
    { id: "coding", label: "코딩 질문", link: "/community/coding" },
    { id: "course", label: "진로 질문", link: "/community/course" },
    { id: "study", label: "스터디", link: "/community/study" },
    { id: "team", label: "팀 프로젝트", link: "/community/team" },
    { id: "mentoring", label: "멘토링", link: "/community/mentoring" },
  ];

  return (
    <BoardListContainer>
      <BoardListTitle>
        <a href="/community" className="menu-link">
          코디터 커뮤니티
        </a>
      </BoardListTitle>
      {boards.map((board) => {
        const isActive = activeBoard === board.id;
        const BoardComponent = isActive
          ? BoardListActiveContents
          : BoardListInactiveContents;

        return (
          <BoardComponent key={board.id}>
            <a
              href={board.link}
              className="menu-link"
              onClick={() => setActiveBoard(board.id)}
            >
              {board.label}
            </a>
          </BoardComponent>
        );
      })}
    </BoardListContainer>
  );
};

export const BoardList_Coding = () => {
  return (
    <>
      <BoardListContainer>
        <BoardListTitle>
          <a href="/community" className="menu-link">
            코디터 커뮤니티
          </a>
        </BoardListTitle>
        <BoardListActiveContents>
          <a href="/community/coding" className="menu-link">
            코딩 질문
          </a>
        </BoardListActiveContents>
        <BoardListInactiveContents>
          <a href="/community/course" className="menu-link">
            진로 질문
          </a>
        </BoardListInactiveContents>
        <BoardListInactiveContents>
          <a href="/community/study" className="menu-link">
            스터디
          </a>
        </BoardListInactiveContents>
        <BoardListInactiveContents>
          <a href="/community/team" className="menu-link">
            팀 프로젝트
          </a>
        </BoardListInactiveContents>
        <BoardListInactiveContents>
          <a href="/community/mentoring" className="menu-link">
            멘토링
          </a>
        </BoardListInactiveContents>
      </BoardListContainer>
    </>
  );
};

export const BoardList_Course = () => {
  return (
    <>
      <BoardListContainer>
        <BoardListTitle>
          <a href="/community" className="menu-link">
            코디터 커뮤니티
          </a>
        </BoardListTitle>
        <BoardListInactiveContents>
          <a href="/community/coding" className="menu-link">
            코딩 질문
          </a>
        </BoardListInactiveContents>
        <BoardListActiveContents>
          <a href="/community/course" className="menu-link">
            진로 질문
          </a>
        </BoardListActiveContents>
        <BoardListInactiveContents>
          <a href="/community/study" className="menu-link">
            스터디
          </a>
        </BoardListInactiveContents>
        <BoardListInactiveContents>
          <a href="/community/team" className="menu-link">
            팀 프로젝트
          </a>
        </BoardListInactiveContents>
        <BoardListInactiveContents>
          <a href="/community/mentoring" className="menu-link">
            멘토링
          </a>
        </BoardListInactiveContents>
      </BoardListContainer>
    </>
  );
};

export const BoardList_Study = () => {
  return (
    <>
      <BoardListContainer>
        <BoardListTitle>
          <a href="/community" className="menu-link">
            코디터 커뮤니티
          </a>
        </BoardListTitle>
        <BoardListInactiveContents>
          <a href="/community/coding" className="menu-link">
            코딩 질문
          </a>
        </BoardListInactiveContents>
        <BoardListInactiveContents>
          <a href="/community/course" className="menu-link">
            진로 질문
          </a>
        </BoardListInactiveContents>
        <BoardListActiveContents>
          <a href="/community/study" className="menu-link">
            스터디
          </a>
        </BoardListActiveContents>
        <BoardListInactiveContents>
          <a href="/community/team" className="menu-link">
            팀 프로젝트
          </a>
        </BoardListInactiveContents>
        <BoardListInactiveContents>
          <a href="/community/mentoring" className="menu-link">
            멘토링
          </a>
        </BoardListInactiveContents>
      </BoardListContainer>
    </>
  );
};

export const BoardList_Team = () => {
  return (
    <>
      <BoardListContainer>
        <BoardListTitle>
          <a href="/community" className="menu-link">
            코디터 커뮤니티
          </a>
        </BoardListTitle>
        <BoardListInactiveContents>
          <a href="/community/coding" className="menu-link">
            코딩 질문
          </a>
        </BoardListInactiveContents>
        <BoardListInactiveContents>
          <a href="/community/course" className="menu-link">
            진로 질문
          </a>
        </BoardListInactiveContents>
        <BoardListInactiveContents>
          <a href="/community/study" className="menu-link">
            스터디
          </a>
        </BoardListInactiveContents>
        <BoardListActiveContents>
          <a href="/community/team" className="menu-link">
            팀 프로젝트
          </a>
        </BoardListActiveContents>
        <BoardListInactiveContents>
          <a href="/community/mentoring" className="menu-link">
            멘토링
          </a>
        </BoardListInactiveContents>
      </BoardListContainer>
    </>
  );
};

export const BoardList_Mentoring = () => {
  return (
    <>
      <BoardListContainer>
        <BoardListTitle>
          <a href="/community" className="menu-link">
            코디터 커뮤니티
          </a>
        </BoardListTitle>
        <BoardListInactiveContents>
          <a href="/community/coding" className="menu-link">
            코딩 질문
          </a>
        </BoardListInactiveContents>
        <BoardListInactiveContents>
          <a href="/community/course" className="menu-link">
            진로 질문
          </a>
        </BoardListInactiveContents>
        <BoardListInactiveContents>
          <a href="/community/study" className="menu-link">
            스터디
          </a>
        </BoardListInactiveContents>
        <BoardListInactiveContents>
          <a href="/community/team" className="menu-link">
            팀 프로젝트
          </a>
        </BoardListInactiveContents>
        <BoardListActiveContents>
          <a href="/community/mentoring" className="menu-link">
            멘토링
          </a>
        </BoardListActiveContents>
      </BoardListContainer>
    </>
  );
};

const BoardList = ({ firstpath }) => {
  return (
    <>
      <BoardListContainer>
        <BoardListTitle>
          <a href="/community" className="menu-link">
            코디터 커뮤니티
          </a>
        </BoardListTitle>
        <BoardListInactiveContents>
          <a href="/community/coding" className="menu-link">
            코딩 질문
          </a>
        </BoardListInactiveContents>
        <BoardListInactiveContents>
          <a href="/community/course" className="menu-link">
            진로 질문
          </a>
        </BoardListInactiveContents>
        <BoardListInactiveContents>
          <a href="/community/study" className="menu-link">
            스터디
          </a>
        </BoardListInactiveContents>
        <BoardListInactiveContents>
          <a href="/community/team" className="menu-link">
            팀 프로젝트
          </a>
        </BoardListInactiveContents>
        <BoardListInactiveContents>
          <a href="/community/mentoring" className="menu-link">
            멘토링
          </a>
        </BoardListInactiveContents>
      </BoardListContainer>
    </>
  );
};

export default BoardList;
