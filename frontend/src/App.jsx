import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import PilotLogin from "./pages/PilotLogin";
import PilotRegister from "./pages/PilotRegister";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginuser" element={<Login />} />
        <Route path="/registeruser" element={<UserRegister />} />
        <Route path="/pilotlogin" element={<PilotLogin />} />
        <Route path="/registerpilot" element={<PilotRegister/>} />
      </Routes>
    </div>
  );
};

export default App;
