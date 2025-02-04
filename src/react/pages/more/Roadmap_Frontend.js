import { useNavigate } from "react-router-dom";
import {
  CenterContainer,
  LeftContainer,
  Container,
  FrontendImage_P,
  TopBox,
  TopBoxArrow,
  TopBoxLink,
  TopBoxText,
  TopBoxWide,
  Wrap,
} from "../../styles/more/Roadmap";
import LeftMenus from "./components/LeftMenus";

const Roadmap_Frontend = () => {
  const navigate = useNavigate();

  const handleRefresh = () => {
    navigate("/roadmap/frontend");
  };

  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <TopBoxLink onClick={() => handleRefresh()}>
              <TopBoxText>more</TopBoxText>
            </TopBoxLink>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <TopBoxLink onClick={() => handleRefresh()}>
              <TopBoxText>개발자 로드맵</TopBoxText>
            </TopBoxLink>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <TopBoxLink onClick={() => handleRefresh()}>
              <TopBoxText>✨ 프론트엔드</TopBoxText>
            </TopBoxLink>
          </TopBox>
        </TopBoxWide>
        <Container>
          <LeftContainer>
            <LeftMenus />
          </LeftContainer>
          <CenterContainer>
            <FrontendImage_P src="/images/more/roadmap_fe_p.png" />
          </CenterContainer>
        </Container>
      </Wrap>
    </>
  );
};

export default Roadmap_Frontend;
