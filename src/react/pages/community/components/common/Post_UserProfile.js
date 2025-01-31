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
  const profile = useSelector((state) => state.auth.profile);

  return (
    <>
      <UserProfileBox
        style={{ cursor: "pointer" }}
        onClick={() => handleUserProfile()}
      >
        <UserProfileImg isProfile={profile} />
        <UserProfileTextBox>
          <UserId>{nickname}</UserId>
          <UserPostAmount>작성한 질문수 28</UserPostAmount>
        </UserProfileTextBox>
      </UserProfileBox>
    </>
  );
};

export default Post_UserProfile;
