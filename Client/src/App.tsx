import "./App.css";
import Homepage from "./Pages/Home/Homepage";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Home/login";
import Register from "./Pages/Home/register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
    </Routes>
  );
}

export default App;
