import store from "../redux/store/store"; // Redux store를 import

const Common = {
  SPRING_DOMAIN: "http://localhost:8111",

  getAccessToken: () => {
    const accesstoken = store.getState().auth.accesstoken; // store 직접 접근
    return accesstoken;
  },
  getRefreshToken: () => {
    const refreshtoken = store.getState().auth.refreshtoken;
    return refreshtoken;
  },
};

export default Common;
