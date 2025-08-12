import "./App.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import react from "./assets/react.svg";
import "./components/todo/todo.css";
import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (value) => {
    const newValue = {
      id: Math.floor(Math.random() * 100),
      value: value,
    };
    setTodoList([...todoList, newValue]);
  };

  const delTodo = (id) => {
    const newTodo = newTodo.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList([...newTodo]);
  };
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addTodo={addTodo} />

        {todoList.length === 0 ? (
          <div className="todo-image">
            <img className="logo" src={react} alt="" />
          </div>
        ) : (
          <TodoData todoList={todoList} delTodo={delTodo} />
        )}
      </div>
    </>
  );
};

export default App;
