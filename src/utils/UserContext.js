import { createContext } from "react";

const UserContext = createContext({
  user: { name: "John", email: "john@gmail.com" },
});

export default UserContext;
