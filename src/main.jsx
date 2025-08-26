import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todo from "./components/todo/Todo.jsx";
import LoginPage from "./components/pages/Login.jsx";
import RegisterPage from "./components/pages/Register.jsx";
import UserPage from "./components/pages/User.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Todo />,
      },
      {
        path: "/login",
        element: (
          <>
            <LoginPage />
          </>
        ),
      },
      {
        path: "/register",
        element: (
          <>
            <RegisterPage />
          </>
        ),
      },
      {
        path: "/user",
        element: (
          <>
            <UserPage />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
