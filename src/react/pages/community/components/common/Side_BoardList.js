import { useEffect, useState } from "react";
import {
  BoardListTitle,
  BoardListActiveContents,
  BoardListInactiveContents,
  BoardListContainer,
  BoardListLink,
} from "../../../../styles/community/BoardList";
import { useLocation, useNavigate } from "react-router-dom";

const BoardList = ({ firstpath }) => {
  const [activeBoard, setActiveBoard] = useState("coding"); // 초기 활성 보드 설정
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (navigatepath, data) => {
    navigate(navigatepath, { state: data });
  };
  const handleRefresh = () => {
    navigate("/community", {
      state: {
        firstpath: firstpath,
      },
    });
  };
  useEffect(() => {
    const currentBoard = location.state?.secondpath || "coding";
    setActiveBoard(currentBoard);
  }, [location.state]);

  const boards = [
    {
      id: "coding",
      label: "💻 코딩 질문",
      link: "/community/coding",
      firstpath: firstpath,
      secondpath: "코딩 질문",
    },
    {
      id: "course",
      label: "🎓 진로 질문",
      link: "/community/course",
      firstpath: firstpath,
      secondpath: "진로 질문",
    },
    {
      id: "study",
      label: "️✏️ 스터디",
      link: "/community/study",
      firstpath: firstpath,
      secondpath: "스터디",
    },
    {
      id: "team",
      label: "📋 팀 프로젝트",
      link: "/community/team",
      firstpath: firstpath,
      secondpath: "팀 프로젝트",
    },
  ];

  return (
    <BoardListContainer>
      <BoardListTitle>
        <BoardListLink onClick={() => handleRefresh()}>
          코디터 커뮤니티
        </BoardListLink>
      </BoardListTitle>
      {boards.map((board) => {
        const isActive = activeBoard === board.secondpath;
        const BoardComponent = isActive
          ? BoardListActiveContents
          : BoardListInactiveContents;

        return (
          <BoardComponent key={board.id}>
            <BoardListLink
              onClick={() => {
                handleNavigation(board.link, {
                  firstpath: board.firstpath,
                  secondpath: board.secondpath,
                });
                setActiveBoard(board.secondpath);
              }}
            >
              {board.label}
            </BoardListLink>
          </BoardComponent>
        );
      })}
    </BoardListContainer>
  );
};

export default BoardList;
