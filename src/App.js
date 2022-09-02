import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [alert, setAlert] = useState("");
  const [editItem, seteditItem] = useState(-1);
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      let newList;
      if (editItem !== -1) {
        newList = [...list];
        newList[editItem] = item;
        seteditItem(-1);
        setAlert("changed");
      } else {
        newList = [item, ...list];
        setAlert("added");
      }
      setList(newList);
      setItem("");
    } else {
      setAlert("noValue");
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
    setItem(item);
    seteditItem(index);
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
          <button className="btn submit-btn">
            {editItem == -1 ? "submit" : "edit"}
          </button>
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
