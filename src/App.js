// App.js

import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todosReducer from "./redux/todos";
import TodoList from "./components/TodoList";

const store = createStore(todosReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
