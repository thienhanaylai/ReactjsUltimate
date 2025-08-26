import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="Header">
        <ul>
          <li>
            <NavLink to="/">TodoList</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/user">User</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
