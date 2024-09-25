import { Outlet } from "react-router";
import "./App.css";
import "react-toastify/dist/ReactTostify.css";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default App;
