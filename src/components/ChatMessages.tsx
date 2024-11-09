import { useChat } from "@/contexts/ChatContext";

export function ChatMessages() {
  const chatCtx = useChat();

  return (
    <>
      {chatCtx?.chat.map(({ id, user, text }) => {
        return (
          <div key={id}>
            <p>{user}</p>
            <p>{text}</p>
          </div>
        );
      })}
    </>
  );
}
