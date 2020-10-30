import { useState } from "react";
import { getToDos } from "../utils/storage";
import "./Form.css";

export default function FormElement() {
  const handleSumbit = (e) => {
    e.preventDefault();
    const toDos = getToDos();
    const newToDos = [...toDos, inputText];
    setInputText("");
    localStorage.setItem("todos", JSON.stringify(newToDos));
  };
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSumbit}>
      <input
        onChange={handleChange}
        value={inputText}
        className="input"
        type="text"
        required="true"
      />
      <button className="btn_primary">+</button>
    </form>
  );
}
