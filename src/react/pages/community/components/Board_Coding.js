import { BoardContainer } from "../../../styles/community/Board";
import Board_Coding_MiddleSort from "./innerboard_coding/Board_Coding_MiddleSort";
import Board_Coding_PostList from "./innerboard_coding/Board_Coding_PostList";
import Board_Coding_Search from "./innerboard_coding/Board_Coding_Search";
import Board_Coding_TopSort from "./innerboard_coding/Board_Coding_TopSort";
import Board_Common_Pagenation from "./Pagenation";

const Board_Coding = () => {
  return (
    <>
      <BoardContainer>
        <Board_Coding_TopSort />
        <Board_Coding_Search />
        <Board_Coding_MiddleSort />
        <Board_Coding_PostList />
        <Board_Common_Pagenation />
      </BoardContainer>
    </>
  );
};

export default Board_Coding;
