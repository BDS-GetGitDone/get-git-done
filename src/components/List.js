import "./List.css";
import tickbox from "../assets/check.svg";
import { getToDos } from "../utils/storage";
import { without } from "../utils/arrays";
import trash from "../assets/trash.svg";

export default function ListElement({ toDoItems, setCurrentToDos }) {
  const handleClick = (e) => {
    e.preventDefault();
    const item = e.target;
    // const listItem = item.parentElement;
    item.classList.toggle("check");
  };

  const handleDeleteClick = (todo) => {
    const currentToDos = getToDos();
    const newToDos = without(currentToDos, todo);
    localStorage.setItem("todos", JSON.stringify(newToDos));
    setCurrentToDos(newToDos);
  };

  const listItems = toDoItems.map((todo) => (
    <li className="list_item" key={todo}>
      <button className="tickbox__btn">
        <img
          className="tickbox"
          src={tickbox}
          alt="check"
          onClick={handleClick}
        />
      </button>
      <span className="list__text">{todo}</span>
      <button className="tickbox__btn" onClick={() => handleDeleteClick(todo)}>
        <img className="tickbox" src={trash} alt="trash" />
      </button>
    </li>
  ));
  return toDoItems && <ul className="list">{listItems}</ul>;
}
