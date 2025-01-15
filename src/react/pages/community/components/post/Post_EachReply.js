import {
  ReplyEach,
  ReplyUserProfileBox,
  ReplyUserProfileImg,
  ReplyUserProfileTextBox,
  ReplyUserId,
  ReplyUserDate,
  ReplyMiddle,
  ReplyMiddleText,
} from "../../../../styles/community/Post";

export const Post_EachReply_01 = () => {
  return (
    <>
      <ReplyEach>
        <ReplyUserProfileBox>
          <ReplyUserProfileImg
            style={{
              backgroundImage:
                "url(https://cdn.inflearn.com/public/users/thumbnails/1185935/814690f1-6520-423f-be46-3e1a86b0a81c?w=168)",
            }}
          />
          <ReplyUserProfileTextBox>
            <ReplyUserId>인프런 AI 인턴</ReplyUserId>
            <ReplyUserDate>2025.01.11.16:01 작성</ReplyUserDate>
          </ReplyUserProfileTextBox>
        </ReplyUserProfileBox>
        <ReplyMiddle>
          <ReplyMiddleText>
            안녕하세요, 인프런 AI 인턴입니다.
            <br />
            <br />
            김도현님, Spring Batch에서는 각 Job의 Step과 Tasklet이 완료될 때마다
            트랜잭션 매니저를 통해 상호작용하여 데이터베이스에 상태를 저장하고
            커밋합니다.
            <br />
            <br />
            1. Transaction Management in Steps: 각 Step은 기본적으로 트랜잭션
            경계 내에서 실행됩니다. Step 안의 각 Chunk나 Tasklet의 수행이
            완료되면, 트랜잭션이 커밋되어 데이터베이스에 반영됩니다.
            <br />
            <br />
            2. Job Repository: Spring Batch는 Job Repository를 사용하여 Job과
            Step의 메타데이터(상태 정보 포함)를 저장합니다. 이는 주로 Job
            Execution, Step Execution의 시작과 끝에서 해당 트랜잭션 내에서
            업데이트됩니다.
            <br />
            <br />
            이를 통해 실패 시에도 상태를 안전하게 유지하고 적절한 리트라이 및
            재시도를 관리할 수 있습니다. 보다 자세한 정보는 Spring Batch
            Reference Documentation을 참조하실 수 있습니다.
            <br />
            <br />
            도움이 되었기를 바랍니다! 추가 질문이 있으시면 언제든지 말씀해
            주세요.
            <br />
          </ReplyMiddleText>
        </ReplyMiddle>
      </ReplyEach>
    </>
  );
};

export const Post_EachReply_02 = () => {
  return (
    <>
      <ReplyEach>
        <ReplyUserProfileBox>
          <ReplyUserProfileImg
            style={{
              backgroundImage:
                "url(https://cdn.inflearn.com/public/users/thumbnails/1074764/bde9a342-bfb6-4a37-b1f2-249bf874a31d?w=108?w=168)",
            }}
          />
          <ReplyUserProfileTextBox>
            <ReplyUserId>geek</ReplyUserId>
            <ReplyUserDate>2025.01.10.16:56 작성</ReplyUserDate>
          </ReplyUserProfileTextBox>
        </ReplyUserProfileBox>
        <ReplyMiddle>
          <ReplyMiddleText>
            안녕하세요, sun 😃
            <br />
            정확한 원인을 말씀드리기 어렵지만,
            <br />
            보여주신 그림과 강의 진도를 보고 '추측'해서 말씀드려요!
            <br />
            <br />
            제 생각으로는..
            <br />
            '.git' 폴더의 위치가 /Desktop/project 인거 같아요.
            <br />
            그러니까, sun의 폴더 구조는 아래와 같다는 내용입니다.
            <br />
            <br />
            /Desktop
            <br />
            /Desktop/project
            <br />
            /Desktop/project/.git
            <br />
            /Desktop/project/branch01
            <br />
            /Desktop/project/branch01/rectangle
            <br />
            /Desktop/project/project_diff_commit
            <br />
            /Desktop/project/project_diff_commit/rectangle
            <br />
            <br />
            정리하자면, branch01과 project_diff_commit은 별개의 깃 프로젝트가
            아니고.
            <br />
            project라는 하나의 깃 프로젝트에 포함된 폴더로 간주된 상황인 듯
            해요.
            <br />
            그러면 위와 같은 문제가 발생할 수 있거든요 ㅎㅎ
            <br />
            <br />
            우선, ls-al 명령어로 '.git'폴더의 위치를 확인해주실 수 있나요?
            <br />
            같이 이 문제를 해결해봅시다!
          </ReplyMiddleText>
        </ReplyMiddle>
      </ReplyEach>
    </>
  );
};

export const Post_EachReply_03 = () => {
  return (
    <>
      <ReplyEach>
        <ReplyUserProfileBox>
          <ReplyUserProfileImg
            style={{
              backgroundImage:
                "url(https://cdn.inflearn.com/public/users/thumbnails/169995/f006c8e1-5a99-4065-9d64-c91abf1a92e6?w=108?w=168)",
            }}
          />
          <ReplyUserProfileTextBox>
            <ReplyUserId>일프로</ReplyUserId>
            <ReplyUserDate>2025.01.07.11:51 작성</ReplyUserDate>
          </ReplyUserProfileTextBox>
        </ReplyUserProfileBox>
        <ReplyMiddle>
          <ReplyMiddleText>
            글쎄요 node쪽에서 멈춰있다면 네트워크 연결 문제지 않을까 싶네요.
            <br />
            마스터를 reboot 해보던가.
            <br />
            아니면 systemctl stop firewall 로 master나 node들에 방화벽이
            꺼져있는지도 확인이 필요할 것 같고요.
            <br />
            <br />
            그리고 좀 찾아보니까 <br />
            이렇게 join명령을 날릴때 해당 preflight-check 검사를 skip 옵션을
            주는 방법도 있다고 하네요.
            <br />
            근데 제가 설치가이드를 한 명령어대로 하면 문제가 없어야 할텐데,
            history를 해봐서 master나 node에 혹시로도 누락된 명령이 없는지도
            확인이 필요하겠습니다.
            <br />
            저도 가이드 방식대로 여려번을 설치해봤는데 해당 문제를 경험해 보지는
            못했거든요 ㅎ
          </ReplyMiddleText>
        </ReplyMiddle>
      </ReplyEach>
    </>
  );
};

export const Post_EachReply_04 = () => {
  return (
    <>
      <ReplyEach>
        <ReplyUserProfileBox>
          <ReplyUserProfileImg
            style={{
              backgroundImage:
                "url(https://cdn.inflearn.com/public/users/thumbnails/258264/8256f19a-61c0-4b5d-848a-ef5dba7a80fb?w=108?w=168)",
            }}
          />
          <ReplyUserProfileTextBox>
            <ReplyUserId>코딩일레븐</ReplyUserId>
            <ReplyUserDate>2025.01.05.11:23 작성</ReplyUserDate>
          </ReplyUserProfileTextBox>
        </ReplyUserProfileBox>
        <ReplyMiddle>
          <ReplyMiddleText>
            안녕하세요. <br />
            topnav 에 z-index 를 주셨는데요. position : relative; 도 같이
            줘보세요. <br />
            그래도 안 되시면 바로 답글 주세요~
            <br />
            position:fixed; 하시고 top:0; 해보시면 될거에요
          </ReplyMiddleText>
        </ReplyMiddle>
      </ReplyEach>
    </>
  );
};

export const Post_EachReply_05 = () => {
  return (
    <>
      <ReplyEach>
        <ReplyUserProfileBox>
          <ReplyUserProfileImg
            style={{
              backgroundImage:
                "url(https://cdn.inflearn.com/public/users/thumbnails/1020514/6a2f4b5b-d0e1-4acb-adc1-dfa4a179afb8?w=108?w=168)",
            }}
          />
          <ReplyUserProfileTextBox>
            <ReplyUserId>회로설계 멘토 삼코치</ReplyUserId>
            <ReplyUserDate>2025.01.03.12:03 작성</ReplyUserDate>
          </ReplyUserProfileTextBox>
        </ReplyUserProfileBox>
        <ReplyMiddle>
          <ReplyMiddleText>
            네 안녕하세요, 답변 남겨드립니다.
            <br />
            <br />
            현재 Break가 활성화되어있는것으로 보아서 아직 코드가 실행중이기
            때문에 run이 활성화되지 않는듯 합니다.
            <br />
            Break를 눌러보시면 run쪽이 활성화될겁니다.
            <br />
            <br />
            테스트벤치에 특정 클럭 이후나 시간 등 끝나는 조건이 없기 때문에 무한
            시간 도는것일 수 있어서 벤치에서 이 부분 확인해서 추가해보시기
            바랍니다!
          </ReplyMiddleText>
        </ReplyMiddle>
      </ReplyEach>
    </>
  );
};

const Post_EachReply = () => {
  return (
    <>
      <Post_EachReply_01 />
      <Post_EachReply_02 />
      <Post_EachReply_03 />
      <Post_EachReply_04 />
      <Post_EachReply_05 />
    </>
  );
};

export default Post_EachReply;
