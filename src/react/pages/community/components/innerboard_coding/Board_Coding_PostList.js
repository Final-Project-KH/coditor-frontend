import { useEffect, useState } from "react";
import {
  PostBottom,
  PostBottomDataBox,
  PostBottomDot,
  PostBottomRepliesBox,
  PostBottomRepliesImg,
  PostBottomRepliesText,
  PostBottomTag,
  PostBottomTagsBox,
  PostBottomViewsBox,
  PostBottomViewsImg,
  PostBottomViewsText,
  PostEach,
  PostListContainer,
  PostMiddle,
  PostMiddleContentsPending,
  PostMiddleContentsSolved,
  PostMiddleContentsText,
  PostMiddleContentsTitle,
  PostMiddleContentsUpper,
  PostTop,
  PostTopDays,
  PostTopUser,
  PostTopUserId,
  PostTopUserImg,
} from "../../../../styles/community/Board";
import {
  Board_Coding_EachPost_01,
  Board_Coding_EachPost_02,
  Board_Coding_EachPost_03,
  Board_Coding_EachPost_04,
  Board_Coding_EachPost_05,
  Board_Coding_EachPost_06,
  Board_Coding_EachPost_07,
  Board_Coding_EachPost_08,
  Board_Coding_EachPost_09,
  Board_Coding_EachPost_10,
} from "./Board_Coding_EachPost";
import AxiosApi from "../../../../../api/AxiosApi";
import { useLocation, useNavigate } from "react-router-dom";

const Board_Coding_PostList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath, thirdpath } = location.state || {};

  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [boardType, setBoardType] = useState("CODING");

  // Get Board from Backend
  useEffect(() => {
    // API 호출 시 파라미터 설정
    const boardCoding = async () => {
      try {
        const response = await AxiosApi.getBoard(boardType); // boardType을 전달
        setBoards(response.content); // Page 객체의 content 사용
        console.log("데이터 : ", response);
      } catch (error) {
        console.error("게시글을 가져오는 중 오류가 발생했습니다.", error);
      } finally {
        setLoading(false);
      }
    };
    boardCoding();
  }, [boardType]); // boardType이 변경될 때마다 API 호출

  // TopBox PathSet
  const handlePost = () => {
    navigate("/community/coding/post1", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: "게시글",
      },
    });
  };

  // Loading Status
  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <PostListContainer>
        {boards.map((board, index) => (
          <PostEach
            key={index}
            style={{ cursor: "pointer" }}
            onClick={() => handlePost()}
          >
            <PostTop>
              <PostTopUser>
                <PostTopUserImg
                  style={{
                    backgroundColor: "#313131",
                    backgroundImage: `url(${
                      board.profileUrl
                        ? board.profileUrl
                        : "/images/general/default_profile.png"
                    })`,
                  }}
                />
                <PostTopUserId>By: {board.name}</PostTopUserId>
              </PostTopUser>
              <PostTopDays>
                {new Date(board.createdAt)
                  .toISOString()
                  .slice(0, 10)
                  .replace(/-/g, ".")}{" "}
                작성
              </PostTopDays>
            </PostTop>
            <PostMiddle>
              <PostMiddleContentsUpper>
                {board.solution === "SOLVED" ? (
                  <PostMiddleContentsSolved>해결됨</PostMiddleContentsSolved>
                ) : (
                  <PostMiddleContentsPending>미해결</PostMiddleContentsPending>
                )}
                <PostMiddleContentsTitle>{board.title}</PostMiddleContentsTitle>
              </PostMiddleContentsUpper>
              <PostMiddleContentsText>{board.content}</PostMiddleContentsText>
            </PostMiddle>
            <PostBottom>
              <PostBottomTagsBox>
                <PostBottomTag>{board.language}</PostBottomTag>
              </PostBottomTagsBox>
              <PostBottomDataBox>
                <PostBottomRepliesBox>
                  <PostBottomRepliesImg />
                  <PostBottomRepliesText>
                    {board.commentCnt}
                  </PostBottomRepliesText>
                </PostBottomRepliesBox>
                <PostBottomDot />
                <PostBottomViewsBox>
                  <PostBottomViewsImg />
                  <PostBottomViewsText>{board.viewCnt}</PostBottomViewsText>
                </PostBottomViewsBox>
              </PostBottomDataBox>
            </PostBottom>
          </PostEach>
        ))}
        {/*<Board_Coding_EachPost_01 />
        <Board_Coding_EachPost_02 />
        <Board_Coding_EachPost_03 />
        <Board_Coding_EachPost_04 />
        <Board_Coding_EachPost_05 />
        <Board_Coding_EachPost_06 />
        <Board_Coding_EachPost_07 />
        <Board_Coding_EachPost_08 />
        <Board_Coding_EachPost_09 />
        <Board_Coding_EachPost_10 /> */}
      </PostListContainer>
    </>
  );
};

export default Board_Coding_PostList;
