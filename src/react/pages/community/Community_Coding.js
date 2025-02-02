import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

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
  BoardContainer,
} from "../../styles/community/Community";

import Board_PostList from "./components/common/Board_PostList";
import Board_Coding_Search from "./components/coding/Board_Coding_Search";
import BoardList from "./components/common/Side_BoardList";
import PopularTags from "./components/common/Side_PopularTags";
import CodingPopularTags from "./components/common/Side_Coding_PopularTags";
import TopWriters from "./components/common/Side_TopWriters";
import WeeklyBest from "./components/common/Side_WeeklyBest";
import Board_TopSort from "./components/common/Board_TopSort";
import Board_Order from "./components/common/Board_Order";
import ScrollToTopButton from "../ScrollToTopButton";
import Community_Coding_M from "./Community_Coding_M";

const Community_Coding = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath } = location.state || {};
  const queryParams = new URLSearchParams(location.search);
  const { isMobile } = useOutletContext();

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

  console.log(sortBy);
  console.log(status);
  console.log(order);
  console.log(enumFilter);
  console.log(search);

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
      {isMobile ? (
        <Community_Coding_M />
      ) : (
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
              <CodingPopularTags
                enumFilter={enumFilter}
                onEnumFilterChange={handleEnumFilterChange}
              />
              <WeeklyBest />
            </LeftContainer>
            <CenterContainer>
              <BoardContainer>
                <Board_TopSort
                  onStatusChange={handleStatusChange}
                  boardType={boardType}
                />
                <Board_Coding_Search
                  onEnumFilterRefresh={handleEnumFilterRefresh}
                  onSearchChange={handleSearchChange}
                  boardType={boardType}
                />
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
            </CenterContainer>
            <RightContainer>
              <TopWriters />
            </RightContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default Community_Coding;
