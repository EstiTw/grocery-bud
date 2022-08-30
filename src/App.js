import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [alert, setAlert] = useState("");
  // const [isAlert, setIsAlert] = useState(false);
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(alert);
    if (item) {
      setList([item, ...list]);
      setItem("");
      setAlert("success");
    }
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
        </div>
      </form>
      <List items={list} />
      {list.length > 0 && <button className="clear-btn">clear items</button>}
    </section>
  );
}

export default App;
