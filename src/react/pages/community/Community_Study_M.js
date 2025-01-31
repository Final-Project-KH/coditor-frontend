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

import Board_Study_Search from "./components/study/Board_Study_Search";
import Board_PostList from "./components/common/Board_PostList";
import Board_TopSort from "./components/common/Board_TopSort";
import Board_Order from "./components/common/Board_Order";
import ScrollToTopButton from "../ScrollToTopButton";

const Community_Study_M = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath } = location.state || {};
  const queryParams = new URLSearchParams(location.search);

  // Pagination and sorting params
  const [page, setPage] = useState(queryParams.get("page") || 1);
  const [size, setSize] = useState(queryParams.get("size") || 10);
  const [sortBy, setSortBy] = useState(
    queryParams.get("sortBy") || "createdAt"
  ); // 기본 타입은 createdAt / 조회순 / 좋아요순 / 댓글많은순 가능
  const [order, setOrder] = useState(queryParams.get("order") || "desc"); // 타입은 desc / asc
  const [status, setStatus] = useState(queryParams.get("status") || null); // 타입은 active / inactive
  const [enumFilter, setEnumFilter] = useState(
    queryParams.get("enumfilter") || null
  ); // 해쉬태그
  const [serach, setSearch] = useState(queryParams.get("search") || null); // 검색

  const boardType = "study";

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

  const handleOrderChange = (newOrder) => {
    setOrder(newOrder);
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
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
              onSortChange={handleStatusChange}
              boardType={boardType}
            />
            <Board_Study_Search />
            <Board_Order
              boardType={boardType}
              onSortChange={handleSortChange}
            />
            <Board_PostList
              boardType={boardType}
              page={page}
              size={size}
              sortBy={sortBy}
              order={order}
              status={status}
            />
          </BoardContainer>
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default Community_Study_M;
