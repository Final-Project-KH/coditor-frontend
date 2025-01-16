import { useLocation, useNavigate } from "react-router-dom";
import {
  PostEach,
  PostTop,
  PostTopUserImg,
  PostTopUser,
  PostTopUserId,
  PostTopDays,
  PostMiddle,
  PostMiddleContentsUpper,
  PostMiddleContentsPending,
  PostMiddleContentsTitle,
  PostMiddleContentsText,
  PostBottom,
  PostBottomTagsBox,
  PostBottomTag,
  PostBottomDataBox,
  PostBottomRepliesBox,
  PostBottomRepliesImg,
  PostBottomRepliesText,
  PostBottomDot,
  PostBottomViewsBox,
  PostBottomViewsImg,
  PostBottomViewsText,
  PostMiddleContentsSolved,
} from "../../../../styles/community/Board";

export const Board_Coding_EachPost_01 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath, thirdpath } = location.state || {};

  const handlePost = () => {
    navigate("/community/coding/post1", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: "게시글",
      },
    });
  };

  return (
    <>
      <PostEach style={{ cursor: "pointer" }} onClick={() => handlePost()}>
        <PostTop>
          <PostTopUser>
            <PostTopUserImg
              style={{
                backgroundColor: "#313131",
                backgroundImage:
                  "url(https://www.infostockdaily.co.kr/news/photo/202209/179815_152745_594.jpg)",
              }}
            />
            <PostTopUserId>By: 김도현</PostTopUserId>
          </PostTopUser>
          <PostTopDays>2025.01.10. 15:59 작성</PostTopDays>
        </PostTop>
        <PostMiddle>
          <PostMiddleContentsUpper>
            <PostMiddleContentsPending>미해결</PostMiddleContentsPending>
            <PostMiddleContentsTitle>
              안녕하세요 Spring Batch의 트랜잭션 관련 질문이 있습니다.
            </PostMiddleContentsTitle>
          </PostMiddleContentsUpper>
          <PostMiddleContentsText>
            Spring Batch에서 트랜잭션을 관리하기 위해
            `PlatformTransactionManger`와 같은 트랜잭션 매니저를 사용하는 것으로
            알고 있습니다. 각 Job의 Step, Tasklet이 완료 될 때마다 DB에 상태를
            업데이트하고 Commit을 하는 것인지 혹은 다른 방식으로 DB에 현재
            처리중인 JO ..
          </PostMiddleContentsText>
        </PostMiddle>
        <PostBottom>
          <PostBottomTagsBox></PostBottomTagsBox>
          <PostBottomDataBox>
            <PostBottomRepliesBox>
              <PostBottomRepliesImg />
              <PostBottomRepliesText>0 replies</PostBottomRepliesText>
            </PostBottomRepliesBox>
            <PostBottomDot />
            <PostBottomViewsBox>
              <PostBottomViewsImg />
              <PostBottomViewsText>1 views</PostBottomViewsText>
            </PostBottomViewsBox>
          </PostBottomDataBox>
        </PostBottom>
      </PostEach>
    </>
  );
};

export const Board_Coding_EachPost_02 = () => {
  return (
    <>
      <PostEach>
        <PostTop>
          <PostTopUser>
            <PostTopUserImg
              style={{
                backgroundColor: "#313131",
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpzDh6eO5JkPK2yrNUiqvhWI2j7ODZfs1tA&s)",
              }}
            />
            <PostTopUserId>By: sun</PostTopUserId>
          </PostTopUser>
          <PostTopDays>2025.01.10. 15:22 작성</PostTopDays>
        </PostTop>
        <PostMiddle>
          <PostMiddleContentsUpper>
            <PostMiddleContentsPending>미해결</PostMiddleContentsPending>
            <PostMiddleContentsTitle>
              다른 폴더의 커밋내역도 함께 뜹니다.
            </PostMiddleContentsTitle>
          </PostMiddleContentsUpper>
          <PostMiddleContentsText>
            안녕하세요! 강의 보면서 공부하고 있습니다! 예제 보여주시면 저도
            폴더를 만들어서 같은 예제 상황을 만들어서 똑같이 따라고 하고
            있는대요! git diff 나 git log 명령어 등을 사용했을 때 해당 폴더가
            아닌 다른 폴더 커밋과 차이점이 같이 나와서요~ 위 캡쳐 이미지를
            보시면 제가 브랜 ..
          </PostMiddleContentsText>
        </PostMiddle>
        <PostBottom>
          <PostBottomTagsBox>
            <PostBottomTag># git</PostBottomTag>
            <PostBottomTag># github</PostBottomTag>
          </PostBottomTagsBox>
          <PostBottomDataBox>
            <PostBottomRepliesBox>
              <PostBottomRepliesImg />
              <PostBottomRepliesText>1 replies</PostBottomRepliesText>
            </PostBottomRepliesBox>
            <PostBottomDot />
            <PostBottomViewsBox>
              <PostBottomViewsImg />
              <PostBottomViewsText>2 views</PostBottomViewsText>
            </PostBottomViewsBox>
          </PostBottomDataBox>
        </PostBottom>
      </PostEach>
    </>
  );
};

export const Board_Coding_EachPost_03 = () => {
  return (
    <>
      <PostEach>
        <PostTop>
          <PostTopUser>
            <PostTopUserImg
              style={{
                backgroundColor: "#313131",
                backgroundImage:
                  "url(https://i.ytimg.com/vi/0BdlwVBmmhM/maxresdefault.jpg)",
              }}
            />
            <PostTopUserId>By: castinglife</PostTopUserId>
          </PostTopUser>
          <PostTopDays>2025.01.07. 13:00 작성</PostTopDays>
        </PostTop>
        <PostMiddle>
          <PostMiddleContentsUpper>
            <PostMiddleContentsSolved>해결됨</PostMiddleContentsSolved>
            <PostMiddleContentsTitle>
              [preflight] Running pre-flight checks 메세지에서 멈추어 있습니다.
            </PostMiddleContentsTitle>
          </PostMiddleContentsUpper>
          <PostMiddleContentsText>
            데탑 3대로 master node 1 node 2 구성하려고 합니다. 강좌에 구성된대로
            같은 구조인데. host + master node 1 node 2 이렇게 구성해 주었습니다.
            node 1 과 node 2 가 kubeadm join 명령으로 master와 연동 해줄때
            [preflight] Running pre-flight checks 라는 메세지가 ..
          </PostMiddleContentsText>
        </PostMiddle>
        <PostBottom>
          <PostBottomTagsBox>
            <PostBottomTag># kubernetes</PostBottomTag>
            <PostBottomTag># docker</PostBottomTag>
          </PostBottomTagsBox>
          <PostBottomDataBox>
            <PostBottomRepliesBox>
              <PostBottomRepliesImg />
              <PostBottomRepliesText>28 replies</PostBottomRepliesText>
            </PostBottomRepliesBox>
            <PostBottomDot />
            <PostBottomViewsBox>
              <PostBottomViewsImg />
              <PostBottomViewsText>5.1K views</PostBottomViewsText>
            </PostBottomViewsBox>
          </PostBottomDataBox>
        </PostBottom>
      </PostEach>
    </>
  );
};

export const Board_Coding_EachPost_04 = () => {
  return (
    <>
      {" "}
      <PostEach>
        <PostTop>
          <PostTopUser>
            <PostTopUserImg
              style={{
                backgroundColor: "#313131",
                backgroundImage:
                  "url(https://i.namu.wiki/i/WfGF4NQ4Xawfk89Zs87ExVY0qAFx0Rgxd094SRt78w0RcpLzPn4sQDsssdeXl8XYfMo7giCBo_kXyYGllq_UFA.webp)",
              }}
            />
            <PostTopUserId>By: 비긴이계인</PostTopUserId>
          </PostTopUser>
          <PostTopDays>2025.01.04. 11:23 작성</PostTopDays>
        </PostTop>
        <PostMiddle>
          <PostMiddleContentsUpper>
            <PostMiddleContentsSolved>해결됨</PostMiddleContentsSolved>
            <PostMiddleContentsTitle>
              네비게이션 바를 보이게 하고싶은데요
            </PostMiddleContentsTitle>
          </PostMiddleContentsUpper>
          <PostMiddleContentsText>
            제가 노란색으로 칠한 부분에 네비게이션 바를 보이게 하고 싶습니다.
            코드를 짯는데 보니까 저 커버 이미지에 가려서 보이지 않아요 여기서
            어떤 부분을 고쳐야 이미지 아래에 고정돼서 수평네비바가 보일 수
            있을까요..??ㅜㅜ
          </PostMiddleContentsText>
        </PostMiddle>
        <PostBottom>
          <PostBottomTagsBox>
            <PostBottomTag># javascript</PostBottomTag>
            <PostBottomTag># interactive-web</PostBottomTag>
          </PostBottomTagsBox>
          <PostBottomDataBox>
            <PostBottomRepliesBox>
              <PostBottomRepliesImg />
              <PostBottomRepliesText>11 replies</PostBottomRepliesText>
            </PostBottomRepliesBox>
            <PostBottomDot />
            <PostBottomViewsBox>
              <PostBottomViewsImg />
              <PostBottomViewsText>347 views</PostBottomViewsText>
            </PostBottomViewsBox>
          </PostBottomDataBox>
        </PostBottom>
      </PostEach>
    </>
  );
};

export const Board_Coding_EachPost_05 = () => {
  return (
    <>
      {" "}
      <PostEach>
        <PostTop>
          <PostTopUser>
            <PostTopUserImg
              style={{
                backgroundColor: "#313131",
                backgroundImage:
                  "url(https://www.shinailbo.co.kr/news/photo/202212/1641161_809941_349.jpg)",
              }}
            />
            <PostTopUserId>By: Hyon Soo Jeong</PostTopUserId>
          </PostTopUser>
          <PostTopDays>2024.12.31. 17:09 작성</PostTopDays>
        </PostTop>
        <PostMiddle>
          <PostMiddleContentsUpper>
            <PostMiddleContentsSolved>해결됨</PostMiddleContentsSolved>
            <PostMiddleContentsTitle>
              localhost에서 연결을 거부했습니다
            </PostMiddleContentsTitle>
          </PostMiddleContentsUpper>
          <PostMiddleContentsText>
            안녕하세요! 맥북 프로를 사용하고 있는 사용자입니다. 가르쳐주신대로
            프로그램에 입력을 하고 있는데 localhost:3000에 들어가니 어느
            순간부터 연결을 거부했습니다, 라고 뜨면서 페이지가 뜨지 않습니다.
            마커를 표시시작하는 수업 부분에서 마커를 만들고 localhost:3000을
            입력 ..
          </PostMiddleContentsText>
        </PostMiddle>
        <PostBottom>
          <PostBottomTagsBox>
            <PostBottomTag># 웹앱</PostBottomTag>
            <PostBottomTag># vscode</PostBottomTag>
            <PostBottomTag># express</PostBottomTag>
            <PostBottomTag># node.js</PostBottomTag>
          </PostBottomTagsBox>
          <PostBottomDataBox>
            <PostBottomRepliesBox>
              <PostBottomRepliesImg />
              <PostBottomRepliesText>11 replies</PostBottomRepliesText>
            </PostBottomRepliesBox>
            <PostBottomDot />
            <PostBottomViewsBox>
              <PostBottomViewsImg />
              <PostBottomViewsText>37.3K views</PostBottomViewsText>
            </PostBottomViewsBox>
          </PostBottomDataBox>
        </PostBottom>
      </PostEach>
    </>
  );
};

export const Board_Coding_EachPost_06 = () => {
  return (
    <>
      {" "}
      <PostEach>
        <PostTop>
          <PostTopUser>
            <PostTopUserImg
              style={{
                backgroundColor: "#313131",
                backgroundImage:
                  "url(https://cdn.sisajournal.com/news/photo/202205/238010_148974_447.jpg)",
              }}
            />
            <PostTopUserId>By: 선종원</PostTopUserId>
          </PostTopUser>
          <PostTopDays>2024.12.31. 12:42 작성</PostTopDays>
        </PostTop>
        <PostMiddle>
          <PostMiddleContentsUpper>
            <PostMiddleContentsPending>미해결</PostMiddleContentsPending>
            <PostMiddleContentsTitle>proxy 객체</PostMiddleContentsTitle>
          </PostMiddleContentsUpper>
          <PostMiddleContentsText>
            댓글작성 기능을 구현중에 있는데요 saga 백엔드까지는 요청응답은 잘
            작동하고 reducer에서 draft.userPost.find로 postid찾고 거기에 댓글
            더하려고 하는데 잘 안되서 console로 찍어보니까 draft.userPost,
            draft.userPost{`[action.data.postId - 1]`}, find 메소드써도 아래처럼
            ..
          </PostMiddleContentsText>
        </PostMiddle>
        <PostBottom>
          <PostBottomTagsBox>
            <PostBottomTag># express</PostBottomTag>
            <PostBottomTag># React</PostBottomTag>
            <PostBottomTag># redux</PostBottomTag>
            <PostBottomTag># node.js</PostBottomTag>
            <PostBottomTag># next.js</PostBottomTag>
          </PostBottomTagsBox>
          <PostBottomDataBox>
            <PostBottomRepliesBox>
              <PostBottomRepliesImg />
              <PostBottomRepliesText>22 replies</PostBottomRepliesText>
            </PostBottomRepliesBox>
            <PostBottomDot />
            <PostBottomViewsBox>
              <PostBottomViewsImg />
              <PostBottomViewsText>366 views</PostBottomViewsText>
            </PostBottomViewsBox>
          </PostBottomDataBox>
        </PostBottom>
      </PostEach>
    </>
  );
};

export const Board_Coding_EachPost_07 = () => {
  return (
    <>
      {" "}
      <PostEach>
        <PostTop>
          <PostTopUser>
            <PostTopUserImg
              style={{
                backgroundColor: "#313131",
                backgroundImage:
                  "url(https://dimg.donga.com/wps/NEWS/IMAGE/2023/12/10/122564472.2.jpg)",
              }}
            />
            <PostTopUserId>By: 정문채</PostTopUserId>
          </PostTopUser>
          <PostTopDays>2024.12.29. 06:21 작성</PostTopDays>
        </PostTop>
        <PostMiddle>
          <PostMiddleContentsUpper>
            <PostMiddleContentsPending>미해결</PostMiddleContentsPending>
            <PostMiddleContentsTitle>
              안녕하세요. useEffect 관련 질문 드립니다!
            </PostMiddleContentsTitle>
          </PostMiddleContentsUpper>
          <PostMiddleContentsText>
            안녕하세요 useEffect hooks 관련해서 질문드립니다. useEffect를 하지
            않았을경우 당연히 렌더는 1번되지만 useEffect로 디스패치를 하면
            렌더링이 3번됩니다. 이게 정상인지 아닌지 잘 모르겠어서
            질문드립니다..
          </PostMiddleContentsText>
        </PostMiddle>
        <PostBottom>
          <PostBottomTagsBox>
            <PostBottomTag># React</PostBottomTag>
            <PostBottomTag># express</PostBottomTag>
            <PostBottomTag># redux</PostBottomTag>
            <PostBottomTag># nodejs</PostBottomTag>
            <PostBottomTag># next.js</PostBottomTag>
          </PostBottomTagsBox>
          <PostBottomDataBox>
            <PostBottomRepliesBox>
              <PostBottomRepliesImg />
              <PostBottomRepliesText>18 replies</PostBottomRepliesText>
            </PostBottomRepliesBox>
            <PostBottomDot />
            <PostBottomViewsBox>
              <PostBottomViewsImg />
              <PostBottomViewsText>554 views</PostBottomViewsText>
            </PostBottomViewsBox>
          </PostBottomDataBox>
        </PostBottom>
      </PostEach>
    </>
  );
};

export const Board_Coding_EachPost_08 = () => {
  return (
    <>
      {" "}
      <PostEach>
        <PostTop>
          <PostTopUser>
            <PostTopUserImg
              style={{
                backgroundColor: "#313131",
                backgroundImage:
                  "url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcNBwcNDQcHBw0HBw0HBwcHBw8ICQcKFREWFhURExMYKCggGBolJxMVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0NDisZFRktLS0tNy0tKysrLSsrLSsrKzctKysrKysrLSsrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKsBJgMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIGBwX/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAYAQEBAQEBAAAAAAAAAAAAAAABAgAFBP/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwD1esmo4TpAiUkQCRKISIgVCUtZJKgEiDNpUtrIEiCWklqCEiU1CRKIVCCUktQQkQRiAhIglJBAl0KFRz3LEAlAQkQQqEtS1KSIBIglpUlqKhIglpJaghIlojEQQqEEtUSpaISIIxAQk1NEpJqCFQAzOgQo8DloCEiCFQzVtZJEVCRCs2lRqASIJSS1KISJSoSIJSoQTWJalEURKIxEVCRBKSWoIVCCMQAs6AEeByxBCoS0qEpqKhIglKi1kCRBKSWoISJSoSIIVFQS1iWoIoiCMRFQkQS0k1BCoQRiIBJogWdCgjwOYJRkkqKhIghUIgSIJaSaghIlEJEEKhBKxKgiiIVGIioSIJaSVBCoQRiIBKJTUJVALOhSlrOvA5kEAkQTSUtQCoQS0kqCEiUqMRBFKEErESiKIgjERUJEomklQQqEEYiFQkQtSkgIVAiln36gPA5YghUlQCRBLSSoISJSoSIIVCCWsRBNURBGICEiCWklQQqEEYiASiGoSVFQqEEtLAgxdDUozXhcwqASIJaSVBCRCoSJRKVCCWsRKIoiCMQQJKglpIghUIIxEAkSpUpJQQqEELFSlRlQggWdBqKjwuYIJaSWoISIWoSIIVCCWsRBFEQRiIBIghJUEKhBGIghK1EQkqAVCCFioIyhBKSqIFnQoVLXhcwtQQkSlQkQqMoQSklQRREEYgISIJSS1BCoQRiIBIyVCSghUIIWEEZQglJEEJXRAs6C1BK8LmCURiIIpQgVmTUtKlUoQqMQKhIghJqCUqEKlYiKlJGatQlKCUkQqEiUqMqCCElQCUQqUkVmqWf/2Q==)",
              }}
            />
            <PostTopUserId>By: yj na</PostTopUserId>
          </PostTopUser>
          <PostTopDays>2024.12.25. 19:45 작성</PostTopDays>
        </PostTop>
        <PostMiddle>
          <PostMiddleContentsUpper>
            <PostMiddleContentsPending>미해결</PostMiddleContentsPending>
            <PostMiddleContentsTitle>
              nodejs와 mysql 연동 에러
            </PostMiddleContentsTitle>
          </PostMiddleContentsUpper>
          <PostMiddleContentsText>
            Connection.connect(); 를 추가한 후 저장하면 다음과 같은 에러가
            뜹니다. Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support
            authentication protocol requested by server; consider upgrading
            MySQL client 해결책을 검색해 다음을 입력해보 ..
          </PostMiddleContentsText>
        </PostMiddle>
        <PostBottom>
          <PostBottomTagsBox>
            <PostBottomTag># JavaScript</PostBottomTag>
            <PostBottomTag># node.js</PostBottomTag>
          </PostBottomTagsBox>
          <PostBottomDataBox>
            <PostBottomRepliesBox>
              <PostBottomRepliesImg />
              <PostBottomRepliesText>16 replies</PostBottomRepliesText>
            </PostBottomRepliesBox>
            <PostBottomDot />
            <PostBottomViewsBox>
              <PostBottomViewsImg />
              <PostBottomViewsText>25.4 views</PostBottomViewsText>
            </PostBottomViewsBox>
          </PostBottomDataBox>
        </PostBottom>
      </PostEach>
    </>
  );
};

export const Board_Coding_EachPost_09 = () => {
  return (
    <>
      {" "}
      <PostEach>
        <PostTop>
          <PostTopUser>
            <PostTopUserImg
              style={{
                backgroundColor: "#313131",
                backgroundImage:
                  "url(https://images.mypetlife.co.kr/content/uploads/2022/12/13122754/AdobeStock_123950862-1024x684.jpeg)",
              }}
            />
            <PostTopUserId>By: 헬로월드</PostTopUserId>
          </PostTopUser>
          <PostTopDays>2024.12.25. 12:54 작성</PostTopDays>
        </PostTop>
        <PostMiddle>
          <PostMiddleContentsUpper>
            <PostMiddleContentsSolved>해결됨</PostMiddleContentsSolved>
            <PostMiddleContentsTitle>
              LDA 그래프 좌우반전 질문합니다.
            </PostMiddleContentsTitle>
          </PostMiddleContentsUpper>
          <PostMiddleContentsText>
            안녕하세요. LDA 파트를 공부하는 중에 철민님께서 올려주신 소스코드를
            동일하게 실행했는데 이런 결과가 나와야 하는데 같은 코드를 제가
            돌렸을 때는 이런 결과가 나옵니다. 분류가 잘 되었음을 시각적으로
            보는데에 있어서는 큰 문제가 없지만 어째서 이렇게 거꾸로? 보이게
            되는지 ..
          </PostMiddleContentsText>
        </PostMiddle>
        <PostBottom>
          <PostBottomTagsBox>
            <PostBottomTag># 통계</PostBottomTag>
            <PostBottomTag># Python</PostBottomTag>
            <PostBottomTag># 머신러닝</PostBottomTag>
          </PostBottomTagsBox>
          <PostBottomDataBox>
            <PostBottomRepliesBox>
              <PostBottomRepliesImg />
              <PostBottomRepliesText>10 replies</PostBottomRepliesText>
            </PostBottomRepliesBox>
            <PostBottomDot />
            <PostBottomViewsBox>
              <PostBottomViewsImg />
              <PostBottomViewsText>804 views</PostBottomViewsText>
            </PostBottomViewsBox>
          </PostBottomDataBox>
        </PostBottom>
      </PostEach>
    </>
  );
};

export const Board_Coding_EachPost_10 = () => {
  return (
    <>
      {" "}
      <PostEach>
        <PostTop>
          <PostTopUser>
            <PostTopUserImg
              style={{
                backgroundColor: "#313131",
                backgroundImage:
                  "url(https://kukka-2-media-123.s3.amazonaws.com/media/contents/event_template/9e4701fd-8d4b-41e5-bbbe-fee0a2647391.jpg)",
              }}
            />
            <PostTopUserId>By: neok</PostTopUserId>
          </PostTopUser>
          <PostTopDays>2024.12.24. 11:01 작성</PostTopDays>
        </PostTop>
        <PostMiddle>
          <PostMiddleContentsUpper>
            <PostMiddleContentsSolved>해결됨</PostMiddleContentsSolved>
            <PostMiddleContentsTitle>500 server error</PostMiddleContentsTitle>
          </PostMiddleContentsUpper>
          <PostMiddleContentsText>
            제로초님과 동일한 코드를 사용하였는데 /test시 Request failed with
            status code 500에러가 뜹니다. 어디서 오류가 난걸까요...? Request
            failed with status code 500 at createError
            (\node_modules\axios\lib\core\createError.js:16:15) at settle
            (\node_modules\a ..
          </PostMiddleContentsText>
        </PostMiddle>
        <PostBottom>
          <PostBottomTagsBox>
            <PostBottomTag># MySQL</PostBottomTag>
            <PostBottomTag># MongoDB</PostBottomTag>
            <PostBottomTag># node.js</PostBottomTag>
            <PostBottomTag># JavaScript</PostBottomTag>
          </PostBottomTagsBox>
          <PostBottomDataBox>
            <PostBottomRepliesBox>
              <PostBottomRepliesImg />
              <PostBottomRepliesText>10 replies</PostBottomRepliesText>
            </PostBottomRepliesBox>
            <PostBottomDot />
            <PostBottomViewsBox>
              <PostBottomViewsImg />
              <PostBottomViewsText>15.6K views</PostBottomViewsText>
            </PostBottomViewsBox>
          </PostBottomDataBox>
        </PostBottom>
      </PostEach>
    </>
  );
};

const Board_Coding_EachPost = () => {
  return <></>;
};

export default Board_Coding_EachPost;
