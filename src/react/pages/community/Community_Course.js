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
import Board_Course from "./components/Board_Course";
import { BoardList_Course } from "./components/Side_BoardList";
import PopularTags from "./components/Side_PopularTags";
import TopWriters from "./components/Side_TopWriters";
import WeeklyBest from "./components/Side_WeeklyBest";
const Community_Course = () => {
  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <a href="/community" className="menu-link">
              <TopBoxText>community</TopBoxText>
            </a>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <a href="/community/course" className="menu-link">
              <TopBoxText>진로 질문</TopBoxText>
            </a>
          </TopBox>
        </TopBoxWide>
        <Container>
          <LeftContainer>
            <BoardList_Course />
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
