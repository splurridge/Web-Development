import PropTypes from "prop-types";

function ViewItem({ item, handleDelete, handleUpdate }) {
  return (
    <div key={item.id}>
      <div>
        <span>Id: {item.id}</span>
        <span>Title: {item.title}</span>
      </div>
      <div>
        <button
          onClick={() => handleDelete(item.id)}
        >
          Delete
        </button>
        <button
          style={{ marginRight: "10px" }}
          onClick={() => handleUpdate(item.id)}
        >
          Update
        </button>
      </div>
    </div>
  );
}

ViewItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default ViewItem;
