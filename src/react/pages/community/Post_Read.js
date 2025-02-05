import {
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";

import {
  Wrap,
  TopBoxArrow,
  TopBoxText,
  TopBox,
  TopBoxWide,
  Container,
  LeftContainer,
  RightContainer,
} from "../../styles/community/Post";
import Post_ReplyArea from "./components/common/Post_ReplyArea";
import Post_UserProfile from "./components/common/Post_UserProfile";
import { PathLink } from "../../styles/community/Community";
import Post_RelatedPosts from "./components/common/Post_RelatedPosts";
import Post_MainContents from "./components/common/Post_MainContents";
import { useEffect, useState } from "react";
import ScrollToTopButton from "../ScrollToTopButton";
import Post_Read_M from "./Post_Read_M";

const Post_Read = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { boardType, boardId } = useParams();
  const queryParams = new URLSearchParams(location.search);

  // Pagination and sorting params
  const [page, setPage] = useState(queryParams.get("page") || 1);
  const [size, setSize] = useState(queryParams.get("size") || 10);
  const [sortBy, setSortBy] = useState(
    queryParams.get("sortBy") || "createdAt"
  );
  const [order, setOrder] = useState(queryParams.get("order") || "desc");

  const { mainContentRef } = useOutletContext();
  const { isMobile } = useOutletContext();

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  // TopBox firstpath
  const handleCommunity = () => {
    console.log(boardType);
    navigate("/community");
  };

  // TopBox secondpath
  const handleCommunityBoard = () => {
    console.log(boardType);
    navigate(`/community/${boardType}`);
  };

  // TopBox thirdpath
  const handleRefresh = () => {
    console.log(boardType);
    navigate(`/community/${boardType}/post/${boardId}`);
  };

  return (
    <>
      {isMobile ? (
        <Post_Read_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <PathLink onClick={() => handleCommunity()}>
                <TopBoxText>community</TopBoxText>
              </PathLink>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <PathLink onClick={() => handleCommunityBoard()}>
                <TopBoxText>{boardType}</TopBoxText>
              </PathLink>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <PathLink onClick={() => handleRefresh()}>
                <TopBoxText>게시글 상세보기</TopBoxText>
              </PathLink>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <Post_MainContents boardType={boardType} />
              <Post_ReplyArea
                boardType={boardType}
                page={page}
                size={size}
                sortBy={sortBy}
                order={order}
              />
            </LeftContainer>
            <RightContainer>
              <Post_UserProfile />
              <Post_RelatedPosts />
            </RightContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default Post_Read;
