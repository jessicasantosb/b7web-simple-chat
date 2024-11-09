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
      className={`h-10 p-1 text-[#2A3663] rounded-md border border-[#2A3663]
        ${name === "bot" ? "outline-[#D8DBBD]" : "outline-[#B59F78]"}`}
    />
  );
}
