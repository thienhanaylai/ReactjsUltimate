import "./components/todo/todo.css";
import { Outlet } from "react-router-dom";
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
