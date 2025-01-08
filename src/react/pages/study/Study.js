import { Wrap, TopBoxWide, TopBox, TopBoxText, TopBoxArrow, Container } from "../../styles/study/Study"

const Study = () => {
  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <a href="/study" className="menu-link">
              <TopBoxText>study</TopBoxText>
            </a>
          </TopBox>
        </TopBoxWide>
        <Container></Container>
      </Wrap>
    </>
  );
};

export default Study;
