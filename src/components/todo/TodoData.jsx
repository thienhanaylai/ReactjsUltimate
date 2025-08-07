const TodoData = (props) => {
  const { todoList } = props;

  return (
    <>
      <div className="todo-data">
        <div>Learning react</div>
        {todoList.map((item, index) => {
          return (
            <>
              <div className="container-text">
                <p key={index}>{item.value}</p>
                <button>Del</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default TodoData;
