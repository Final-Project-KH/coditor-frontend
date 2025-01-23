import {
  FeedContainer,
  FeedContents,
  FeedTitle,
} from "../../../../styles/community/User";

const User_Feed = () => {
  return (
    <>
      <FeedContainer>
        <FeedTitle>소개</FeedTitle>
        <FeedContents>
          Hey everyone! 🎉
          <br />
          <br />
          I'm thrilled to share some exciting news with you all. Starting next
          week,
          <br />
          we'lll be launching a brand new series on our blog focusing on [your
          topic of interest]. 🚀
          <br />
          <br />
          Get ready for insightful articles, expert interviews,
          <br />
          and valuable tips that will [mention the benefits]. 📚💡
          <br />
          <br />
          Your feedback has always been our driving force,
          <br />
          so feel free to drop your thoughts and suggestions in the comments.
          <br />
          Let's make this journey together! 🌈✨
          <br />
          <br />
          Stay tuned for more updates! 📣
        </FeedContents>
      </FeedContainer>
    </>
  );
};

export default User_Feed;
