import { useUser } from "@/contexts/UserContext";
import { KeyboardEvent, useState } from "react";

export function NameInput() {
  const [name, setName] = useState("");
  const userCtx = useUser();

  const handleKeyUpAction = (e: KeyboardEvent<HTMLInputElement>) => {
    const userName = name.trim();
    if (e.code.toLowerCase() !== "enter") return;
    if (userName !== "" && userName !== "bot") userCtx?.setUser(userName);
  };

  return (
    <div>
      <p>Qual o seu nome?</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyUp={handleKeyUpAction}
      />
    </div>
  );
}
