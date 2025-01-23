import { useLocation, useNavigate, useParams } from "react-router-dom";
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
import ScrollToTopButton from "../../styles/ScrollToTopButton";
import Post_RelatedPosts from "./components/common/Post_RelatedPosts";
import Post_MainContents from "./components/common/Post_MainContents";
import { useState } from "react";

const Post_Read = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath, thirdpath } = location.state || {};
  const { boardType, boardId } = useParams();
  const queryParams = new URLSearchParams(location.search);

  // Pagination and sorting params
  const [page, setPage] = useState(queryParams.get("page") || 1);
  const [size, setSize] = useState(queryParams.get("size") || 10);
  const [sortBy, setSortBy] = useState(
    queryParams.get("sortBy") || "createdAt"
  );
  const [order, setOrder] = useState(queryParams.get("order") || "desc");

  // TopBox firstpath
  const handleCommunity = () => {
    console.log(boardType);
    navigate("/community", {
      state: {
        firstpath: firstpath,
      },
    });
  };

  // TopBox secondpath
  const handleCommunityCoding = () => {
    console.log(boardType);
    navigate(`/community/${boardType}`, {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
  };

  // TopBox thirdpath
  const handleRefresh = () => {
    console.log(boardType);
    navigate(`/community/${boardType}/post/${boardId}`, {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: thirdpath,
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
            <PathLink onClick={() => handleCommunityCoding()}>
              <TopBoxText>{secondpath}</TopBoxText>
            </PathLink>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <PathLink onClick={() => handleRefresh()}>
              <TopBoxText>{thirdpath}</TopBoxText>
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
    </>
  );
};

export default Post_Read;
