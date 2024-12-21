import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res, next) => {
  try {
    const { fullname, email, password } = req.body;

    if (!fullname.firstname || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 8);

    const user = await userModel.create({
      fullname: { firstname: fullname.firstname, lastname: fullname.lastname },
      email,
      password: hashPassword,
    });

    const token = await user.generateAuthToken();

    return res.status(201).json({ success: true, token, user });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });
    }

    const token = await user.generateAuthToken();

    res.cookie("token", token);
    console.log(user);
    return res.status(200).json({ success: true, token, user });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

export const getUserProfile = async (req, res, next) => {
  return res.status(200).json({ success: true, user: req.user });
};

export const logout = async (req, res, next) => {
  try {
    res.clearCookie("token");
    return res
      .status(200)
      .json({ success: true, message: "Logout successful" });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
