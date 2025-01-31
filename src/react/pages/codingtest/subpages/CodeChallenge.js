import {
  TopBox,
  TopBoxWide,
  TopBoxText,
  TopBoxArrow,
  Wrap,
} from "../../../styles/codingtest/ChallengeStyles";
import ScrollToTopButton from "../../ScrollToTopButton";
import CodeChallengeViewer from "../components/CodeChallengeViewer";

const CodeChallenge = () => {
  return (
    <>
      <CodeChallengeViewer language="java" />
    </>
  );
};

export default CodeChallenge;
