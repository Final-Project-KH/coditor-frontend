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

import Board_TopSort_M from "./components/common/Board_TopSort_M";
import Board_Coding_Search_M from "./components/coding/Board_Coding_Search_M";
import Board_Order_M from "./components/common/Board_Order_M";
import Board_PostList from "./components/common/Board_PostList";
import ScrollToTopButton from "../ScrollToTopButton";

const Community_Coding_M = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
  const [search, setSearch] = useState(queryParams.get("search") || null); // 검색

  const boardType = "coding";

  // TopBox firstpath
  const handleCommunity = () => {
    navigate("/community");
  };

  // TopBox secondpath
  const handleRefresh = () => {
    navigate(`/community/${boardType}`);
  };

  const handleEnumFilterRefresh = () => {
    setEnumFilter(null);
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

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
  };

  const handleEnumFilterChange = (newEnumFilter) => {
    setEnumFilter(newEnumFilter);
  };

  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <TopBoxLink onClick={() => handleCommunity()}>
              <TopBoxText>community</TopBoxText>
            </TopBoxLink>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <TopBoxLink onClick={() => handleRefresh()}>
              <TopBoxText>💻 코딩 질문</TopBoxText>
            </TopBoxLink>
          </TopBox>
        </TopBoxWide>
        <Container>
          <BoardContainer>
            <Board_TopSort_M
              onStatusChange={handleStatusChange}
              boardType={boardType}
            />
            <Board_Coding_Search_M
              onEnumFilterRefresh={handleEnumFilterRefresh}
              onSearchChange={handleSearchChange}
              boardType={boardType}
              enumFilter={enumFilter}
            />
            <Board_Order_M
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
              enumFilter={enumFilter}
              search={search}
            />
          </BoardContainer>
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default Community_Coding_M;
