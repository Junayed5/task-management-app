import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/router";
import Home from "./components/Home";
import Navbar from "./layout/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
