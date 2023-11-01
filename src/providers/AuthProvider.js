import React from 'react';


import {
    getLoginSession, isAuth, login, logout
} from '../services/authService';

import { getUser, getUsers } from '../services/userService';

const AuthContext = React.createContext(null);

function AuthProvider({ children, ...rest }) {

  const auth = {
    getLoginSession,
    isAuth,
    login,
    logout,
    getUser,
    getUsers
  };

  return (
    <AuthContext.Provider value={auth} {...rest}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default AuthProvider;
