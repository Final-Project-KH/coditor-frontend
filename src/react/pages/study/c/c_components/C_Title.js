import {
  LeftSubjectContainer,
  SubjectImgContainerC,
  SubjectTitle,
  SubjectContents,
  SubjectRateBlack,
  SubjectRateWhite,
  SubjectRateContents,
  SubjectRateContainer,
  SubjectRateBox,
} from "../../../../styles/study/Class_Title";

const C_Title = () => {
  return (
    <>
      <LeftSubjectContainer>
        <SubjectImgContainerC />
        <SubjectTitle>C Study</SubjectTitle>
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

export default C_Title;
