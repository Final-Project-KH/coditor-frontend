import { useLocation, useNavigate } from "react-router-dom";
import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxLink,
  Container,
  LeftContainer,
  CenterContainer,
  CenterAccountRightContainer,
  RightContainer,
  CenterAccountLeftContainer,
  CenterAccountContainer,
} from "../../styles/mypage/MyPage";
import LeftTopProfile from "./Components/LeftTopProfile";
import LeftMenus from "./Components/LeftMenus";
import AccountManager_Account from "./Components/AccountManager_Account";
import AccountManager_Alert from "./Components/AccountManager_Alert";
import AccountManager_SNS from "./Components/AccountManager_SNS";
import AccountManager_ProfileIMG from "./Components/AccountManager_ProfileIMG";

const MyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath } = location.state || {};

  const handleRefresh = () => {
    navigate("/mypage/accountmanager", {
      state: {
        firstpath: firstpath,
      },
    });
  };

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxLink onClick={() => handleRefresh()}>
            <TopBoxText>{firstpath}</TopBoxText>
          </TopBoxLink>
          {secondpath && (
            <>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxLink onClick={() => handleRefresh()}>
                <TopBoxText>{secondpath}</TopBoxText>
              </TopBoxLink>
            </>
          )}
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <LeftTopProfile />
          <LeftMenus />
        </LeftContainer>
        <CenterContainer>
          <CenterAccountContainer>
          <CenterAccountLeftContainer>
          <AccountManager_Account /></CenterAccountLeftContainer>
          <CenterAccountRightContainer>
          <AccountManager_ProfileIMG />
        </CenterAccountRightContainer></CenterAccountContainer>
          <AccountManager_Alert />
          <AccountManager_SNS />
        </CenterContainer>

      </Container>
    </Wrap>
  );
};
export default MyPage;
