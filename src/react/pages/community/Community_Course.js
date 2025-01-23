import { BoardContainer } from "../../styles/community/Board";
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
import Board_Course_Search from "./components/course/Board_Course_Search";
import Board_PostList from "./components/common/Board_PostList";
import Board_TopSort from "./components/common/Board_TopSort";
import { useState } from "react";
import Board_Order from "./components/common/Board_Order";

const Community_Course = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath } = location.state || {};
  const queryParams = new URLSearchParams(location.search);
  

  // Pagination and sorting params
  const [page, setPage] = useState(queryParams.get("page") || 1);
  const [size, setSize] = useState(queryParams.get("size") || 10);
  const [sortBy, setSortBy] = useState(
    queryParams.get("sortBy") || "createdAt"
  );
  const [order, setOrder] = useState(queryParams.get("order") || "desc");

  const boardType = "course";

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

    // Update sorting parameters
    const handleSortChange = (newSortBy) => {
      setSortBy(newSortBy);
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
            <Board_TopSort
                onSortChange={handleSortChange}
                boardType={boardType}
              />
              <Board_Course_Search />
              <Board_Order boardType={boardType} />
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

export default Community_Course;
