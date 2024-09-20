import { GrFormSearch } from "react-icons/gr";
const Form = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value.trim();
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">
        <GrFormSearch />
      </button>

      <input
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
export default Form;
