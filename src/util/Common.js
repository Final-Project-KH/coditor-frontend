import store from "../redux/store/store";
import { setLoginData } from "../redux/slice/authSlice"; // Redux 액션 가져오기
import axios from "axios";

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
  handleUnauthorized: async () => {
    console.log("handleUnauthorized");
    const refreshtoken = Common.getRefreshToken();
    const accesstoken = Common.getAccessToken();
    const config = {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    try {
      const res = await axios.post(
        `${Common.SPRING_DOMAIN}/auth/refresh`, // 컨트롤러 경ㄹ로 수정 필요
        refreshtoken,
        config
      );
      console.log(res.data);
      Common.setAccessToken(res.data); // data.accessToken (?)
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
};

export default Common;
