// components/TodoList.js

import React from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo } from "../redux/todos";

const TodoList = ({ todos, addTodo, deleteTodo }) => {
  const handleAddTodo = () => {
    const text = prompt("Enter todo:");
    if (text) {
      addTodo(text);
    }
  };

  return (
    <div>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
