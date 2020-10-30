export default function ListElement({ toDoItems }) {
  const listItems = toDoItems.map((todo) => (
    <li className="list_item" key={todo}>
      {todo}
    </li>
  ));
  return <ul className="list">{listItems}</ul>;
}
