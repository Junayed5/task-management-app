import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/router";
import Home from "./components/Home";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Navbar />
      <Home />
    </>
  );
}

export default App;
