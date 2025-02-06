import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PostEach,
  PostListContainer,
  PostTop,
  PostTopUser,
  PostTopUserId,
  PostTopUserImg,
  PostTopDays,
  PostMiddle,
  PostMiddleContentsTitle,
  PostMiddleContentsText,
  PostBottom,
  PostBottomRepliesBox,
  PostBottomRepliesImg,
  PostBottomRepliesText,
  PostBottomViewsBox,
  PostBottomViewsImg,
  PostBottomViewsText,
  PostBottomDot,
} from "../../../../styles/community/Board";
import AxiosApi from "../../../../../api/AxiosApi";
import Board_Pagination from "./Board_Pagination";

const Board_PostList_MyPage_Report = ({ page, size, onPageChange }) => {
  const navigate = useNavigate();
  const [reportPosts, setReportPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMyReportPosts = async () => {
      try {
        const response = await AxiosApi.getMyReportPosts(page, size);
        setReportPosts(response.content);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error("내 신고한 게시글 불러오기 오류:", error);
      }
    };
    fetchMyReportPosts();
  }, [page, size]);

  // HTML 태그 제거하는 함수
  const getTextFromHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const handlePostClick = (post) => {
    // navigate(`/community/${post.boardType}/post/${post.boardId}`);
    // navigate(`/community`);
  };

  return (
    <>
      <PostListContainer>
        {reportPosts.length > 0 ? (
          reportPosts.map((post) => (
            <PostEach key={post.reportId} onClick={() => handlePostClick(post)}>
              <PostTop>
                <PostTopUser>
                  <PostTopUserImg
                    style={{
                      backgroundImage: `url(${
                        post.profileUrl
                          ? post.profileUrl
                          : "/images/general/default_profile.png"
                      })`,
                    }}
                  />
                  <PostTopUserId>{post.name}</PostTopUserId>
                </PostTopUser>
                <PostTopDays>
                  {new Date(post.createdAt)
                    .toISOString()
                    .slice(0, 10)
                    .replace(/-/g, ".")}
                  작성
                </PostTopDays>
              </PostTop>
              <PostMiddle>
                <PostMiddleContentsTitle>{post.title}</PostMiddleContentsTitle>
                <PostMiddleContentsText>
                  {getTextFromHTML(post.content).length > 100
                    ? getTextFromHTML(post.content).slice(0, 100) + "..."
                    : getTextFromHTML(post.content)}
                </PostMiddleContentsText>
              </PostMiddle>
              {/* <PostBottom>
                <PostBottomRepliesBox>
                  <PostBottomRepliesImg />
                  <PostBottomRepliesText>
                    {post.commentCnt}
                  </PostBottomRepliesText>
                </PostBottomRepliesBox>
                <PostBottomDot />
                <PostBottomViewsBox>
                  <PostBottomViewsImg />
                  <PostBottomViewsText>{post.viewCnt}</PostBottomViewsText>
                </PostBottomViewsBox>
              </PostBottom> */}
            </PostEach>
          ))
        ) : (
          <p>신고한 게시글이 없습니다.</p>
        )}
      </PostListContainer>

      <Board_Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={onPageChange} // ✅ 페이지네이션 적용
      />
    </>
  );
};

export default Board_PostList_MyPage_Report;
