import { BoardContainer } from "../../../styles/community/Board";
import Board_Course_Search from "./innerboard_course/Board_Course_Search";
import Board_Course_MiddleSort from "./innerboard_course/Board_Course_MiddleSort";
import Board_Course_PostList from "./innerboard_course/Board_Course_PostList";
import Pagenation from "./Pagenation";

const Board_Course = () => {
  return (
    <>
      <BoardContainer>
        <Board_Course_Search />
        <Board_Course_MiddleSort />
        <Board_Course_PostList />
        <Pagenation />
      </BoardContainer>
    </>
  );
};

export default Board_Course;
