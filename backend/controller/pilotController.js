import pilotModel from "../models/pilotModel.js";
import bcrypt from "bcrypt";
export const registerPilot = async (req, res, next) => {
  try {
    const { fullname, email, password, status, vehicle, location } = req.body;

    if (
      !fullname.firstname ||
      !fullname.lastname ||
      !email ||
      !password ||
      !vehicle.plate ||
      !vehicle.capacity ||
      !vehicle.color ||
      !vehicle.vehicleType
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter full detail" });
    }

    const isAlready = await pilotModel.findOne({ email });

    if (isAlready) {
      return res
        .status(400)
        .json({ success: false, message: "User already exist" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

  
    const pilot = await pilotModel.create({
      fullname: {
        firstname: fullname.firstname,
        lastname: fullname.lastname,
      },
      email,
      password: hashPassword,
      status,
      vehicle: {
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType,
      },
      location: {
        lat: location?.lat || 0,
        lon: location?.lon || 0,
      },
    });

    // await pilot.save();

    const token = await pilot.generateAtoken();

    return res.status(200).json({
      success: true,
      message: "Pilot registered successfully",
      token,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const loginPilot = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter full detail" });
    }

    const pilot = await pilotModel.findOne({ email });

    if (!pilot) {
      return res
        .status(401)
        .json({ success: false, message: "user not found" });
    }

    const isMatch = await pilot.comparePassword(password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });
    }

    const token = await pilot.generateAtoken();

    res.cookie("token", token);

    return res.status(200).json({
      success: true,
      message: "Pilot logged in successfully",
      token,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const profilePilot = async (req, res, next) => {
  try {
    const pilot = req.pilot;
    if (!pilot) {
      return res
        .status(401)
        .json({ success: false, message: "Pilot not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Pilot profile",
      pilot,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const logoutPilot = async (req, res, next) => {
  try {
    res.clearCookie("token");
    return res
      .status(200)
      .json({ success: true, message: "Logout successful" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
