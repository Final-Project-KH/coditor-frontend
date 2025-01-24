import { useState } from "react";
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

const Board_Order = ({ boardType }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath, thirdpath } = location.state || {};
  const [activeOrder, setActiveOrder] = useState("DESC");

  // write post
  const handleWrite = () => {
    navigate(`/community/${boardType}/write`, {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: "write",
      },
    });
  };

  // order posts
  const handleOrder = (order) => {
    setActiveOrder(order);
  };

  const renderOrderOptions = () => {
    switch (boardType) {
      case "coding":
        return (
          <MiddleSortContentsBox>
            {activeOrder === "DESC" ? (
              <MiddleSortTitleActiveBox>
                <MiddleSortTitleActiveDot />
                <MiddleSortTitleActiveText
                  onClick={() => handleOrder("DESC")}
                >
                  최신순
                </MiddleSortTitleActiveText>
              </MiddleSortTitleActiveBox>
            ) : (
              <MiddleSortTitleInactiveBox>
                <MiddleSortTitleInactiveDot />
                <MiddleSortTitleInactiveText
                  onClick={() => handleOrder("DESC")}
                >
                  최신순
                </MiddleSortTitleInactiveText>
              </MiddleSortTitleInactiveBox>
            )}
            {activeOrder === "ASC" ? (
              <MiddleSortTitleActiveBox>
                <MiddleSortTitleActiveDot />
                <MiddleSortTitleActiveText
                  onClick={() => handleOrder("ASC")}
                >
                  오래된순
                </MiddleSortTitleActiveText>
              </MiddleSortTitleActiveBox>
            ) : (
              <MiddleSortTitleInactiveBox>
                <MiddleSortTitleInactiveDot />
                <MiddleSortTitleInactiveText
                  onClick={() => handleOrder("ASC")}
                >
                  오래된순
                </MiddleSortTitleInactiveText>
              </MiddleSortTitleInactiveBox>
            )}
            {activeOrder === "commentCnt" ? (
              <MiddleSortTitleActiveBox>
                <MiddleSortTitleActiveDot />
                <MiddleSortTitleActiveText
                  onClick={() => handleOrder("commentCnt")}
                >
                  답변많은순
                </MiddleSortTitleActiveText>
              </MiddleSortTitleActiveBox>
            ) : (
              <MiddleSortTitleInactiveBox>
                <MiddleSortTitleInactiveDot />
                <MiddleSortTitleInactiveText
                  onClick={() => handleOrder("commentCnt")}
                >
                  답변많은순
                </MiddleSortTitleInactiveText>
              </MiddleSortTitleInactiveBox>
            )}
            {activeOrder === "likeCnt" ? (
              <MiddleSortTitleActiveBox>
                <MiddleSortTitleActiveDot />
                <MiddleSortTitleActiveText
                  onClick={() => handleOrder("likeCnt")}
                >
                  좋아요순
                </MiddleSortTitleActiveText>
              </MiddleSortTitleActiveBox>
            ) : (
              <MiddleSortTitleInactiveBox>
                <MiddleSortTitleInactiveDot />
                <MiddleSortTitleInactiveText
                  onClick={() => handleOrder("likeCnt")}
                >
                  좋아요순
                </MiddleSortTitleInactiveText>
              </MiddleSortTitleInactiveBox>
            )}
          </MiddleSortContentsBox>
        );
      case "course":
      case "study":
      case "team":
        return (
          <MiddleSortContentsBox>
            {activeOrder === "DESC" ? (
              <MiddleSortTitleActiveBox>
                <MiddleSortTitleActiveDot />
                <MiddleSortTitleActiveText
                  onClick={() => handleOrder("DESC")}
                >
                  최신순
                </MiddleSortTitleActiveText>
              </MiddleSortTitleActiveBox>
            ) : (
              <MiddleSortTitleInactiveBox>
                <MiddleSortTitleInactiveDot />
                <MiddleSortTitleInactiveText
                  onClick={() => handleOrder("DESC")}
                >
                  최신순
                </MiddleSortTitleInactiveText>
              </MiddleSortTitleInactiveBox>
            )}
            {activeOrder === "ASC" ? (
              <MiddleSortTitleActiveBox>
                <MiddleSortTitleActiveDot />
                <MiddleSortTitleActiveText
                  onClick={() => handleOrder("ASC")}
                >
                  오래된순
                </MiddleSortTitleActiveText>
              </MiddleSortTitleActiveBox>
            ) : (
              <MiddleSortTitleInactiveBox>
                <MiddleSortTitleInactiveDot />
                <MiddleSortTitleInactiveText
                  onClick={() => handleOrder("ASC")}
                >
                  오래된순
                </MiddleSortTitleInactiveText>
              </MiddleSortTitleInactiveBox>
            )}
            {activeOrder === "commentCnt" ? (
              <MiddleSortTitleActiveBox>
                <MiddleSortTitleActiveDot />
                <MiddleSortTitleActiveText
                  onClick={() => handleOrder("commentCnt")}
                >
                  댓글많은순
                </MiddleSortTitleActiveText>
              </MiddleSortTitleActiveBox>
            ) : (
              <MiddleSortTitleInactiveBox>
                <MiddleSortTitleInactiveDot />
                <MiddleSortTitleInactiveText
                  onClick={() => handleOrder("commentCnt")}
                >
                  댓글많은순
                </MiddleSortTitleInactiveText>
              </MiddleSortTitleInactiveBox>
            )}
            {activeOrder === "likeCnt" ? (
              <MiddleSortTitleActiveBox>
                <MiddleSortTitleActiveDot />
                <MiddleSortTitleActiveText
                  onClick={() => handleOrder("likeCnt")}
                >
                  좋아요순
                </MiddleSortTitleActiveText>
              </MiddleSortTitleActiveBox>
            ) : (
              <MiddleSortTitleInactiveBox>
                <MiddleSortTitleInactiveDot />
                <MiddleSortTitleInactiveText
                  onClick={() => handleOrder("likeCnt")}
                >
                  좋아요순
                </MiddleSortTitleInactiveText>
              </MiddleSortTitleInactiveBox>
            )}
          </MiddleSortContentsBox>
        );
    }
  };

  return (
    <>
      <MiddleSortOuterContiner>
        <MiddleSortInnerContainer>
          {renderOrderOptions()}
          <MiddleWriteButton onClick={() => handleWrite()}>
            글쓰기
          </MiddleWriteButton>
        </MiddleSortInnerContainer>
      </MiddleSortOuterContiner>
    </>
  );
};

export default Board_Order;
