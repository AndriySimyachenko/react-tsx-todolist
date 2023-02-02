/* eslint-disable react/prop-types */
import React from "react";

export const TodoItem = ({
  id,
  text,
  completed,
  removeTodo,
  toggleTodoComplete,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => removeTodo(id)}>
        &times;
      </span>
    </li>
  );
};
