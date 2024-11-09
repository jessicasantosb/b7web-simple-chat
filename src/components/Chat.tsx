'use client'

import { useUser } from "@/contexts/UserContext";
import { NameInput } from "./NameInput";

export function Chat() {
  const userCtx = useUser();

  if (!userCtx) return null;
  if (!userCtx.user) return <NameInput />

  return (
    <div>
      <h3>Chat</h3>
    </div>
  );
}
