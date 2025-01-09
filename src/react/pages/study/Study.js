import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  Container,
  LeftContainer,
  RightContainer,
  SubjectLink,
  ClassContentsText,
  ClassContentsContainer,
} from "../../styles/study/Study";
import Java_SubjectTitle from "./java/Java_SubjectTitle";
import Python_SubjectTitle from "./python/Python_SubjectTitle";
import C_SubjectTitle from "./c/C_SubjectTitle";
import CPlus_SubjectTitle from "./cplus/CPlus_SubjectTitle";
import JavaScript_SubjectTitle from "./javascript/JavaScript_SubjectTitle";

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
        <Container>
          <SubjectLink to="/study/java">
            <Java_SubjectTitle />
          </SubjectLink>
          <SubjectLink to="/study/python">
            <Python_SubjectTitle />
          </SubjectLink>

          <SubjectLink to="/study/c">
            <C_SubjectTitle />
          </SubjectLink>

          <SubjectLink to="/study/cplus">
            <CPlus_SubjectTitle />
          </SubjectLink>

          <SubjectLink to="/study/javascript">
            <JavaScript_SubjectTitle />
          </SubjectLink>
        </Container>
      </Wrap>
    </>
  );
};

export default Study;
