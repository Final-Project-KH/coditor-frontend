import {
  TopBoxArrow,
  TopBoxText,
  TopBox,
  TopBoxWide,
  Container,
  Wrap,
  LeftContainer,
  CenterContainer,
  RightContainer,
  PathLink,
} from "../../styles/community/Community";
import ScrollToTopButton from "../../styles/ScrollToTopButton";
import BoardList from "./components/common/Side_BoardList";
import PopularTags from "./components/common/Side_PopularTags";
import TopWriters from "./components/common/Side_TopWriters";
import WeeklyBest from "./components/common/Side_WeeklyBest";
import { useLocation, useNavigate } from "react-router-dom";
import { BoardContainer } from "../../styles/community/Board";
import Board_Study_TopSort from "./components/study/Board_Study_TopSort";
import Board_Study_Search from "./components/study/Board_Study_Search";
import Board_Study_MiddleSort from "./components/study/Board_Study_MiddleSort";
import Board_PostList from "./components/common/Board_PostList";

const Community_Study = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath } = location.state || {};
  const queryParams = new URLSearchParams(location.search);

  // params for pagination
  const boardType = "study";
  const page = queryParams.get("page");
  const size = queryParams.get("size");
  const sortBy = queryParams.get("sortBy");
  const order = queryParams.get("order");

  // TopBox firstpath
  const handleCommunity = () => {
    navigate("/community", {
      state: {
        firstpath: firstpath,
      },
    });
  };

  // TopBox secondpath
  const handleRefresh = () => {
    navigate(`/community/${boardType}`, {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
  };

  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <PathLink onClick={() => handleCommunity()}>
              <TopBoxText>{firstpath}</TopBoxText>
            </PathLink>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <PathLink onClick={() => handleRefresh()}>
              <TopBoxText>{secondpath}</TopBoxText>
            </PathLink>
          </TopBox>
        </TopBoxWide>
        <Container>
          <LeftContainer>
            <BoardList firstpath={firstpath} />
            <PopularTags />
            <WeeklyBest />
          </LeftContainer>
          <CenterContainer>
            <BoardContainer>
              <Board_Study_TopSort />
              <Board_Study_Search />
              <Board_Study_MiddleSort />
              <Board_PostList
                boardType={boardType}
                page={page}
                size={size}
                sortBy={sortBy}
                order={order}
              />
            </BoardContainer>
          </CenterContainer>
          <RightContainer>
          <TopWriters />
          </RightContainer>
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default Community_Study;
