import "./List.css";
import tickbox from "../assets/tickbox.svg";

export default function ListElement({ toDoItems }) {
  const listItems = toDoItems.map((todo) => (
    <li className="list_item" key={todo}>
      <button className="tickbox__btn">
        <img className="tickbox" src={tickbox} alt="check" />
      </button>
      {todo}
    </li>
  ));
  return <ul className="list">{listItems}</ul>;
}
