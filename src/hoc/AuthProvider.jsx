import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const signin = (token, cd) => {
    setToken(token);
    cd();
  };

  const singout = (cd) => {
    setToken(null)
    cd()
  }

  return (
    <AuthContext.Provider value={{ token, signin, singout }}>
      {children}
    </AuthContext.Provider>
  );
};
