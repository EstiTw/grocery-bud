import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, onDelete, onEdit }) => {
  return (
    <section className="grocery-container">
      {items.map((item, index) => (
        <section key={index} className="grocery-item">
          <p className="title">{item}</p>
          <div>
            <button className="edit-btn" onClick={() => onEdit(index)}>
              <FaEdit />
            </button>
            <button className="delete-btn" onClick={() => onDelete(index)}>
              <FaTrash />
            </button>
          </div>
        </section>
      ))}
    </section>
  );
};

export default List;
