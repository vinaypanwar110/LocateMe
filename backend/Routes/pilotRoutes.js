import express from "express";
import {
  loginPilot,
  registerPilot,
  profilePilot,
  logoutPilot
} from "../controller/pilotController.js";
import { authPilot } from "../middleware/auth.middleware.js";

const Router = express.Router();

Router.post("/register", registerPilot);
Router.post("/login", loginPilot);
Router.get("/profile", authPilot, profilePilot);
Router.post("/logout", authPilot,logoutPilot);
export default Router;
