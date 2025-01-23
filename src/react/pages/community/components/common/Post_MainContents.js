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

const Post_MainContents = ({ boardType }) => {
  const { boardId } = useParams();
  // const [boardType, setBoardType] = useState("CODING");
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const { firstpath, secondpath, thirdpath } = location.state || {};

  // Get Post from Backend
  useEffect(() => {
    const readPost = async () => {
      try {
        const response = await AxiosApi.getPost(boardId, boardType);
        setPosts([response]);
      } catch (error) {
        console.error("게시글 가져오는 중 오류 발생 : ", error);
      }
    };
    readPost();
  }, [boardId, boardType]);

  return (
    <>
      {posts.map((post, index) => (
        <MainPostContainer key={index}>
          <MainPostTop>
            <MainPostTitle>{post.title}</MainPostTitle>
            <MainPostInformation>
              <MainPostDate>
                {new Date(post.createdAt)
                  .toISOString()
                  .slice(0, 16)
                  .replace("T", ".")
                  .replace(/-/g, ".")}{" "}
                작성
              </MainPostDate>
              <MiddleDot />
              <MainPostViewsBox>
                <MainPostViewsImg />
                <MainPostViewsText>1</MainPostViewsText>
              </MainPostViewsBox>
              <MiddleDot />
              {post.updatedAt && (
                <>
                  <MainPostEditedText>
                    {new Date(post.updatedAt)
                      .toISOString()
                      .slice(0, 16)
                      .replace("T", ".")
                      .replace(/-/g, ".")}{" "}
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
              <LeftEvUp />
              <LeftEvDown />
            </LeftEvBox>
            <MainPostContentsBox>
              <MainPostContentsText
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              {/* <MainPostContentsText>{post.content}</MainPostContentsText> */}
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
