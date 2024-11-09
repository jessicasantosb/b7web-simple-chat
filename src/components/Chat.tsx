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
    <main className="max-w-xl  h-[450px] mx-auto mt-8 p-2 rounded-md flex flex-col justify-between gap-4 border border-[#2A3663]">
      <div className="flex-1 pr-2 flex flex-col gap-2 overflow-y-scroll">
        <ChatMessages />
      </div>
      <div className="flex flex-col gap-2">
        <ChatInput name={userCtx.user} />
        <ChatInput name="bot" />
      </div>
    </main>
  );
}
