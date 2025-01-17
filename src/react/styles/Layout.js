import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
`;

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* 전체 화면 높이 차지 */
  overflow: hidden; /* 화면에 스크롤이 생기지 않도록 */
`;

export const MainContent = styled.div`
  margin-top: 50px;
  flex: 1;
  overflow-y: auto; /* Outlet에 스크롤 적용 */
  &::-webkit-scrollbar {
    width: 10px;
    height: 100%;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 30px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
  }
`;
