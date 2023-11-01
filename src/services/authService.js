import { v4 as uuidv4 } from 'uuid';

const keyUser = 'auth-user';

function newToken() {
    //simulate JWT token
  return uuidv4();
}

function getLoginSession() {
  const user = localStorage.getItem(keyUser);

  return JSON.parse(user);
}

function setLoginSession(user, token) {

  const { password, ...rest } = user;

  // Merge token to the final object.
  const merged = {
    ...rest,
    token,
  };

  localStorage.setItem(keyUser, JSON.stringify(merged));
}

function isAuth() {
  return !!getLoginSession();
}

async function login(username, password) {
  const user = {
    id: uuidv4(),
    username,
    name: 'John Doe',
    email: 'john@do.com',
  };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const token = newToken();
      setLoginSession(user, token);
      return resolve(token);
    }, 2000);
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
    getLoginSession, isAuth, login, logout
  };
  