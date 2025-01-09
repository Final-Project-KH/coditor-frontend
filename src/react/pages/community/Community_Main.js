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
  BoardListTitle,
  BoardListActiveContents,
  BoardListInactiveContents,
  BoardListContainer,
  TopWritersContainer,
  TopWritersTitle,
  TopWritersList,
  TopWritersEach,
  TopWritersImg,
  TopWritersId,
  TopWritersPoint,
} from "../../styles/community/Community";

const Community_Main = () => {
  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <a href="/community" className="menu-link">
              <TopBoxText>community</TopBoxText>
            </a>
          </TopBox>
        </TopBoxWide>
        <Container></Container>
      </Wrap>
    </>
  );
};

export default Community_Main;
