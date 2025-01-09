import {
  Wrap,
  Container,
  LeftContainer,
  RightContainer,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxWide,
} from "../../../styles/study/Study";
import CPlus_SubjectTitle from "./CPlus_SubjectTitle";
import { CPlus_ClassListFull_01 } from "./CPlus_ClassListFull";

const CPlus_01 = () => {
  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <a href="/study" className="menu-link">
            <TopBoxText>study</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/cplus/main" className="menu-link">
            <TopBoxText>C++</TopBoxText>
          </a>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <CPlus_SubjectTitle />
        </LeftContainer>
        <RightContainer>
          <CPlus_ClassListFull_01 />
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default CPlus_01;
