import userModel from "../models/userModel.js";
import pilotModel from "../models/pilotModel.js";
import jwt from "jsonwebtoken";
export const authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized and token not found" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized and error while token not found",
    });
  }
};

export const authPilot = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized and token not found" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const pilot = await pilotModel.findById(decoded._id);
    req.pilot = pilot;
    return next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized and error while token not found",
    })
  }
};
