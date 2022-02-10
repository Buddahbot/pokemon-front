import axios from "axios";

export const register = async (player) => {
  try {
    const register = await axios.post("http://localhost:3002/auth/register", {
      name: player.name,
      password: player.password,
    });
    console.log("Register");
  } catch (err) {
    console.log(err);
  }
};

export const login = (user) => {
  return axios
    .post("http://localhost:3002/auth/login", {
      name: user.name,
      password: user.password,
    })
    .then((res) => {
      localStorage.setItem("usertoken", res.data);
      return res.data;
    })
    .catch((err) => console.log(err));
};
