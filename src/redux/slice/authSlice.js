import {createSlice} from "@reduxjs/toolkit";

// 슬라이스 생성
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    nickname: null,
    accesstoken: null,
    accesstokenexpiresin: null,
    refreshtoken: null,
    refreshtokenexpiresin: null,
    error: null,
  },
  reducers: {
    setLoginData: (state, action) => {
      state.keynumber = action.payload.keynumber;
      state.nickname = action.payload.nickname;
      state.accesstoken = action.payload.accesstoken;
      state.accesstokenexpiresin = action.payload.accesstokenexpiresin;
      state.refreshtoken = action.payload.refreshtoken;
      state.refreshtokenexpiresin = action.payload.refreshtokenexpiresin;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.keynumber = null;
      state.nickname = null;
      state.accesstoken = null;
      state.accesstokenexpiresin = null;
      state.refreshtoken = null;
      state.error = null;
      state.refreshtokenexpiresin = null;
    },
    clearAccessToken: (state) => {
      state.accesstoken = null;
      state.accesstokenexpiresin = null;
    },
    clearRefreshToken: (state) => {
      state.refreshtoken = null;
      state.refreshtokenexpiresin = null;
    },
  },
});

export const {
  setLoginData,
  setError,
  logout,
  clearAccessToken,
  clearRefreshToken,
} = authSlice.actions;

export default authSlice.reducer;
