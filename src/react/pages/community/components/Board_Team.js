import { BoardContainer } from "../../../styles/community/Board";
import Board_Common_Pagenation from "./Board_Common_Pagenation";
import Board_Team_MiddleSort from "./innerboard_team/Board_Team_MiddleSort";
import Board_Team_PostList from "./innerboard_team/Board_Team_PostList";
import Board_Team_Search from "./innerboard_team/Board_Team_Search";
import Board_Team_TopSort from "./innerboard_team/Board_Team_TopSort";

const Board_Team = () => {
  return (
    <>
      <BoardContainer>
        <Board_Team_TopSort />
        <Board_Team_Search />
        <Board_Team_MiddleSort />
        <Board_Team_PostList />
        <Board_Common_Pagenation />
      </BoardContainer>
    </>
  );
};

export default Board_Team;
