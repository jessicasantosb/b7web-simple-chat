import { useChat } from "@/contexts/ChatContext";

export function ChatMessages() {
  const chatCtx = useChat();

  return (
    <>
      {chatCtx?.chat.map(({ id, user, text }) => {
        return (
          <div
            key={id}
            className={`min-w-14 rounded-xl p-2 ${
              user === "bot"
                ? "self-start bg-[#D8DBBD]"
                : "self-end text-right bg-[#B59F78]"
            }`}
          >
            <p className="font-bold">{user}</p>
            <p>{text}</p>
          </div>
        );
      })}
    </>
  );
}
