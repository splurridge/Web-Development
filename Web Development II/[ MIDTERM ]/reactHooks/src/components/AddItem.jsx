import PropTypes from "prop-types";

function AddItem({ newItem, setNewItem, handleSubmit }) {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add Item Here"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" aria-label="Add Item">
        Add
      </button>
    </form>
  );
}

AddItem.propTypes = {
  newItem: PropTypes.string.isRequired,
  setNewItem: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AddItem;
