import { Button, Input } from "antd";

const UserForm = () => {
  return (
    <>
      <div className="user-form">
        <div>
          <div>
            <span>FullName</span>
            <Input />
          </div>
          <div>
            <span>Email</span>
            <Input />
          </div>
          <div>
            <span>Password</span>
            <Input.Password />
          </div>
          <div>
            <span>Phone</span>
            <Input />
          </div>
        </div>
        <div>
          <Button type="primary">Create user</Button>
        </div>
      </div>
    </>
  );
};

export default UserForm;
