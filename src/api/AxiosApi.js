import axios from "axios";

const SPRING_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  login: async (userid, pwd) => {
    const login = {
      userId: userid,
      password: pwd,
    };
    return await axios.post(SPRING_DOMAIN + "/auth/login", login);
  },
  signup: async (userid, email, pwd, name) => {
    const user = {
      userId: userid,
      email: email,
      password: pwd,
      nickname: name,
    };
    return await axios.post(SPRING_DOMAIN + "/auth/signup", user);
  },
};
export default AxiosApi;
