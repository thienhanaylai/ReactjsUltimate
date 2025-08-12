const TodoData = (props) => {
  const { todoList, delTodo } = props;
  const handleDel = (id) => {
    delTodo(id);
  };
  return (
    <>
      <div className="todo-data">
        {todoList.map((item) => {
          return (
            <>
              <div className="container-text">
                <p key={item.id}>{item.value}</p>
                <button
                  onClick={() => {
                    handleDel(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default TodoData;
