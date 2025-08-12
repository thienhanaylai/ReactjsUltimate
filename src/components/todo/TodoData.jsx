const TodoData = (props) => {
  const { todoList } = props;

  return (
    <>
      <div className="todo-data">
        {todoList.map((item, index) => {
          return (
            <>
              <div className="container-text">
                <p key={index}>{item.value}</p>
                <button>Delete</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default TodoData;
