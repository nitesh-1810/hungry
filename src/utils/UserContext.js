import { createContext } from "react";

const UserContext = createContext({
  user: { name: "John", email: "john@gmail.com" },
});

UserContext.displayName = "UserContext";

export default UserContext;
