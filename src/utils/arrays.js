export function without(array, id) {
  const newArray = array.filter((todo) => todo.text !== id);
  return newArray;
}
