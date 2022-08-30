import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items }) => {
  return (
    <section className="grocery-container">
      {items.map((item, index) => (
        <section key={index} className="grocery-item">
          <p className="title">{item}</p>
          <div>
            <button className="edit-btn">
              <FaEdit />
            </button>
            <button className="delete-btn">
              <FaTrash />
            </button>
          </div>
        </section>
      ))}
    </section>
  );
};

export default List;
