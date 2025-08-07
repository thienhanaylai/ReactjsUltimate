import "./App.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import react from "./assets/react.svg";
import "./components/todo/todo.css";

const App = () => {
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew />
        <TodoData />
        <div className="todo-image">
          <img className="logo" src={react} alt="" />
        </div>
      </div>
    </>
  );
};

export default App;
