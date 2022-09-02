import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, onDelete, onEdit }) => {
  return (
    <section className="grocery-container">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div>
              <button className="edit-btn" onClick={() => onEdit(id)}>
                <FaEdit />
              </button>
              <button className="delete-btn" onClick={() => onDelete(id)}>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default List;
