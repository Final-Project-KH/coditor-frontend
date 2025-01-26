import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxLink,
  Container,
  BoardContainer,
} from "../../styles/community/Community_M";

import Board_Team_Search from "./components/team/Board_Team_Search";
import Board_PostList from "./components/common/Board_PostList";
import Board_TopSort from "./components/common/Board_TopSort";
import Board_Order from "./components/common/Board_Order";
import ScrollToTopButton from "../ScrollToTopButton";

const Community_Team_M = () => {
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

  const boardType = "team";

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
          <TopBoxLink onClick={() => handleCommunity()}>
            <TopBoxText>{firstpath}</TopBoxText>
          </TopBoxLink>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxLink onClick={() => handleRefresh()}>
            <TopBoxText>{secondpath}</TopBoxText>
          </TopBoxLink>
        </TopBox>
      </TopBoxWide>
        <Container>
            <BoardContainer>
              <Board_TopSort
                onSortChange={handleSortChange}
                boardType={boardType}
              />
              <Board_Team_Search />
              <Board_Order boardType={boardType} />
              <Board_PostList
                boardType={boardType}
                page={page}
                size={size}
                sortBy={sortBy}
                order={order}
              />
            </BoardContainer>
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default Community_Team_M;
