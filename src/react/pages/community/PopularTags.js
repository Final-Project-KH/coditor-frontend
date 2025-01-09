import {
  PopularTagsContainer,
  PopularTagsItemsBox,
  PopularTagsItem,
  PopularTagsTitle,
} from "../../styles/community/PopularTags";

const PopularTags = () => {
  return (
    <>
      <PopularTagsContainer>
        <PopularTagsTitle>인기 태그</PopularTagsTitle>
        <PopularTagsItemsBox>
          <PopularTagsItem>Java</PopularTagsItem>
          <PopularTagsItem>Python</PopularTagsItem>
          <PopularTagsItem>C</PopularTagsItem>
          <PopularTagsItem>C++</PopularTagsItem>
          <PopularTagsItem>JavaScript</PopularTagsItem>
          <PopularTagsItem>JPA</PopularTagsItem>
          <PopularTagsItem>CSS</PopularTagsItem>
          <PopularTagsItem>HTML</PopularTagsItem>
          <PopularTagsItem>머신러닝</PopularTagsItem>
          <PopularTagsItem>SpringBoot</PopularTagsItem>
          <PopularTagsItem>React</PopularTagsItem>
        </PopularTagsItemsBox>
      </PopularTagsContainer>
    </>
  );
};

export default PopularTags;
