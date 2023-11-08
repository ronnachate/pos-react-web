import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const keyUser = 'auth-user';


function getLoginSession() {
  const user = localStorage.getItem(keyUser);

  return JSON.parse(user);
}

function setLoginSession(user, accessToken, refreshToken) {

  // Remove password from the user object
  const { password, ...rest } = user;

  // Merge token to the final object.
  const merged = {
    ...rest,
    accessToken,
    refreshToken,
  };
  localStorage.setItem(keyUser, JSON.stringify(merged));
}

function isAuth() {
  return !!getLoginSession();
}

async function login(username, password) {
  return axios
  .post(`${API_URL}/auth/signin`, {
    username,
    password
  })
  .then(response => {
    if (response.data.accessToken) {
      //store in local storage
      setLoginSession({ username }, response.data.accessToken, response.data.refreshToken);
    }

    return response.data;
  });
}

async function refreshToken() {
  const { username, refreshToken } = getLoginSession();
  return axios
  .post(`${API_URL}/auth/refresh-token`, {
    refreshToken
  })
  .then(response => {
    if (response.data.accessToken) {
      //store in local storage
      setLoginSession({ username }, response.data.accessToken, response.data.refreshToken);
    }

    return response.data;
  });
}

async function logout() {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.removeItem(keyUser);
        resolve();
      }, 1000);
    });
  }
  
  export {
    getLoginSession, isAuth, login, refreshToken, logout
  };
  