import {
  ClassHeader,
  ClassHeaderTitle,
  ConsoleClass,
  StyledDiv,
} from "../../../styles/codingtest/java/CodingTestJava";

const Console = () => {
  return (
    <>
      <ConsoleClass>
        <ClassHeader>
          <ClassHeaderTitle>CONSOLE</ClassHeaderTitle>
        </ClassHeader>
        <StyledDiv>👉 전달받은 값 : </StyledDiv>
      </ConsoleClass>
    </>
  );
};

export default Console;
