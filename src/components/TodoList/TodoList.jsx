/* eslint-disable react/prop-types */
import React from "react";
import { TodoItem } from "../TodoItem/TodoItem";

export const TodoList = ({ todos, removeTodo, toggleTodoComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodoComplete={toggleTodoComplete}
          {...todo}
        />
      ))}
    </ul>
  );
};
