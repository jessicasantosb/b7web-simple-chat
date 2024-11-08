'use client'

import { chatReducer } from "@/reducers/chatReducer";
import { createContext, ReactNode, useContext, useReducer } from "react";
import { MessageProps } from "../types/message";

type ChatContextProps = {
  chat: MessageProps[];
  addMessage: (user: string, text: string) => void;
};

const ChatContext = createContext<ChatContextProps | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [chat, dispatch] = useReducer(chatReducer, []);

  const addMessage = (user: string, text: string) => {
    dispatch({ type: "add", payload: { user, text } });
  };

  return (
    <ChatContext.Provider value={{ chat, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
