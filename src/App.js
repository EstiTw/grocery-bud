import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      showAlert(true, "please enter value", "danger");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) return { ...item, title: name };
          return item;
        })
      );
      setEditId(null);
      setIsEditing(false);
      setName("");
      showAlert(true, "value changed", "success");
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([newItem, ...list]);
      setName("");
      showAlert(true, "item added to the list", "success");
    }
  };

  const showAlert = (show = true, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };
  const clearList = () => {
    setList([]);
    showAlert(true, "empty list", "danger");
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    showAlert(true, "item removed", "danger");
  };

  const editItem = (id) => {
    const item = list.find((item) => item.id === id);
    setName(item.title);
    setEditId(id);
    setIsEditing(true);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grucery bud</h3>
        <div className="form-control">
          <input
            name="item"
            value={name}
            placeholder="e.g eggs"
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setAlert("")}
          />
          <button className="btn submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>

      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} onDelete={removeItem} onEdit={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
