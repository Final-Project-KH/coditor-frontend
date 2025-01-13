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
} from "../../../styles/study/Class_Title";

const CPlus_Title = () => {
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

export default CPlus_Title;
