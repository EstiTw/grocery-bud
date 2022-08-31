import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [alert, setAlert] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(alert);
    if (editMode) {
    //   if(item) 
    // }
    if (item) {
      setList([item, ...list]);
      setItem("");
      setAlert("added");
    }
  };

  const handleClear = () => {
    setList([]);
    setAlert("cleared");
  };

  const handleDelete = (index) => {
    let filtered = [...list];
    filtered.splice(index, 1);
    setList(filtered);
    setAlert("removed");
  };

  const handleEdit = (index) => {
    const item = list[index];
    console.log("item to edit ", item);
    setEditMode(true);
    setItem(item);
  };

  return (
    <section className="section-center">
      {alert && <Alert alertType={alert} />}
      <form className="grocery-form" onSubmit={handleSubmit}>
        <h3>grucery bud</h3>
        <div className="grocery form-control">
          <input
            name="item"
            value={item}
            placeholder="e.g eggs"
            onChange={(e) => setItem(e.target.value)}
            onFocus={() => setAlert("")}
          />
          <button className="btn submit-btn">submit</button>
          <button className="btn submit-btn">edit</button>
        </div>
      </form>
      <List items={list} onDelete={handleDelete} onEdit={handleEdit} />
      {list.length > 0 && (
        <button className="clear-btn" onClick={handleClear}>
          clear items
        </button>
      )}
    </section>
  );
}

export default App;
