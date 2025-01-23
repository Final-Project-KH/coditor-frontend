import { useLocation, useNavigate } from "react-router-dom";
import {
  UserProfileBox,
  UserProfileImg,
  UserProfileTextBox,
  UserId,
  UserPostAmount,
} from "../../../../styles/community/Post";

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
          <UserId>김도현</UserId>
          <UserPostAmount>작성한 질문수 28</UserPostAmount>
        </UserProfileTextBox>
      </UserProfileBox>
    </>
  );
};

export default Post_UserProfile;
