import { Chat } from "@/components/Chat";
import { ChatProvider } from "@/contexts/ChatContext";
import { UserProvider } from "@/contexts/UserContext";

export default function Home() {
  return (
    <UserProvider>
      <ChatProvider>
        <section className="p-2">
          <h1 className="pt-14 text-center text-[#2A3663] tracking-widest font-extrabold text-2xl">
            CHAT
          </h1>
          <Chat />
        </section>
      </ChatProvider>
    </UserProvider>
  );
}
