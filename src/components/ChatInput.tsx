"use client";

import { useState } from "react";

export function ChatInput({ name }: { name: string }) {
  const [message, setMessage] = useState("");

  return (
    <input
      type="text"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder={`${name}, digite sua mensagem`}
    />
  );
}
