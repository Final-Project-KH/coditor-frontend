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

const Roadmap_DevOps = () => {
  const navigate = useNavigate();

  const handleRefresh = () => {
    navigate("/roadmap/devops");
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
              <TopBoxText>🪢 DevOps</TopBoxText>
            </TopBoxLink>
          </TopBox>
        </TopBoxWide>
        <Container>
          <LeftContainer>
            <LeftMenus />
          </LeftContainer>
          <CenterContainer>
            <FrontendImage_P src="/images/more/roadmap_do_p.png" />
          </CenterContainer>
        </Container>
      </Wrap>
    </>
  );
};

export default Roadmap_DevOps;
