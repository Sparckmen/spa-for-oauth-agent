import axios from "axios";
import { redirect } from "react-router-dom";
import { config } from "../helpers/Constants";
import { OAuthClient } from "../oauthFetch/oauth/oauthClient";
import { SimpleData } from "../types/SimpleData";

const oauthClient = new OAuthClient({
  oauthAgentBaseUrl: "http://127.0.0.1:8080/oauth-agent",
});

const getAll = async () => {
  // return instance
  //   .get("/session/websession")
  //   .then((response) => console.log(response.data))
  //   .catch((error) => console.log(error));
  console.log("something");
};

// const getAll = async () => {
//   fetch(`${config.url.API_URL}/session/websession`, {
//     method: "GET",
//     mode: 'cors',
//     cache: "no-cache",
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }).then((response) => {
//     console.log(response.body);

//   });
// };

const login = async () => {
  window.location.href = await oauthClient.startLogin();
};

const instance = axios.create({
  baseURL: config.url.API_URL,
});

instance.interceptors.response.use(
  (response) => {
    console.log("SUCCESSFULL RESPONSE");
    console.log(response);
    if (response.status === 302) {
      console.log("REDIRECT");
      window.location.href = response.data.url;
    }
    return response;
  },
  function (error) {
    console.log("WHY IS ALWAYS FCKING ERROR");
    if (
      error.response &&
      error.response.status &&
      error.response.status === 404
    ) {
      return { status: error.response.status };
    }
    console.log(error);
    return Promise.reject(error.response);
  }
);

export default {
  getAll,
  login,
};
