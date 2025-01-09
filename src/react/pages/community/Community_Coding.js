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
import Board_Coding from "./Board_Coding";
import { BoardList_Coding } from "./BoardList";
import PopularTags from "./PopularTags";
import TopWriters from "./TopWriters";
import WeeklyBest from "./WeeklyBest";
const Community_Coding = () => {
  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <a href="/community" className="menu-link">
              <TopBoxText>community</TopBoxText>
            </a>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <a href="/community/coding" className="menu-link">
              <TopBoxText>코딩 질문</TopBoxText>
            </a>
          </TopBox>
        </TopBoxWide>
        <Container>
          <LeftContainer>
            <BoardList_Coding />
            <TopWriters />
          </LeftContainer>
          <CenterContainer>
            <Board_Coding />
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

export default Community_Coding;
