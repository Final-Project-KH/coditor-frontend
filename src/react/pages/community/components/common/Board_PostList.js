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
import AxiosApi from "../../../../../api/AxiosApi";
import { useLocation, useNavigate } from "react-router-dom";
import Board_Pagination from "./Board_Pagination";
import {
  LanguageDisplayNames,
  CourseDisplayNames,
  StudyDisplayNames,
  TeamDisplayNames,
} from "../common/DisplayNames";

const Board_PostList = ({ boardType, page, size, sortBy, order, status }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath, thirdpath } = location.state || {};
  const [boards, setBoards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Get Board from Backend
  useEffect(() => {
    const loadBoard = async () => {
      try {
        const response = await AxiosApi.getBoard(
          currentPage,
          size,
          boardType,
          sortBy,
          order,
          status
        );
        setBoards(response.content); // 받아온 게시글 리스트로 상태 업데이트
        setTotalPages(response.totalPages); // 총 페이지 수 설정
        console.log("게시글 불러오기 성공");
      } catch (error) {
        console.error("게시글 리스트 가져오는 중 오류 발생 : ", error);
      }
    };
    loadBoard();
  }, [boardType, currentPage, sortBy, order, status]); // boardType 또는 currentPage가 변경될 때마다 실행

  console.log("게시글 확인 : ", boards);

  // view post
  const handlePost = (boardType, board) => {
    navigate(`/community/${boardType}/post/${board.boardId}`, {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: "게시글",
        boardId: board.boardId,
        boardType: boardType,
      },
    });
  };

  // paging handler
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // contents conversion
  const getTextFromHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <>
      <PostListContainer>
        {boards.map((board) => (
          <PostEach
            key={board.boardId}
            style={{ cursor: "pointer" }}
            onClick={() => handlePost(boardType, board)}
          >
            <PostTop>
              <PostTopUser>
                <PostTopUserImg
                  style={{
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
                  .replace(/-/g, ".")}
                {". "}
                작성
              </PostTopDays>
            </PostTop>
            <PostMiddle>
              <PostMiddleContentsUpper>
                {board.status === "INACTIVE" ? (
                  <PostMiddleContentsSolved>해결됨</PostMiddleContentsSolved>
                ) : (
                  <PostMiddleContentsPending>미해결</PostMiddleContentsPending>
                )}
                <PostMiddleContentsTitle>{board.title}</PostMiddleContentsTitle>
              </PostMiddleContentsUpper>
              <PostMiddleContentsText>
                {getTextFromHTML(board.content)}
              </PostMiddleContentsText>
            </PostMiddle>
            <PostBottom>
              {(board.language ||
                board.course ||
                board.study ||
                board.team) && (
                <PostBottomTagsBox>
                  {/* <PostBottomTag>
                    {LanguageDisplayNames[board.language] ||
                      CourseDisplayNames[board.course] ||
                      StudyDisplayNames[board.study] ||
                      TeamDisplayNames[board.team]}
                  </PostBottomTag> */}
                  {board.language && board.language.length > 0
                    ? board.language.map((lang, index) => (
                        <PostBottomTag>
                          {LanguageDisplayNames[lang]}
                        </PostBottomTag>
                      ))
                    : board.course && board.course.length > 0
                    ? board.course.map((lang, index) => (
                        <PostBottomTag>
                          {CourseDisplayNames[lang]}
                        </PostBottomTag>
                      ))
                    : board.study && board.study.length > 0
                    ? board.study.map((lang, index) => (
                        <PostBottomTag>{StudyDisplayNames[lang]}</PostBottomTag>
                      ))
                    : board.team &&
                      board.team.length > 0 &&
                      board.team.map((lang, index) => (
                        <PostBottomTag>{TeamDisplayNames[lang]}</PostBottomTag>
                      ))}
                </PostBottomTagsBox>
              )}
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
      </PostListContainer>
      <Board_Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Board_PostList;
