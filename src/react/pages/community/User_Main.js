import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  LeftContainer,
  PostContainer,
  PostTitle,
  RightContainer,
  TopBox,
  TopBoxArrow,
  TopBoxText,
  TopBoxWide,
  Wrap,
} from "../../styles/community/User";
import { PathLink } from "../../styles/community/Community";
import Post_UserProfile from "./components/post/Post_UserProfile";
import Post_RelatedPosts from "./components/post/Post_RelatedPosts";
import User_Feed from "./components/User_Feed";
import Board_Main from "./components/Board_Main";
import ScrollToTopButton from "../../styles/ScrollToTopButton";

const User_Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath } = location.state || {};

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
    navigate("/community/userid?testid01", {
      state: {
        firstpath: firstpath,
        secondpath: "user page",
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
          <Post_UserProfile />
          </LeftContainer>
          <RightContainer>
          <User_Feed />
          <PostContainer>
            <PostTitle>작성글</PostTitle>
            <Board_Main />
          </PostContainer>
        
          </RightContainer>
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default User_Main;
