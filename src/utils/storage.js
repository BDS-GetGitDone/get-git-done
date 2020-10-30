export function getToDos() {
  let toDos = null;
  try {
    toDos = JSON.parse(localStorage.getItem("todos")) || [];
  } catch (error) {
    console.error(error);
    toDos = [];
  }
  return toDos;
}
