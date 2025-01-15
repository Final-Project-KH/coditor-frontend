import {
  MainPostContainer,
  MainPostTop,
  MainPostTitle,
  MainPostInformation,
  MainPostDate,
  MiddleDot,
  MainPostViewsBox,
  MainPostViewsImg,
  MainPostViewsText,
  MainPostEditedText,
  MainPostThumbsUpBox,
  MainPostThumbsUpImg,
  MainPostThumbsUpText,
  MainPostThumbsDownBox,
  MainPostThumbsDownImg,
  MainPostThumbsDownText,
  MainPostMiddle,
  LeftEvBox,
  LeftEvUp,
  LeftEvDown,
  MainPostContentsBox,
  MainPostContentsText,
  MainPostTagsBox,
  MainPostTag,
} from "../../../../styles/community/Post";

export const Post_MainContents_01 = () => {
  return (
    <>
      <MainPostContainer>
        <MainPostTop>
          <MainPostTitle>
            안녕하세요 Spring Batch의 트랜잭션 관련 질문이 있습니다.
          </MainPostTitle>
          <MainPostInformation>
            <MainPostDate>작성 2025.01.10. 15:59</MainPostDate>
            <MiddleDot />
            <MainPostViewsBox>
              <MainPostViewsImg />
              <MainPostViewsText>1</MainPostViewsText>
            </MainPostViewsBox>
            <MiddleDot />
            {/* <MainPostEditedText>수정됨</MainPostEditedText>
            <MiddleDot /> */}
            <MainPostThumbsUpBox>
              <MainPostThumbsUpImg />
              <MainPostThumbsUpText>0</MainPostThumbsUpText>
            </MainPostThumbsUpBox>
            <MiddleDot />
            <MainPostThumbsDownBox>
              <MainPostThumbsDownImg />
              <MainPostThumbsDownText>0</MainPostThumbsDownText>
            </MainPostThumbsDownBox>
          </MainPostInformation>
        </MainPostTop>
        <MainPostMiddle>
          <LeftEvBox>
            <LeftEvUp />
            <LeftEvDown />
          </LeftEvBox>
          <MainPostContentsBox>
            <MainPostContentsText>
              Spring Batch에서 트랜잭션을 관리하기 위해
              `PlatformTransactionManger`와 같은 트랜잭션 매니저를 사용하는
              것으로 알고 있습니다.
              <br />
              <br />
              각 Job의 Step, Tasklet이 완료 될 때마다 DB에 상태를 업데이트하고
              Commit을 하는 것인지
              <br />
              <br />
              혹은 다른 방식으로 DB에 현재 처리중인 JOB의 상태를 기록하는지 내부
              동작에 대한 흐름이 궁금합니다.
            </MainPostContentsText>
            {/* <MainPostTagsBox>
            <MainPostTag># Java</MainPostTag>
            <MainPostTag># ETC</MainPostTag>
            </MainPostTagsBox> */}
          </MainPostContentsBox>
        </MainPostMiddle>
      </MainPostContainer>
    </>
  );
};

export const Post_MainContents_02 = () => {
  return (
    <>
      <MainPostContainer>
        <MainPostTop>
          <MainPostTitle>다른 폴더의 커밋내역도 함께 뜹니다.</MainPostTitle>
          <MainPostInformation>
            <MainPostDate>작성 2025.01.10. 15:22</MainPostDate>
            <MiddleDot />
            <MainPostViewsBox>
              <MainPostViewsImg />
              <MainPostViewsText>2</MainPostViewsText>
            </MainPostViewsBox>
            <MiddleDot />
            <MainPostEditedText>수정됨</MainPostEditedText>
            <MiddleDot />
            <MainPostThumbsUpBox>
              <MainPostThumbsUpImg />
              <MainPostThumbsUpText>0</MainPostThumbsUpText>
            </MainPostThumbsUpBox>
            <MiddleDot />
            <MainPostThumbsDownBox>
              <MainPostThumbsDownImg />
              <MainPostThumbsDownText>0</MainPostThumbsDownText>
            </MainPostThumbsDownBox>
          </MainPostInformation>
        </MainPostTop>
        <MainPostMiddle>
          <LeftEvBox>
            <LeftEvUp />
            <LeftEvDown />
          </LeftEvBox>
          <MainPostContentsBox>
            <MainPostContentsText>
              안녕하세요! 강의 보면서 공부하고 있습니다!
              <br />
              예제 보여주시면 저도 폴더를 만들어서 같은 예제 상황을 만들어서
              똑같이 따라고 하고 있는대요!
              <br />
              git diff 나 git log 명령어 등을 사용했을 때
              <br />
              해당 폴더가 아닌 다른 폴더 커밋과 차이점이 같이 나와서요~
              <br />
              <br />
              위 캡쳐 이미지를 보시면 제가 브랜치 연습을 위해 만든
              branch01폴더에서 rectangle 파일을 만들고 git diff 명령어를
              사용했을 때, diff를 연습할 때 만든 diff_commit 폴더의 rectangle
              상태를 보여주고 있습니다.
              <br />
              <br />
              위 캡쳐는 git log했을 때인데요! 오늘이 10일인데 전날 연습했던 다른
              폴더의 커밋 내역들까지 보입니다.
              <br />
              <br />
              git bash는 해당 폴더에서 오른쪽 마우스로 git bash here를 눌러 새
              창을 열어서 사용했습니다.
              <br />
              이번 영상 7분 18초 쯔음보면 커밋 2개가 조회 된다고 하는데
              <br />전 어제 것 까지 13개 커밋 내역이 나오는 상황입니다. 어떤
              점이 문제 일까요?
              <br />
              <br />
              답변 부탁드립니다. 감사합니다.
            </MainPostContentsText>
            <MainPostTagsBox>
              <MainPostTag># git</MainPostTag>
              <MainPostTag># github</MainPostTag>
            </MainPostTagsBox>
          </MainPostContentsBox>
        </MainPostMiddle>
      </MainPostContainer>
    </>
  );
};

export const Post_MainContents_03 = () => {
  return (
    <>
      <MainPostContainer>
        <MainPostTop>
          <MainPostTitle>
            [preflight] Running pre-flight checks 메세지에서 멈추어 있습니다.
          </MainPostTitle>
          <MainPostInformation>
            <MainPostDate>작성 2025.01.07. 13:00</MainPostDate>
            <MiddleDot />
            <MainPostViewsBox>
              <MainPostViewsImg />
              <MainPostViewsText>5.1K</MainPostViewsText>
            </MainPostViewsBox>
            <MiddleDot />
            <MainPostEditedText>수정됨</MainPostEditedText>
            <MiddleDot />
            <MainPostThumbsUpBox>
              <MainPostThumbsUpImg />
              <MainPostThumbsUpText>1</MainPostThumbsUpText>
            </MainPostThumbsUpBox>
            <MiddleDot />
            <MainPostThumbsDownBox>
              <MainPostThumbsDownImg />
              <MainPostThumbsDownText>0</MainPostThumbsDownText>
            </MainPostThumbsDownBox>
          </MainPostInformation>
        </MainPostTop>
        <MainPostMiddle>
          <LeftEvBox>
            <LeftEvUp />
            <LeftEvDown />
          </LeftEvBox>
          <MainPostContentsBox>
            <MainPostContentsText>
              데탑 3대로 <br />
              master
              <br />
              node 1<br />
              node 2<br />
              구성하려고 합니다. <br />
              강좌에 구성된대로 같은 구조인데.
              <br />
              host + master
              <br />
              node 1<br />
              node 2<br />
              이렇게 구성해 주었습니다.
              <br />
              node 1 과 node 2 가 kubeadm join 명령으로 master와 연동 해줄때
              [preflight] Running pre-flight checks 라는 메세지가 나오고 멈추어
              있습니다. 원인이 무었인지 알수 있을까요?
            </MainPostContentsText>
            <MainPostTagsBox>
              <MainPostTag># kubernetes</MainPostTag>
              <MainPostTag># docker</MainPostTag>
            </MainPostTagsBox>
          </MainPostContentsBox>
        </MainPostMiddle>
      </MainPostContainer>
    </>
  );
};

export const Post_MainContents_04 = () => {
  return (
    <>
      <MainPostContainer>
        <MainPostTop>
          <MainPostTitle>네비게이션 바를 보이게 하고싶은데요</MainPostTitle>
          <MainPostInformation>
            <MainPostDate>작성 2025.01.04. 11:23</MainPostDate>
            <MiddleDot />
            <MainPostViewsBox>
              <MainPostViewsImg />
              <MainPostViewsText>347</MainPostViewsText>
            </MainPostViewsBox>
            <MiddleDot />
            {/* <MainPostEditedText>수정됨</MainPostEditedText>
            <MiddleDot /> */}
            <MainPostThumbsUpBox>
              <MainPostThumbsUpImg />
              <MainPostThumbsUpText>0</MainPostThumbsUpText>
            </MainPostThumbsUpBox>
            <MiddleDot />
            <MainPostThumbsDownBox>
              <MainPostThumbsDownImg />
              <MainPostThumbsDownText>0</MainPostThumbsDownText>
            </MainPostThumbsDownBox>
          </MainPostInformation>
        </MainPostTop>
        <MainPostMiddle>
          <LeftEvBox>
            <LeftEvUp />
            <LeftEvDown />
          </LeftEvBox>
          <MainPostContentsBox>
            <MainPostContentsText>
              제가 노란색으로 칠한 부분에 네비게이션 바를 보이게 하고 싶습니다.
              코드를 짯는데 보니까 저 커버 이미지에 가려서 보이지 않아요 여기서
              어떤 부분을 고쳐야 이미지 아래에 고정돼서 수평네비바가 보일 수
              있을까요..??ㅜㅜ
            </MainPostContentsText>
            <MainPostTagsBox>
              <MainPostTag># javascript</MainPostTag>
              <MainPostTag># interactive-web</MainPostTag>
            </MainPostTagsBox>
          </MainPostContentsBox>
        </MainPostMiddle>
      </MainPostContainer>
    </>
  );
};

export const Post_MainContents_05 = () => {
  return (
    <>
      <MainPostContainer>
        <MainPostTop>
          <MainPostTitle>localhost에서 연결을 거부했습니다</MainPostTitle>
          <MainPostInformation>
            <MainPostDate>작성 2024.12.31. 17:09</MainPostDate>
            <MiddleDot />
            <MainPostViewsBox>
              <MainPostViewsImg />
              <MainPostViewsText>37.3K</MainPostViewsText>
            </MainPostViewsBox>
            <MiddleDot />
            <MainPostEditedText>수정됨</MainPostEditedText>
            <MiddleDot />
            <MainPostThumbsUpBox>
              <MainPostThumbsUpImg />
              <MainPostThumbsUpText>0</MainPostThumbsUpText>
            </MainPostThumbsUpBox>
            <MiddleDot />
            <MainPostThumbsDownBox>
              <MainPostThumbsDownImg />
              <MainPostThumbsDownText>0</MainPostThumbsDownText>
            </MainPostThumbsDownBox>
          </MainPostInformation>
        </MainPostTop>
        <MainPostMiddle>
          <LeftEvBox>
            <LeftEvUp />
            <LeftEvDown />
          </LeftEvBox>
          <MainPostContentsBox>
            <MainPostContentsText>
              제가 노란색으로 칠한 부분에 네비게이션 바를 보이게 하고 싶습니다.
              코드를 짯는데 보니까 저 커버 이미지에 가려서 보이지 않아요 여기서
              어떤 부분을 고쳐야 이미지 아래에 고정돼서 수평네비바가 보일 수
              있을까요..??ㅜㅜ
            </MainPostContentsText>
            <MainPostTagsBox>
              <MainPostTag># # 웹앱</MainPostTag>
              <MainPostTag># vscode</MainPostTag>
              <MainPostTag># express</MainPostTag>
              <MainPostTag># node.js</MainPostTag>
            </MainPostTagsBox>
          </MainPostContentsBox>
        </MainPostMiddle>
      </MainPostContainer>
    </>
  );
};

const Post_MainContents = () => {
  return (
    <>
      <Post_MainContents_01 />
      <Post_MainContents_02 />
      <Post_MainContents_03 />
      <Post_MainContents_04 />
      <Post_MainContents_05 />
    </>
  );
};

export default Post_MainContents;
