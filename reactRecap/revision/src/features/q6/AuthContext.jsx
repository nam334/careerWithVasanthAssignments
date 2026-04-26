import { createContext, useEffect, useState } from "react";

//create context
export const AuthContext = createContext();

//create provider
const AuthProvider = ({ children }) => {
  //create state
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);
  //return value
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
