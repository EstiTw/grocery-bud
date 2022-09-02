import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [editItem, seteditItem] = useState(-1);
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item) {
      showAlert(true, "please enter value", "danger");
    } else if (item && editItem !== -1) {
      const newList = [...list];
      newList[editItem] = { ...newList[editItem], title: item };
      seteditItem(-1);
      showAlert(true, "value changed", "success");
      setList(newList);
      setItem("");
    } else {
      const newItem = { id: new Date().getTime().toString(), title: item };
      setList([newItem, ...list]);
      showAlert(true, "item added to the list", "success");
      setItem("");
    }
  };

  const showAlert = (show = true, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };
  const handleClear = () => {
    setList([]);
    showAlert(true, "empty list", "success");
  };

  const handleDelete = (index) => {
    let filtered = [...list];
    filtered.splice(index, 1);
    setList(filtered);
    showAlert(true, "item removed", "danger");
  };

  const handleEdit = (index) => {
    const item = list[index];
    setItem(item);
    seteditItem(index);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>grucery bud</h3>
        <div className="form-control">
          <input
            name="item"
            value={item}
            placeholder="e.g eggs"
            onChange={(e) => setItem(e.target.value)}
            onFocus={() => setAlert("")}
          />
          <button className="btn submit-btn">
            {editItem == -1 ? "submit" : "edit"}
          </button>
        </div>
      </form>

      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} onDelete={handleDelete} onEdit={handleEdit} />
          <button className="clear-btn" onClick={handleClear}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
