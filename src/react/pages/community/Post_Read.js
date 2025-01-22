import { useLocation, useNavigate } from "react-router-dom";
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
import {
  Post_MainContents_01,
  Post_MainContents_02,
  Post_MainContents_03,
  Post_MainContents_04,
  Post_MainContents_05,
} from "./components/post/Post_MainContents";
import Post_RelatedPosts from "./components/post/Post_RelatedPosts";
import Post_ReplyArea from "./components/post/Post_ReplyArea";
import Post_UserProfile from "./components/post/Post_UserProfile";
import { PathLink } from "../../styles/community/Community";
import ScrollToTopButton from "../../styles/ScrollToTopButton";
import { useEffect, useState } from "react";
import AxiosApi from "../../../api/AxiosApi";

const Post_Read = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath, thirdpath } = location.state || {};

  // TopBox firstpath
  const handleCommunity = () => {
    navigate("/community", {
      state: {
        firstpath: firstpath,
      },
    });
  };

  // TopBox secondpath
  const handleCommunityCoding = () => {
    navigate("/community/coding", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
  };

  // TopBox thirdpath
  const handleRefresh = () => {
    navigate("/community/coding/post1", {
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
            <Post_MainContents_01 />
            <Post_ReplyArea />
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
