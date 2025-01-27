import React, {useState, useEffect, useRef} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import store from "../../../redux/store/store";
import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxLink,
  Container,
  ProfileContainer,
  ProfileImage,
  HiddenInput,
  ProfileEditButton,
} from "../../styles/mypage/ProfileModify";

const ProfileModify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {firstpath, secondpath} = location.state || {};

  const profile = useSelector((state) => state.auth.profile);
  const nickname = useSelector((state) => state.auth.nickname);

  const navigateMyPage = () => {
    navigate("/mypage", {
      state: {
        firstpath: firstpath,
      },
    });
  };
  const navigateRefresh = () => {
    navigate("/profile/modify", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
  };

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxLink onClick={() => navigateMyPage()}>
            <TopBoxText>{firstpath}</TopBoxText>
          </TopBoxLink>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxLink onClick={() => navigateRefresh()}>
            <TopBoxText>{secondpath}</TopBoxText>
          </TopBoxLink>
        </TopBox>
      </TopBoxWide>
      <Container>
        <ProfileContainer>
          <ProfileImage isProfile={profile} isPreview={preview}></ProfileImage>
          <HiddenInput
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
          <ProfileEditButton
            onClick={() => fileInputRef.current.click()}
          ></ProfileEditButton>
        </ProfileContainer>
      </Container>
    </Wrap>
  );
};
export default ProfileModify;
