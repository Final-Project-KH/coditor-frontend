import { createSlice } from "@reduxjs/toolkit";

// 슬라이스 생성
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    keynumber: "",
    nickname: "",
    accesstoken: "",
    accesstokenexpiresin: "",
    refreshtoken: "",
    refreshtokenexpiresin: "",
    authorities: "",
    error: "",
  },
  reducers: {
    setLoginData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    logoutAuth: (state) => {
      state.keynumber = "";
      state.nickname = "";
      state.accesstoken = "";
      state.accesstokenexpiresin = "";
      state.refreshtoken = "";
      state.refreshtokenexpiresin = "";
      state.authorities = "";
      state.error = "";
    },
    clearAccessToken: (state) => {
      state.accesstoken = "";
      state.accesstokenexpiresin = "";
    },
    clearRefreshToken: (state) => {
      state.refreshtoken = "";
      state.refreshtokenexpiresin = "";
    },
  },
});

export const {
  setLoginData,
  setError,
  logoutAuth,
  clearAccessToken,
  clearRefreshToken,
} = authSlice.actions;

export default authSlice.reducer;
