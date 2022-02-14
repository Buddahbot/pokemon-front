import { useState, createContext, useEffect } from "react";
import jwt_decode from "jwt-decode";

export const UserContext = createContext();

export const UserController = (props) => {
  const [userInfo, setUserInfo] = useState({
    id: "",
    name: ""
  });

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const token = await localStorage.usertoken;
    const decoded = await jwt_decode(token);
    console.log(decoded);
    setUserInfo({
      id: decoded.user._id,
      name: decoded.user.name
    })
  }

    return (
      <UserContext.Provider value={[userInfo, setUserInfo]}>
        {userInfo && props.children}
      </UserContext.Provider>
    );
  };
