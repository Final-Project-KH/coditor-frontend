import store from "../redux/store/store";
import { setLoginData } from "../redux/slice/authSlice"; // Redux 액션 가져오기

const Common = {
  SPRING_DOMAIN: "http://localhost:8111",

  getAccessToken: () => {
    const accesstoken = store.getState().auth.accesstoken; // Redux store에서 토큰 가져오기
    return accesstoken;
  },

  getRefreshToken: () => {
    const refreshtoken = store.getState().auth.refreshtoken;
    return refreshtoken;
  },

  setAccessToken: (token) => {
    store.dispatch(setLoginData({ accesstoken: token })); // Redux store에 토큰 저장
  },

  setRefreshToken: (token) => {
    store.dispatch(setLoginData({ refreshtoken: token })); // Redux store에 토큰 저장
  },
  getNickName: () => {
    const nickname = store.getState().auth.nickname;
    return nickname;
  },
};

export default Common;
