import "./List.css";
import tickbox from "../assets/tickbox.svg";
import { getToDos } from "../utils/storage";
import { without } from "../utils/arrays";

export default function ListElement({ toDoItems, setCurrentToDos }) {
  const handleClick = (e) => {
    e.preventDefault();
    const item = e.target;
    const listItem = item.parentElement;
    listItem.classList.toggle("check");
  };

  const handleDeleteClick = (todo) => {
    const currentToDos = getToDos();
    const newToDos = without(currentToDos, todo);
    localStorage.setItem("todos", JSON.stringify(newToDos));
    setCurrentToDos(newToDos);
  };

  const listItems = toDoItems.map((todo) => (
    <li className="list_item" key={todo}>
      <button className="tickbox__btn" onClick={handleClick}>
        <img className="tickbox" src={tickbox} alt="check" />
      </button>
      <button className="tickbox__btn" onClick={() => handleDeleteClick(todo)}>
        🗑
      </button>
      {todo}
    </li>
  ));
  return toDoItems && <ul className="list">{listItems}</ul>;
}
