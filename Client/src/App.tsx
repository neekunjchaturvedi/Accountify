import "./App.css";
import Homepage from "./Pages/Home/Homepage";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Home/login";
import Register from "./Pages/Home/register";
import Layout from "./components/Main/Layout";
import Dashboard from "./Pages/Dashboard";
import Journal from "./Pages/Journal";
import Ledger from "./Pages/Ledger";
import FinalAccount from "./Pages/FinalAccount";
import Reports from "./Pages/Reports";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />

      <Route path="/page" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="journals" element={<Journal />} />
        <Route path="ledger" element={<Ledger />} />
        <Route path="final-accounts" element={<FinalAccount />} />
        <Route path="reports" element={<Reports />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
