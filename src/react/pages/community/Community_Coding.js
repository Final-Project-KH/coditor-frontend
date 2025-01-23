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
import Board_Coding_MiddleSort from "./components/coding/Board_Coding_MiddleSort";
import Board_PostList from "./components/common/Board_PostList";
import Board_Coding_Search from "./components/coding/Board_Coding_Search";
import Board_Coding_TopSort from "./components/coding/Board_Coding_TopSort";
import BoardList from "./components/common/Side_BoardList";
import PopularTags from "./components/common/Side_PopularTags";
import TopWriters from "./components/common/Side_TopWriters";
import WeeklyBest from "./components/common/Side_WeeklyBest";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Community_Coding = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath } = location.state || {};
  const queryParams = new URLSearchParams(location.search);

  // Pagination and sorting params
  const [page, setPage] = useState(queryParams.get("page") || 1);
  const [size, setSize] = useState(queryParams.get("size") || 10);
  const [sortBy, setSortBy] = useState(queryParams.get("sortBy") || "createdAt");
  const [order, setOrder] = useState(queryParams.get("order") || "desc");

  const boardType = "coding";

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
              <Board_Coding_TopSort onSortChange={handleSortChange} />
              <Board_Coding_Search />
              <Board_Coding_MiddleSort />
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

export default Community_Coding;
