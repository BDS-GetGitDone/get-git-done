import "./List.css";
import tickbox from "../assets/tickbox.svg";

export default function ListElement({ toDoItems }) {
  const handleClick = (e) => {
    e.preventDefault();
    const item = e.target;
    const listItem = item.parentElement;
    listItem.classList.toggle("check");
  };
  const listItems = toDoItems.map((todo) => (
    <li className="list_item" key={todo}>
      <button className="tickbox__btn" onClick={handleClick}>
        <img className="tickbox" src={tickbox} alt="check" />
      </button>
      {todo}
    </li>
  ));
  return <ul className="list">{listItems}</ul>;
}
