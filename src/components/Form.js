import { useState } from "react";

export default function FormElement() {
  const handleSumbit = (e) => {
    e.preventDefault();
    localStorage.setItem("todos", inputText);
  };
  const [inputText, setInputText] = useState("");

  return (
    <form onSubmit={handleSumbit}>
      <input
        onChange={(e) => setInputText(e.target.value)}
        className="input"
        type="text"
      />
      <button className="btn_primary">+</button>
    </form>
  );
}
