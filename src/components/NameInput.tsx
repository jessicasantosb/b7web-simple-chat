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
    <div className="max-w-xl mx-auto px-2 pt-14 flex flex-col items-center justify-center gap-2 ">
      <p className="text-lg">Qual o seu nome?</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyUp={handleKeyUpAction}
        placeholder="digite aqui"
        className="border-b-2 border-[#2A3663] p-2 outline-none"
      />
    </div>
  );
}
