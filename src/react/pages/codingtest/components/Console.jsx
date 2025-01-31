import {
  ClassHeader,
  ClassHeaderTitle,
  ConsoleClass,
  StyledDiv,
} from "../../../styles/codingtest/ChallengeStyles";

const Console = ({ message }) => {
  console.log(message);
  return (
    <>
      <ConsoleClass>
        <ClassHeader>
          <ClassHeaderTitle>CONSOLE</ClassHeaderTitle>
        </ClassHeader>
        <StyledDiv style={{ whiteSpace: "pre-wrap" }}>{message}</StyledDiv>
      </ConsoleClass>
    </>
  );
};

export default Console;
