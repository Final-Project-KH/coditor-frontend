import store from "../redux/store/store";
import {
  setLoginData,
  clearAccessToken,
  clearRefreshToken,
} from "../redux/slice/authSlice"; // Redux 액션 가져오기
import axios from "axios";
import JwtDecoding from "../api/JwtDecode";

const Common = {
  SPRING_DOMAIN: "http://localhost:8111",

  // 저장되어 있는 access token 가져오기
  getAccessToken: () => {
    const accesstoken = store.getState().auth.accesstoken; // Redux store에서 토큰 가져오기
    return accesstoken;
  },

  // 저장되어 있는 access token 만료시간 가져오기
  getAccessTokenExpiresIn: () => {
    const accesstokenexpiresin = parseInt(
      store.getState().auth.accesstokenexpiresin
    );
    return accesstokenexpiresin;
  },

  // 들어온 토큰 기반 만료 시간 추출하기
  getNewAccessTokenExpiresIn: (token) => {
    // 들어오는 token은 accesstoken
    const newaccesstokenexpiresin = JwtDecoding.getFieldFromToken(token, "exp");
    return newaccesstokenexpiresin;
  },

  // 저장되어 있는  refresh token 가져오기
  getRefreshToken: () => {
    const refreshtoken = store.getState().auth.refreshtoken;
    return refreshtoken;
  },
  // 저장되어 있는 refresh token 만료시간 가져오기
  getRefreshTokenExpiresIn: () => {
    const refreshtokenexpiresin = parseInt(
      store.getState().auth.refreshtokenexpiresin
    );
    return refreshtokenexpiresin;
  },

  //  들어온 토큰 기반 만료 시간 추출하기
  // 위의 함수와 같은 함수이므로 하나의 함수로 사용해도 됨
  // 들어가는 토큰 값만 잘 조절해서 변수명 다르게 설정하고 사용하면 됨
  // 통합시킬지 말지는 나중에 생각
  getNewRefreshTokenExpiresIn: (token) => {
    // 들어오는 token은 refreshtoken
    const newrefreshtokenexpiresin = JwtDecoding.getFieldFromToken(
      token,
      "exp"
    );
    return newrefreshtokenexpiresin;
  },

  // 들어온 토큰 기반 키값 추출하기
  getNewUserKeyNumber: (token) => {
    // 들어오는 token은 accesstoken
    const newKeynumber = JwtDecoding.getFieldFromToken(token, "sub");
    return newKeynumber;
  },
  getNickName: () => {
    const nickname = store.getState().auth.nickname;
    return nickname;
  },
  // 들어온 토큰 기반 닉네임 추출하기
  getNewNickname: (token) => {
    // 들어오는 token은 accesstoken
    const newNickname = JwtDecoding.getFieldFromToken(token, "nickname");
    return newNickname;
  },

  setAccessToken: (token) => {
    store.dispatch(setLoginData({accesstoken: token})); // Redux store에 토큰 저장
  }, // accesstoken 데이터는 (response.data.accessToken) -> response는 지정한 변수명

  setAccessTokenExpiresIn: (expirationtime) => {
    store.dispatch(setLoginData({accesstokenexpiresin: expirationtime}));
  }, // accesstoken expiretime 데이터는 getNewAccessTokenExpiresIn 함수를 거친 데이터

  setNickname: (nickname) => {
    store.dispatch(setLoginData({nickname: nickname}));
  },

  setTokens: (accessToken, refreshToken) => {
    // 여기에 추가
    store.dispatch(
      setLoginData({
        accesstoken: accessToken,
        refreshtoken: refreshToken,
      })
    );
  },

  setRefreshToken: (token) => {
    store.dispatch(setLoginData({refreshtoken: token})); // Redux store에 토큰 저장
  }, // refreshtoken 데이터는 (response.data.refreshToken) -> response는 지정한 변수명

  setRefreshTokenExpiresIn: (expirationtime) => {
    store.dispatch(setLoginData({refreshtokenexpiresin: expirationtime}));
  }, // refreshtoken expiretime 데이터는 getNewRefreshTokenExpiresIn 함수를 거친 데이터

  clearAccessToken: () => {
    store.dispatch(clearAccessToken());
  },
  clearRefreshToken: () => {
    store.dispatch(clearRefreshToken());
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
        `${Common.SPRING_DOMAIN}/auth/refresh`, // 컨트롤러 경로 수정 필요
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

  refreshAccessToken: async () => {
    const refreshToken = Common.getRefreshToken;
    if (!refreshToken) {
      throw new Error(600);
    }
    const response = await axios.post(`${Common.SPRING_DOMAIN}/auth/refresh`, {
      refreshToken,
    });
    const accessToken = response.data.accessToken;
    const accessTokenExpirationTime = Common.getNewAccessTokenExpiresIn(
      response.data.accessToken
    );

    Common.setAccessToken(accessToken);
    Common.setAccessTokenExpiresIn(accessTokenExpirationTime);

    return accessToken;
  },
};

export default Common;
