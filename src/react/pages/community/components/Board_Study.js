import { BoardContainer } from "../../../styles/community/Board";
import Pagenation from "./Pagenation";
import Board_Study_MiddleSort from "./innerboard_study/Board_Study_MiddleSort";
import Board_Study_PostList from "./innerboard_study/Board_Study_PostList";
import Board_Study_Search from "./innerboard_study/Board_Study_Search";
import Board_Study_TopSort from "./innerboard_study/Board_Study_TopSort";

const Board_Study = () => {
  return (
    <>
      <BoardContainer>
        <Board_Study_TopSort />
        <Board_Study_Search />
        <Board_Study_MiddleSort />
        <Board_Study_PostList />
        <Pagenation />
      </BoardContainer>
    </>
  );
};

export default Board_Study;
