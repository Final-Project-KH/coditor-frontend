import {useLocation, useNavigate, useParams} from "react-router-dom";

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
  UserProfileBox,
  UserProfileImg,
  UserProfileTextBox,
  UserId,
  UserPostAmount,
} from "../../styles/community/User";
import {PathLink} from "../../styles/community/Community";
import Post_UserProfile from "./components/common/Post_UserProfile";
import Post_RelatedPosts from "./components/common/Post_RelatedPosts";
import User_Feed from "./components/common/User_Feed";
import Board_Community_Main from "./components/common/Board_Community_Main";
import ScrollToTopButton from "../ScrollToTopButton";
import {useEffect, useState} from "react";
import AxiosApi from "../../../api/AxiosApi";

const User_Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {firstpath, secondpath, writerKey} = location.state || {};
  const [writerProfile, setWriterProfile] = useState(null);
  const [writerName, setWriterName] = useState("");
  const [writerPostCnt, setWriterPostCnt] = useState(null);

  useEffect(() => {
    const readUserPost = async () => {
      try {
        const response = await AxiosApi.getotherpost(writerKey);
        setWriterProfile(response.content[0].profileUrl);
        setWriterName(response.content[0].name);
        console.log("불러온 작성자 게시글 목록 : ", response.content);
        console.log("프로필 url: ", response.content[0].profileUrl);
      } catch (error) {
        console.log("유저 게시글 불러올 때 오류 발생 : ");
      }
    };
    readUserPost();
  }, []);

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
    navigate(`/community/user/${writerKey}`, {
      state: {
        firstpath: firstpath,
        secondpath: "user page",
        writerKey: writerKey,
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
            <UserProfileBox style={{cursor: "pointer"}}>
              <UserProfileImg isProfile={writerProfile} />
              <UserProfileTextBox>
                <UserId>{writerName}</UserId>
                <UserPostAmount>작성한 질문수 </UserPostAmount>
              </UserProfileTextBox>
            </UserProfileBox>
          </LeftContainer>
          <RightContainer>
            <User_Feed />
            <PostContainer>
              <PostTitle>작성글</PostTitle>
              <Board_Community_Main />
            </PostContainer>
          </RightContainer>
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default User_Main;
