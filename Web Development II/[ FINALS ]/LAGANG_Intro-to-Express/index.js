const express = require("express");

const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

const items = [];



app.get("/items", async (request, response) => {
  return response.status(200).json({ data: items });
});



app.get("/items/:id", async (request, response) => {
  const foundItem = items.find((obj) => obj.id === Number(request.params.id));

  if (!foundItem) {
    return response.status(404).json({ message: "Error: Item not found" });
  }
  return response.status(200).json({ data: foundItem });
});



app.put("/update-items/:id", async (request, response) => {
  const itemId = Number(request.params.id);
  const updatedName = request.body.name;

  const itemIndex = items.findIndex((obj) => obj.id === itemId);

  if (itemIndex === -1) {
    return response.status(404).json({ message: "Error: Item not found" });
  }

  items[itemIndex].name = updatedName;

  return response.status(200).json({ message: "Successfully updated an item" });
});



app.post("/add-items", async (request, response) => {
  const obj = {
    id: items.length + 1,
    name: request.body.name,
  };

  items.push(obj);
  return response.status(201).json({ message: "Successfully added a new item" });
});



app.delete("/delete-items/:id", async (request, response) => {
  const itemId = Number(request.params.id);

  const itemIndex = items.findIndex((obj) => obj.id === itemId);

  if (itemIndex === -1) {
    return response.status(404).json({ message: "Error: Item not found" });
  }

  items.splice(itemIndex, 1);

  return response.status(200).json({ message: "Successfully deleted an item" });
});

app.listen(port, () => console.log(`Server running on port ${port}`));