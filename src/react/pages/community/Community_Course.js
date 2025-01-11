import {
  TopBoxArrow,
  TopBoxText,
  TopBox,
  TopBoxWide,
  Container,
  Wrap,
  LeftContainer,
  CenterContainer,
  RightContainer,
  PathLink,
} from "../../styles/community/Community";
import Board_Course from "./components/Board_Course";
import BoardList from "./components/Side_BoardList";
import PopularTags from "./components/Side_PopularTags";
import TopWriters from "./components/Side_TopWriters";
import WeeklyBest from "./components/Side_WeeklyBest";
import { useLocation, useNavigate } from "react-router-dom";
const Community_Course = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath } = location.state || {};

  const handleCommunity = () => {
    navigate("/community", {
      state: {
        firstpath: firstpath,
      },
    });
  };
  const handleRefresh = () => {
    navigate("/community/course", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
  };
  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <PathLink onClick={() => handleCommunity()}>
              <TopBoxText>{firstpath}</TopBoxText>
            </PathLink>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <PathLink onClick={() => handleRefresh()}>
              <TopBoxText>{secondpath}</TopBoxText>
            </PathLink>
          </TopBox>
        </TopBoxWide>
        <Container>
          <LeftContainer>
            <BoardList firstpath={firstpath} />
            <TopWriters />
          </LeftContainer>
          <CenterContainer>
            <Board_Course />
          </CenterContainer>
          <RightContainer>
            <PopularTags />
            <WeeklyBest />
          </RightContainer>
        </Container>
      </Wrap>
    </>
  );
};

export default Community_Course;
