import { createContext, ReactNode, useContext, useState } from "react";

type UserContextProps = {
  user: string;
  setUser: (newUser: string) => void;
};

export const UserContext = createContext<UserContextProps | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
