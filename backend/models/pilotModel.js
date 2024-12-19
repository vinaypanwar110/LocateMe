import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const pilotSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  socketId: {
    type: String,
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },

  vechile: {
    color: {
      type: String,
      required: true,
    },
    plate: {
      type: String,
      required: true,
      unique: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    vechileType: {
      type: String,
      required: true,
      enum: ["car", "motorcycle", "auto"],
    },
  },

  location: {
    lat: {
      type: Number,
    },
    lon: {
      type: Number,
    },
  },
});

pilotSchema.methods.generateAtoken = async function () {
  const pilot = this;
  const token = jwt.sign({ _id: pilot._id.toString() }, process.env.JWT_SECRET);
  return token;
};

pilotSchema.methods.comparePassword = async function (password) {
  const pilot = this;
  return await bcrypt.compare(password, pilot.password);
};


const pilotModel = mongoose.model("pilot", pilotSchema);

export default pilotModel;
