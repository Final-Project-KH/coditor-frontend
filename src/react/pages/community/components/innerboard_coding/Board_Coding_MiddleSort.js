import { useLocation, useNavigate } from "react-router-dom";
import {
  MiddleSortOuterContiner,
  MiddleSortInnerContainer,
  MiddleSortTitleActiveBox,
  MiddleSortTitleInactiveBox,
  MiddleSortTitleActiveDot,
  MiddleSortTitleActiveText,
  MiddleSortTitleInactiveDot,
  MiddleSortTitleInactiveText,
  MiddleWriteButton,
  MiddleSortContentsBox,
} from "../../../../styles/community/Board";

const Board_Coding_MiddleSort = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath } = location.state || {};

  const handleWrite = () => {
    navigate("/community/write", {
      state: {
        firstpath: firstpath,
        secondpath: "write",
      },
    });
  };

  return (
    <>
      <MiddleSortOuterContiner>
        <MiddleSortInnerContainer>
          <MiddleSortContentsBox>
            <MiddleSortTitleActiveBox>
              <MiddleSortTitleActiveDot />
              <MiddleSortTitleActiveText>최신순</MiddleSortTitleActiveText>
            </MiddleSortTitleActiveBox>
            <MiddleSortTitleInactiveBox>
              <MiddleSortTitleInactiveDot />
              <MiddleSortTitleInactiveText>
                정확도순
              </MiddleSortTitleInactiveText>
            </MiddleSortTitleInactiveBox>
            <MiddleSortTitleInactiveBox>
              <MiddleSortTitleInactiveDot />
              <MiddleSortTitleInactiveText>
                답변많은순
              </MiddleSortTitleInactiveText>
            </MiddleSortTitleInactiveBox>
            <MiddleSortTitleInactiveBox>
              <MiddleSortTitleInactiveDot />
              <MiddleSortTitleInactiveText>
                좋아요순
              </MiddleSortTitleInactiveText>
            </MiddleSortTitleInactiveBox>
          </MiddleSortContentsBox>
          <MiddleWriteButton onClick={() => handleWrite()}>
            글쓰기
          </MiddleWriteButton>
        </MiddleSortInnerContainer>
      </MiddleSortOuterContiner>
    </>
  );
};

export default Board_Coding_MiddleSort;
