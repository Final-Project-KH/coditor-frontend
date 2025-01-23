import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  WriteSortInnerContainer,
  WriteSortOuterContiner,
  WriteSortTitleActive,
  WriteSortTitleInactive,
  WriteBoardLink
} from "../../../../styles/community/Post";

const Post_WriteSort = ({ firstpath }) => {
  const [activeBoard, setActiveBoard] = useState("coding"); // 초기 설정
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (navigatepath, data) => {
    navigate(navigatepath, { state: data });
  };

  useEffect(() => {
    const currentBoard = location.state?.secondpath || "coding";
    setActiveBoard(currentBoard);
  }, [location.state]);

  const boards = [
    {
      id: "coding",
      label: "코딩 질문",
      link: "/community/coding/write",
      firstpath: firstpath,
      secondpath: "코딩 질문",
    },
    {
      id: "course",
      label: "진로 질문",
      link: "/community/course/write",
      firstpath: firstpath,
      secondpath: "진로 질문",
    },
    {
      id: "study",
      label: "스터디",
      link: "/community/study/write",
      firstpath: firstpath,
      secondpath: "스터디",
    },
    {
      id: "team",
      label: "팀 프로젝트",
      link: "/community/team/write",
      firstpath: firstpath,
      secondpath: "팀 프로젝트",
    },
  ];

  return (
    <>
      <WriteSortOuterContiner>
        <WriteSortInnerContainer>
          {boards.map((board) => {
            const isActive = activeBoard === board.secondpath;
            const BoardComponent = isActive
              ? WriteSortTitleActive
              : WriteSortTitleInactive;

            return (
              <BoardComponent key={board.id}>
                <WriteBoardLink
                  onClick={() => {
                    handleNavigation(board.link, {
                      firstpath: board.firstpath,
                      secondpath: board.secondpath,
                    });
                    setActiveBoard(board.secondpath);
                  }}
                >
                  {board.label}
                </WriteBoardLink>
              </BoardComponent>
            );
          })}
        </WriteSortInnerContainer>
      </WriteSortOuterContiner>
    </>
  );
};

export default Post_WriteSort;
