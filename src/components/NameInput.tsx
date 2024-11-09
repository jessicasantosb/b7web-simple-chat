import { useState } from "react";

export function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <p>Qual o seu nome?</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
