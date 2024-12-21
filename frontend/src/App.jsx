import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Login from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import PilotLogin from "./pages/PilotLogin";
import PilotRegister from "./pages/PilotRegister";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import UserProtectWrapper from "./protect/UserProtectWrapper";
import UserLogout from "./pages/UserLogout";
import PilotHome from "./pages/PilotHome";
import PilotProtectWrapper from "./protect/PilotProtectWrapper";
import PilotLogout from "./pages/PilotLogout";
const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/loginuser" element={<Login />} />
        <Route path="/registeruser" element={<UserRegister />} />
        <Route path="/pilotlogin" element={<PilotLogin />} />
        <Route path="/registerpilot" element={<PilotRegister />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/pilothome"
          element={
            <PilotProtectWrapper>
              <PilotHome />
            </PilotProtectWrapper>
          }
        />
        <Route
          path="/userlogout"
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/pilotlogout"
          element={
            <PilotProtectWrapper>
              <PilotLogout />
            </PilotProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
