import {
  LeftSubjectContainer,
  SubjectImgContainerCPlus,
  SubjectTitle,
  SubjectContents,
  SubjectRateBlack,
  SubjectRateWhite,
  SubjectRateContents,
  SubjectRateContainer,
  SubjectRateBox,
} from "../../../styles/study/Study";

const CPlus_SubjectTitle = () => {
  return (
    <>
      <LeftSubjectContainer>
        <SubjectImgContainerCPlus />
        <SubjectTitle>C++ Study</SubjectTitle>
        <SubjectContents>학습전</SubjectContents>
        <SubjectRateContainer>
          <SubjectRateBox>
            <SubjectRateWhite />
          </SubjectRateBox>
          <SubjectRateContents>0%</SubjectRateContents>
        </SubjectRateContainer>
      </LeftSubjectContainer>
    </>
  );
};

export default CPlus_SubjectTitle;
