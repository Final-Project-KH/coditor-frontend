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
} from "../../styles/community/Community";
import Board_Team from "./components/Board_Study";
import { BoardList_Team } from "./components/Side_BoardList";
import PopularTags from "./components/Side_PopularTags";
import TopWriters from "./components/Side_TopWriters";
import WeeklyBest from "./components/Side_WeeklyBest";
const Community_Team = () => {
  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <a href="/community" className="menu-link">
              <TopBoxText>community</TopBoxText>
            </a>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <a href="/community/team" className="menu-link">
              <TopBoxText>팀 프로젝트</TopBoxText>
            </a>
          </TopBox>
        </TopBoxWide>
        <Container>
          <LeftContainer>
            <BoardList_Team />
            <TopWriters />
          </LeftContainer>
          <CenterContainer>
            <Board_Team />
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

export default Community_Team;
