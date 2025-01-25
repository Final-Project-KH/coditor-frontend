import { useLocation, useNavigate } from "react-router-dom";
import {
  UserProfileBox,
  UserProfileImg,
  UserProfileTextBox,
  UserId,
  UserPostAmount,
} from "../../../../styles/community/Post";
import { useSelector } from "react-redux";

const Post_UserProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath } = location.state || {};

  const handleUserProfile = () => {
    navigate("/community/testid01", {
      state: {
        firstpath: firstpath,
        secondpath: "user page",
      },
    });
  };
  const nickname = useSelector((state) => state.auth.nickname);

  return (
    <>
      <UserProfileBox
        style={{ cursor: "pointer" }}
        onClick={() => handleUserProfile()}
      >
        <UserProfileImg
          style={{
            backgroundImage:
              "url(https://www.infostockdaily.co.kr/news/photo/202209/179815_152745_594.jpg)",
          }}
        />
        <UserProfileTextBox>
          <UserId>{nickname}</UserId>
          <UserPostAmount>작성한 질문수 28</UserPostAmount>
        </UserProfileTextBox>
      </UserProfileBox>
    </>
  );
};

export default Post_UserProfile;
