import { useState } from "react";
import { getToDos } from "../utils/storage";
import "./Form.css";
import plus from "../assets/plus.svg";

export default function FormElement({ setCurrentToDos }) {
  const handleSumbit = (e) => {
    e.preventDefault();
    const toDos = getToDos();
    const newToDos = [...toDos, inputText];
    setInputText("");
    localStorage.setItem("todos", JSON.stringify(newToDos));
    setCurrentToDos(getToDos);
  };
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSumbit}>
      <input
        placeholder="Get this Git done"
        onChange={handleChange}
        value={inputText}
        className="input"
        type="text"
        required="true"
      />
      <button className="btn_primary">
        <img src={plus} alt="" />
      </button>
    </form>
  );
}
