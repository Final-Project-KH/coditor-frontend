import React, {useState, useEffect} from "react";
import {useNavigation, useLocation, useNavigate} from "react-router-dom";
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
  LeftContainer,
  MiddleContainer,
  RightContainer,
  ProfileContainer,
} from "../../styles/mypage/MyPage";

const MyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {firstpath} = location.state || {};

  const profile = useSelector((state) => state.auth.profile);

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxLink>
            <TopBoxText>{firstpath}</TopBoxText>
          </TopBoxLink>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <ProfileContainer></ProfileContainer>
        </LeftContainer>
        <MiddleContainer></MiddleContainer>
        <RightContainer></RightContainer>
      </Container>
    </Wrap>
  );
};
export default MyPage;
