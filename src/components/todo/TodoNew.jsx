import { useState } from "react";

/* eslint-disable react/prop-types */
const TodoNew = (props) => {
  const { addTodo } = props;
  const [value, setValue] = useState("");
  //khi click add sẽ lấy value thêm vào danh sách todo bằng hàm addTodo truyền từ App
  const handleClick = () => {
    addTodo(value);
    setValue("");
  };
  //khi nhập vào input sẽ lưu dữ liệu vào value
  const handleText = (text) => {
    setValue(text);
  };
  return (
    <>
      <div className="todo-new">
        <input
          type="text"
          name=""
          id=""
          onChange={(event) => handleText(event.target.value)}
          value={value}
        />
        <button onClick={handleClick}>Add</button>
      </div>
    </>
  );
};

export default TodoNew;
