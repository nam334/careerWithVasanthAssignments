import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const roleHandler = (role) => {
    const userData = {
      name: "Namrata",
      role: role,
    };

    setUser(userData);
    //save to local storage
    localStorage.setItem("userData", JSON.stringify(userData));
    if (role === "admin") navigate("/admin");
    if (role === "user") navigate("/dashboard");
  };
  return (
    <>
      <button onClick={() => roleHandler("admin")}>Login as Admin</button>
      <button onClick={() => roleHandler("user")}>Login as User</button>
    </>
  );
};

export default Login;
