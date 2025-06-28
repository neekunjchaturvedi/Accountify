import "./App.css";
import Homepage from "./Pages/Home/Homepage";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Home/login";
import Register from "./Pages/Home/register";
import Layout from "./components/Main/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />

      <Route path="/page" element={<Layout />}>
        <Route path="dashboard" element={<>Dashboard</>} />
        <Route path="journals" element={<>Dashboard</>} />
        <Route path="ledger" element={<>Dashboard</>} />
        <Route path="finalaccounts" element={<>Dashboard</>} />
        <Route path="reports" element={<>Dashboard</>} />
        <Route path="profile" element={<>Dashboard</>} />
      </Route>
    </Routes>
  );
}

export default App;
