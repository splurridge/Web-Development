import { useEffect, useState } from "react";
import "./App.css";
import AddItem from "./components/AddItem";

function App() {
  const [items, setItems] = useState([]); //  list
  const [newItem, setNewItem] = useState(""); // string
  const [isUpdate, setIsUpdate] = useState(false); // boolean
  const [idToUpdate, setIdToUpdate] = useState(0); // number of elements in the list

  useEffect(() => {
    if (localStorage.getItem("items")) {
      setItems(JSON.parse(localStorage.getItem("items")));
    } else {
      fetch("https://jsonplaceholder.typicode.com/albums")
        .then((response) => response.json())
        .then((data) => {
          setItems(data);
          localStorage.setItem("items", JSON.stringify(data));
        });
    }
  }, []);
  

  const addItem = (title) => {
    const lastItem = items[items.length - 1];
    const id = lastItem ? lastItem.id + 1 : 1;
    // const userId = lastItem ? lastItem.userId + 1 : 1;
    
    const newItem = { id, title };
    // [{1, "Hello"}, {2, "Choochoo"}]
  
    const updatedItems = isUpdate
      ? items.map((item) => (item.id === idToUpdate ? { ...item, title } : item))
      : [...items, newItem];
  
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
    setIsUpdate(false);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    setNewItem("");
    addItem(newItem);
    setNewItem("");
  };
  

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  const handleUpdate = (id) => {
    const searchItem = items.find((item) => item.id === id);
    setNewItem(searchItem.title);
    setIsUpdate(true);
    setIdToUpdate(id);
  };

  return (
    <div className="App">
      <AddItem
        style={{ marginRight: "10px" }}
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      {items.map((item) => (
        <div key={item.id}>
          <div>
            <span>ID: {item.id}</span>
            <br />
            <span>Title: {item.title}</span>
          </div>
          <div>
            <button
              style={{ marginRight: "10px" }}
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
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;