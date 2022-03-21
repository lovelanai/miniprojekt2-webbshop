import { createContext, FC, useContext, useState } from "react";
import { User } from "../interfaces/interfaces";
// import { confirmationFetch } from "../";

interface ContextValue {
  isLoading: boolean;
  user?: User;
  confirm: () => void;
}

export const UserContext = createContext<ContextValue>({
  isLoading: false,
  // user: { name },
  confirm: () => {},
});

const UserProvider: FC = (props) => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);

  const confirm = async () => {
    setIsLoading(true);
    // const user = await confirmationFetch("api/login");
    setUser(user);
    setIsLoading(false);
  };

  return (
    <UserContext.Provider value={{ user, isLoading, confirm }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => useContext(UserContext);
