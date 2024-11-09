"use client";

import { useUser } from "@/contexts/UserContext";
import { ChatInput } from "./ChatInput";
import { NameInput } from "./NameInput";

export function Chat() {
  const userCtx = useUser();

  if (!userCtx) return null;
  if (!userCtx.user) return <NameInput />;

  return (
    <div>
      <h3>Chat</h3>
      <div>
        <ChatInput name={userCtx.user} />
      </div>
      <div>
        <ChatInput name="bot" />
      </div>
    </div>
  );
}
