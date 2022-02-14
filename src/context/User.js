import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserController = (props) => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <UserContext.Provider value={[userId, setUserId, userName, setUserName]}>
      {props.children}
    </UserContext.Provider>
  );
};
