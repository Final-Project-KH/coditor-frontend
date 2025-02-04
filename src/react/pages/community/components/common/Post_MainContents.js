import {useEffect, useState} from "react";
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
  MainPostContentsPending,
  MainPostContentsSolved,
  MainPostMiddle,
  LeftEvBox,
  LeftEvUp,
  LeftEvDown,
  MainPostContentsBox,
  MainPostContentsText,
  MainPostTagsBox,
  MainPostTag,
  MainPostExtra,
  MainPostDiv,
  MainPostExtraItemContainer,
  MainPostExtraButton,
  MainPostExtraItem,
} from "../../../../styles/community/Post";
import AxiosApi from "../../../../../api/AxiosApi";
import {useLocation, useParams, useNavigate} from "react-router-dom";
import {
  LanguageDisplayNames,
  CourseDisplayNames,
  StudyDisplayNames,
  TeamDisplayNames,
} from "../common/DisplayNames";
import {useSelector} from "react-redux";

const Post_MainContents = ({boardType}) => {
  const {boardId} = useParams();
  // const [boardType, setBoardType] = useState("CODING");
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const {firstpath, secondpath, thirdpath} = location.state || {};
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userDisLikeCnt, setUserDisLikeCnt] = useState("");
  const [userLikeCnt, setUserLikeCnt] = useState("");
  const [writerKeyNumber, setWriterKeyNumber] = useState(null);
  const [boardStatus, setBoardStatus] = useState(null);
  const [isExtra, setIsExtra] = useState(false);

  const userkeynumber = useSelector((state) => state.auth.keynumber);
  const accesstoken = useSelector((state) => state.auth.accesstoken);
  const navigate = useNavigate();

  const handleExtra = () => {
    setIsExtra(!isExtra);
  };

  console.log("보드 타입 확인 ", boardType);
  console.log("현재 보드 status : ", boardStatus);

  const handleStatus = async () => {
    let changeStatus;

    if (boardStatus === "INACTIVE") {
      changeStatus = "ACTIVE";
    } else if (boardStatus === "ACTIVE") {
      changeStatus = "INACTIVE";
    }
    try {
      const response = await AxiosApi.modifyPostStatus(
        boardId,
        changeStatus,
        boardType.toUpperCase()
      );
      console.log(response);
      if (response) {
        setBoardStatus(changeStatus);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Get Post from Backend
  useEffect(() => {
    const readPost = async () => {
      try {
        const response = await AxiosApi.getPost(boardId);
        console.log("게시글 받아온 데이터", response);

        setPosts([response]);
        setWriterKeyNumber(response.userKey);
        setBoardStatus(response.status);
        console.log("유저 아이디 : ", writerKeyNumber);
        console.log("저장된 유저 아이디 타입 : ", typeof writerKeyNumber);
        console.log(
          "스토어에서 가져온 유저 아이디 타입 : ",
          typeof userkeynumber
        );

        console.log("post : ", posts);
        console.log("post 찍기 : ", posts[0]);

        console.log(response);
        console.log("보드 아이디 : ", boardId);
      } catch (error) {
        console.error("게시글 가져오는 중 오류 발생 : ", error);
      }
    };
    readPost();
  }, [boardId, boardStatus]);

  useEffect(() => {
    const reactionState = async () => {
      try {
        const response = await AxiosApi.boardreactionstatus(
          boardId,
          userkeynumber
        );
        console.log("response", response);
        if (response.reaction === "LIKE") {
          setUserLikeCnt(1);
          setUserDisLikeCnt(0);
        } else if (response.reaction === "DISLIKE") {
          setUserLikeCnt(0);
          setUserDisLikeCnt(1);
        } else {
          setUserLikeCnt(0);
          setUserDisLikeCnt(0);
        }
        console.log("Like : ", userLikeCnt);
        console.log("Dislike : ", userDisLikeCnt);
      } catch (error) {
        return;
      }
    };
    reactionState();
  }, []);

  const onClickLike = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }
    if (!accesstoken) {
      alert("로그인이 필요한 서비스입니다.");
      return navigate("/login");
    }

    setIsSubmitting(true);
    try {
      await AxiosApi.boardreaction(boardId, userkeynumber, "LIKE");
      if (userLikeCnt === 0 && userDisLikeCnt === 0) {
        setPosts(
          posts.map((post) =>
            post.boardId == boardId
              ? {...post, likeCnt: post.likeCnt + 1}
              : post
          )
        );
        setUserLikeCnt(userLikeCnt + 1);
      }
      if (userLikeCnt === 1 && userDisLikeCnt === 0) {
        setPosts(
          posts.map((post) =>
            post.boardId == boardId
              ? {...post, likeCnt: post.likeCnt - 1}
              : post
          )
        );
        setUserLikeCnt(userLikeCnt - 1);
      }
      if (userLikeCnt === 0 && userDisLikeCnt === 1) {
        setPosts(
          posts.map((post) =>
            post.boardId == boardId
              ? {
                  ...post,
                  likeCnt: post.likeCnt + 1,
                  dislikeCnt: post.dislikeCnt - 1,
                }
              : post
          )
        );
        setUserLikeCnt(userLikeCnt + 1);
        setUserDisLikeCnt(userDisLikeCnt - 1);
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
    if (!accesstoken) {
      alert("로그인이 필요한 서비스입니다.");
      return navigate("/login");
    }
    setIsSubmitting(true);
    try {
      await AxiosApi.boardreaction(boardId, userkeynumber, "DISLIKE");
      if (userLikeCnt === 0 && userDisLikeCnt === 0) {
        setPosts(
          posts.map((post) =>
            post.boardId == boardId
              ? {...post, dislikeCnt: post.dislikeCnt + 1}
              : post
          )
        );
        setUserDisLikeCnt(userDisLikeCnt + 1);
      }
      if (userLikeCnt === 0 && userDisLikeCnt === 1) {
        setPosts(
          posts.map((post) =>
            post.boardId == boardId
              ? {...post, dislikeCnt: post.dislikeCnt - 1}
              : post
          )
        );
        setUserDisLikeCnt(userDisLikeCnt - 1);
      }
      if (userLikeCnt === 1 && userDisLikeCnt === 0) {
        setPosts(
          posts.map((post) =>
            post.boardId == boardId
              ? {
                  ...post,
                  dislikeCnt: post.dislikeCnt + 1,
                  likeCnt: post.likeCnt - 1,
                }
              : post
          )
        );
        setUserDisLikeCnt(userDisLikeCnt + 1);
        setUserLikeCnt(userLikeCnt - 1);
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
            <MainPostDiv>
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
                      {/* {new Date(post.updatedAt)
                      .toLocaleString("ko-KR", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      })
                      .replace(/\. /g, ".")} */}
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
                {boardType === "coding" ? (
                  boardStatus === "INACTIVE" ? (
                    <MainPostContentsSolved>해결됨</MainPostContentsSolved>
                  ) : (
                    <MainPostContentsPending>미해결</MainPostContentsPending>
                  )
                ) : boardType === "study" ? (
                  boardStatus === "INACTIVE" ? (
                    <MainPostContentsSolved>모집완료</MainPostContentsSolved>
                  ) : (
                    <MainPostContentsPending>모집중</MainPostContentsPending>
                  )
                ) : (
                  boardType === "team" &&
                  (boardStatus === "INACTIVE" ? (
                    <MainPostContentsSolved>모집완료</MainPostContentsSolved>
                  ) : (
                    <MainPostContentsPending>모집중</MainPostContentsPending>
                  ))
                )}
              </MainPostInformation>
              <MainPostExtra>
                <MainPostExtraItemContainer isOpen={isExtra}>
                  {boardStatus === "ACTIVE" ? (
                    <MainPostExtraItem
                      onClick={() => handleStatus()}
                      isOpen={isExtra}
                    >
                      해결됨으로 변경
                    </MainPostExtraItem>
                  ) : (
                    boardStatus === "INACTIVE" && (
                      <MainPostExtraItem
                        onClick={() => handleStatus()}
                        isOpen={isExtra}
                      >
                        미해결로 변경
                      </MainPostExtraItem>
                    )
                  )}
                  <MainPostExtraItem isOpen={isExtra}>
                    글 수정
                  </MainPostExtraItem>
                  <MainPostExtraItem isOpen={isExtra}>
                    글 삭제
                  </MainPostExtraItem>
                </MainPostExtraItemContainer>
                <MainPostExtraButton
                  onClick={handleExtra}
                ></MainPostExtraButton>
              </MainPostExtra>
            </MainPostDiv>
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
                dangerouslySetInnerHTML={{__html: post.content}}
              />
              {(post.language || post.course || post.study || post.team) && (
                <MainPostTagsBox>
                  {post.language && post.language.length > 0
                    ? post.language.map((lang, index) => (
                        <MainPostTag>{LanguageDisplayNames[lang]}</MainPostTag>
                      ))
                    : post.course && post.course.length > 0
                    ? post.course.map((lang, index) => (
                        <MainPostTag>{CourseDisplayNames[lang]}</MainPostTag>
                      ))
                    : post.study && post.study.length > 0
                    ? post.study.map((lang, index) => (
                        <MainPostTag>{StudyDisplayNames[lang]}</MainPostTag>
                      ))
                    : post.team &&
                      post.team.length > 0 &&
                      post.team.map((lang, index) => (
                        <MainPostTag>{TeamDisplayNames[lang]}</MainPostTag>
                      ))}
                </MainPostTagsBox>
              )}
            </MainPostContentsBox>
          </MainPostMiddle>
        </MainPostContainer>
      ))}
    </>
  );
};

export default Post_MainContents;
