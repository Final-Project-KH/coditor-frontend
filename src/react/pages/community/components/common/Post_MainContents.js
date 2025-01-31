import { useEffect, useState } from "react";
import {
  MainPostContainer,
  MainPostTop,
  MainPostTitle,
  MainPostInformation,
  MainPostDate,
  MiddleDot,
  MainPostViewsBox,
  MainPostViewsImg,
  MainPostViewsText,
  MainPostEditedText,
  MainPostThumbsUpBox,
  MainPostThumbsUpImg,
  MainPostThumbsUpText,
  MainPostThumbsDownBox,
  MainPostThumbsDownImg,
  MainPostThumbsDownText,
  MainPostMiddle,
  LeftEvBox,
  LeftEvUp,
  LeftEvDown,
  MainPostContentsBox,
  MainPostContentsText,
  MainPostTagsBox,
  MainPostTag,
} from "../../../../styles/community/Post";
import AxiosApi from "../../../../../api/AxiosApi";
import { useLocation, useParams } from "react-router-dom";
import {
  LanguageDisplayNames,
  CourseDisplayNames,
  StudyDisplayNames,
  TeamDisplayNames,
} from "../common/DisplayNames";
import { useSelector } from "react-redux";

const Post_MainContents = ({ boardType }) => {
  const { boardId } = useParams();
  // const [boardType, setBoardType] = useState("CODING");
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const { firstpath, secondpath, thirdpath } = location.state || {};
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userDisLikeCnt, setUserDisLikeCnt] = useState("");
  const [userLikeCnt, setUserLikeCnt] = useState("");

  const userkeynumber = useSelector((state) => state.auth.keynumber);
  const accesstoken = useSelector((state) => state.auth.accesstoken);

  // Get Post from Backend
  useEffect(() => {
    const readPost = async () => {
      try {
        const response = await AxiosApi.getPost(boardId);
        setPosts([response]);
        console.log("post : ", posts);
        console.log(response);
        console.log("보드 아이디 : ", boardId);
      } catch (error) {
        console.error("게시글 가져오는 중 오류 발생 : ", error);
      }
    };
    readPost();
  }, [boardId]);

  useEffect(() => {
    if (!accesstoken) {
      return;
    }
    const reactionState = async () => {
      try {
        const response = await AxiosApi.boardreactionstatus(
          boardId,
          userkeynumber
        );
        setUserLikeCnt(response.likeCnt);
        setUserDisLikeCnt(response.dislikeCnt);
        console.log("Like : ", userLikeCnt);
        console.log("Dislike : ", userDisLikeCnt);
      } catch (error) {
        console.error("Reaction 상태 불러오기 실패 :", error);
      }
    };
    reactionState();
  }, [userDisLikeCnt, userLikeCnt]);

  const onClickLike = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      if (userDisLikeCnt === 1) {
        alert("이미 싫어요 한 글입니다.");
        return;
      }
      await AxiosApi.boardreaction(boardId, userkeynumber, "LIKE");
      if (userLikeCnt === 0 && userDisLikeCnt === 0) {
        setPosts(
          posts.map((post) =>
            post.boardId == boardId
              ? { ...post, likeCnt: post.likeCnt + 1 }
              : post
          )
        );
        setUserLikeCnt(userLikeCnt + 1);
      }
      if (userLikeCnt === 1 && userDisLikeCnt === 0) {
        setPosts(
          posts.map((post) =>
            post.boardId == boardId
              ? { ...post, likeCnt: post.likeCnt - 1 }
              : post
          )
        );
        setUserLikeCnt(userLikeCnt - 1);
      }
      console.log("post : ", posts);
    } catch (error) {
      console.log("좋아요 실패", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onClickDisLike = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      if (userLikeCnt === 1) {
        alert("이미 좋아요 한 글입니다.");
        return;
      }
      await AxiosApi.boardreaction(boardId, userkeynumber, "DISLIKE");
      if (userLikeCnt === 0 && userDisLikeCnt === 0) {
        setPosts(
          posts.map((post) =>
            post.boardId == boardId
              ? { ...post, dislikeCnt: post.dislikeCnt + 1 }
              : post
          )
        );
        setUserDisLikeCnt(userDisLikeCnt + 1);
      }
      if (userLikeCnt === 0 && userDisLikeCnt === 1) {
        setPosts(
          posts.map((post) =>
            post.boardId == boardId
              ? { ...post, dislikeCnt: post.dislikeCnt - 1 }
              : post
          )
        );
        setUserDisLikeCnt(userDisLikeCnt - 1);
      }
    } catch (error) {
      console.log("싫어요 실패", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {posts.map((post, index) => (
        <MainPostContainer key={index}>
          <MainPostTop>
            <MainPostTitle>{post.title}</MainPostTitle>
            <MainPostInformation>
              <MainPostDate>
                {new Date(post.createdAt)
                  .toLocaleString("ko-KR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })
                  .replace(/\. /g, ".")}
                &nbsp;작성
              </MainPostDate>
              <MiddleDot />
              <MainPostViewsBox>
                <MainPostViewsImg />
                <MainPostViewsText>{post.viewCnt}</MainPostViewsText>
              </MainPostViewsBox>
              <MiddleDot />
              {post.updatedAt && (
                <>
                  <MainPostEditedText>
                    {new Date(post.updatedAt)
                      .toLocaleString("ko-KR", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      })
                      .replace(/\. /g, ".")}
                    수정됨
                  </MainPostEditedText>
                  <MiddleDot />
                </>
              )}
              <MainPostThumbsUpBox>
                <MainPostThumbsUpImg />
                <MainPostThumbsUpText>{post.likeCnt}</MainPostThumbsUpText>
              </MainPostThumbsUpBox>
              <MiddleDot />
              <MainPostThumbsDownBox>
                <MainPostThumbsDownImg />
                <MainPostThumbsDownText>
                  {post.dislikeCnt}
                </MainPostThumbsDownText>
              </MainPostThumbsDownBox>
            </MainPostInformation>
          </MainPostTop>
          <MainPostMiddle>
            <LeftEvBox>
              <LeftEvUp
                userLikeCnt={userLikeCnt}
                onClick={(e) => onClickLike(e)}
              />
              <LeftEvDown
                userDisLikeCnt={userDisLikeCnt}
                onClick={(e) => onClickDisLike(e)}
              />
            </LeftEvBox>
            <MainPostContentsBox>
              <MainPostContentsText
                className="main-post-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <MainPostTagsBox>
                {(post.language || post.course || post.study || post.team) && (
                  <MainPostTag>
                    {" "}
                    {LanguageDisplayNames[post.language] ||
                      CourseDisplayNames[post.course] ||
                      StudyDisplayNames[post.study] ||
                      TeamDisplayNames[post.team]}
                  </MainPostTag>
                )}
                {/* {post.language && <MainPostTag>{post.language}</MainPostTag>} */}
              </MainPostTagsBox>
            </MainPostContentsBox>
          </MainPostMiddle>
        </MainPostContainer>
      ))}
    </>
  );
};

export default Post_MainContents;
