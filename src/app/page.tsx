import { Chat } from "@/components/Chat";
import { ChatProvider } from "@/contexts/ChatContext";
import { UserProvider } from "@/contexts/UserContext";

export default function Home() {
  return (
    <UserProvider>
      <ChatProvider>
        <h1>Chat Simples</h1>
        <Chat />
      </ChatProvider>
    </UserProvider>
  );
}
