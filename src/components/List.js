import "./List.css";
import tickbox from "../assets/check.svg";
import { getToDos } from "../utils/storage";
import { without } from "../utils/arrays";
import trash from "../assets/trash.svg";

export default function ListElement({ toDoItems, setCurrentToDos }) {
  const handleDeleteClick = (id) => {
    const currentToDos = getToDos();
    const newToDos = without(currentToDos, id);
    localStorage.setItem("todos", JSON.stringify(newToDos));
    setCurrentToDos(newToDos);
  };

  const handleDoneClick = (id) => {
    const toDos = getToDos();
    const todo = toDos.find((todo) => todo.id === id);
    todo.done = !todo.done;
    localStorage.setItem("todos", JSON.stringify(toDos));
    setCurrentToDos(toDos);
  };

  const listItems = toDoItems.map(({ id, text, done }) => (
    <li className="list_item" key={id}>
      <button className="tickbox__btn">
        <img
          className="tickbox"
          src={tickbox}
          alt="check"
          onClick={() => handleDoneClick(id)}
        />
      </button>
      <span className={done ? "list__text list__text--done" : "list__text"}>
        {text}
      </span>
      <button className="tickbox__btn" onClick={() => handleDeleteClick(id)}>
        <img className="tickbox" src={trash} alt="trash" />
      </button>
    </li>
  ));
  return toDoItems && <ul className="list">{listItems}</ul>;
}
