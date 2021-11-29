import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  handleTokenChange: () => {}
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const handleTokenChange = (token) => {
    setToken(token);
  };
  return (
    <AuthContext.Provider value={{ token, handleTokenChange }}>
      {children}
    </AuthContext.Provider>
  );
};
