import "./App.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import react from "./assets/react.svg";
import "./components/todo/todo.css";
import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, value: "Learning React" },
  ]);

  const addTodo = (value) => {
    const newValue = {
      id: Math.floor(Math.random() * 100),
      value: value,
    };
    setTodoList([...todoList, newValue]);
  };

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addTodo={addTodo} />
        <TodoData todoList={todoList} />
        <div className="todo-image">
          <img className="logo" src={react} alt="" />
        </div>
      </div>
    </>
  );
};

export default App;
