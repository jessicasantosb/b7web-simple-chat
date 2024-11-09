"use client";

import { useUser } from "@/contexts/UserContext";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";
import { NameInput } from "./NameInput";

export function Chat() {
  const userCtx = useUser();

  if (!userCtx) return null;
  if (!userCtx.user) return <NameInput />;

  return (
    <div>
      <ChatMessages />
      <div>
        <ChatInput name={userCtx.user} />
      </div>
      <div>
        <ChatInput name="bot" />
      </div>
    </div>
  );
}
