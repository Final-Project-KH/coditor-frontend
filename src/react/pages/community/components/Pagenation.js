import {
  PagenationContainer,
  PagenationEachBoxActive,
  PagenationEachBoxInactive,
  PagenationLLInactive,
  PagenationLInactive,
  PagenationNumber,
  PagenationRActive,
  PagenationRRActive,
} from "../../../styles/community/Board";

const Pagenation = () => {
  return (
    <>
      <PagenationContainer>
        <PagenationEachBoxInactive>
          <PagenationLLInactive />
        </PagenationEachBoxInactive>
        <PagenationEachBoxInactive>
          <PagenationLInactive />
        </PagenationEachBoxInactive>
        <PagenationEachBoxActive>
          <PagenationNumber>1</PagenationNumber>
        </PagenationEachBoxActive>
        <PagenationEachBoxInactive>
          <PagenationNumber>2</PagenationNumber>
        </PagenationEachBoxInactive>
        <PagenationEachBoxInactive>
          <PagenationNumber>3</PagenationNumber>
        </PagenationEachBoxInactive>
        <PagenationEachBoxInactive>
          <PagenationNumber>4</PagenationNumber>
        </PagenationEachBoxInactive>
        <PagenationEachBoxInactive>
          <PagenationNumber>5</PagenationNumber>
        </PagenationEachBoxInactive>
        <PagenationEachBoxInactive>
          <PagenationNumber>6</PagenationNumber>
        </PagenationEachBoxInactive>
        <PagenationEachBoxInactive>
          <PagenationNumber>7</PagenationNumber>
        </PagenationEachBoxInactive>

        <PagenationEachBoxInactive>
          <PagenationRActive />
        </PagenationEachBoxInactive>
        <PagenationEachBoxInactive>
          <PagenationRRActive />
        </PagenationEachBoxInactive>
      </PagenationContainer>
    </>
  );
};

export default Pagenation;
