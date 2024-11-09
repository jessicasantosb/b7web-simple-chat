"use client";

import { useChat } from "@/contexts/ChatContext";
import { KeyboardEvent, useState } from "react";

export function ChatInput({ name }: { name: string }) {
  const [message, setMessage] = useState("");
  const chatCtx = useChat();

  const handleKeyUpAction = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code.toLowerCase() !== "enter" || message.trim() === "") return;
    chatCtx?.addMessage(name, message.trim());
    setMessage("");
  };

  return (
    <input
      type="text"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder={`${name}, digite sua mensagem`}
      onKeyUp={handleKeyUpAction}
    />
  );
}
