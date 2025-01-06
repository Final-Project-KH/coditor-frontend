import { createSlice } from "@reduxjs/toolkit";

// 슬라이스 생성
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    nickname: null,
    accesstoken: null,
    refreshtoken: null,
    error: null,
  },
  reducers: {
    setLoginData: (state, action) => {
      state.nickname = action.payload.nickname;
      state.accesstoken = action.payload.accesstoken;
      state.refreshtoken = action.payload.refreshtoken;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.nickname = null;
      state.accesstoken = null;
      state.refreshtoken = null;
      state.error = null;
    },
  },
});

export const { setLoginData, setError, logout } = authSlice.actions;

export default authSlice.reducer;
