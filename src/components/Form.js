export default function FormElement() {
  const handleSumbit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSumbit}>
      <input className="input" type="text" />
      <button className="btn_primary">+</button>
    </form>
  );
}
