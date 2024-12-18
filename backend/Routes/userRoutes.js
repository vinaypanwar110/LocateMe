import express from "express";

import {
  registerUser,
  loginUser,
  getUserProfile,
  logout,
} from "../controller/userController.js";
import { authUser } from "../middleware/auth.middleware.js";

const Router = express.Router();

Router.post("/register", registerUser);
Router.post("/login", loginUser);
Router.get("/profile", authUser, getUserProfile);
Router.post("/logout", logout);

export default Router;
