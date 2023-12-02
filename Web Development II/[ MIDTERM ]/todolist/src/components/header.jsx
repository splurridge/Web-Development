function header() {
  return (
    <header>
      <h1>To Do List</h1>
      <form className="newTaskForm">
        <input placeholder="Enter New Task" type="text" />
        <button>Submit</button>
      </form>
    </header>
  );
}

export default header;
