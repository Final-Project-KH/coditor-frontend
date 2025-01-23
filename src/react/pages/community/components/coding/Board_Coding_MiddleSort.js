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
import { useState } from "react";

const Board_Coding_MiddleSort = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath, thirdpath } = location.state || {};
  const [activeOrder, setActiveOrder] = useState("최신순");

  const handleWrite = () => {
    navigate("/community/coding/write", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: "write",
      },
    });
  };

  const handleOrder = (order) => {
    setActiveOrder(order);
  };

  return (
    <>
      <MiddleSortOuterContiner>
        <MiddleSortInnerContainer>
          <MiddleSortContentsBox>
            {activeOrder === "최신순" ? (
            <MiddleSortTitleActiveBox>
            <MiddleSortTitleActiveDot />
            <MiddleSortTitleActiveText onClick={() => handleOrder("최신순")}>최신순</MiddleSortTitleActiveText>
          </MiddleSortTitleActiveBox>
            ) : (
              <MiddleSortTitleInactiveBox>
              <MiddleSortTitleInactiveDot />
              <MiddleSortTitleInactiveText onClick={() => handleOrder("최신순")}>최신순</MiddleSortTitleInactiveText>
            </MiddleSortTitleInactiveBox>
            )}
            {activeOrder === "정확도순" ? (
            <MiddleSortTitleActiveBox>
            <MiddleSortTitleActiveDot />
            <MiddleSortTitleActiveText onClick={() => handleOrder("정확도순")}>정확도순</MiddleSortTitleActiveText>
          </MiddleSortTitleActiveBox>
            ) : (
              <MiddleSortTitleInactiveBox>
              <MiddleSortTitleInactiveDot />
              <MiddleSortTitleInactiveText onClick={() => handleOrder("정확도순")}>정확도순</MiddleSortTitleInactiveText>
            </MiddleSortTitleInactiveBox>
            )}
            {activeOrder === "답변많은순" ? (
            <MiddleSortTitleActiveBox>
            <MiddleSortTitleActiveDot />
            <MiddleSortTitleActiveText onClick={() => handleOrder("답변많은순")}>답변많은순</MiddleSortTitleActiveText>
          </MiddleSortTitleActiveBox>
            ) : (
              <MiddleSortTitleInactiveBox>
              <MiddleSortTitleInactiveDot />
              <MiddleSortTitleInactiveText onClick={() => handleOrder("답변많은순")}>답변많은순</MiddleSortTitleInactiveText>
            </MiddleSortTitleInactiveBox>
            )}
            {activeOrder === "좋아요순" ? (
            <MiddleSortTitleActiveBox>
            <MiddleSortTitleActiveDot />
            <MiddleSortTitleActiveText onClick={() => handleOrder("좋아요순")}>좋아요순</MiddleSortTitleActiveText>
          </MiddleSortTitleActiveBox>
            ) : (
              <MiddleSortTitleInactiveBox>
              <MiddleSortTitleInactiveDot />
              <MiddleSortTitleInactiveText onClick={() => handleOrder("좋아요순")}>좋아요순</MiddleSortTitleInactiveText>
            </MiddleSortTitleInactiveBox>
            )}
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
