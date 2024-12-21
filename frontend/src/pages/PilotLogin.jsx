import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { PilotDataContext } from "../context/PilotContext";
import { useNavigate } from "react-router-dom";
const PilotLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { pilot, setPilot } = React.useContext(PilotDataContext);

  const navigate = useNavigate();
  // const [pilotData , setPilotData] = useState({});

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/pilot/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        return toast.error("Invalid Credentials");
      }
      const data = await response.json();

      setPilot(data);
      localStorage.setItem("token", data.token);
      setEmail("");
      setPassword("");
      navigate("/pilothome");
    } catch (error) {
      return toast.error(error.message);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-20 mb-3"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
            alt=""
          />

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-lg font-medium mb-2">What's your email</h3>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              placeholder="email@example.com"
            />

            <h3 className="text-lg font-medium mb-2">Enter Password</h3>

            <input
              className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              type="password"
              placeholder="password"
            />

            <button className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">
              Login
            </button>
          </form>
          <p className="text-center">
            Join a fleet?{" "}
            <Link to="/registerpilot" className="text-blue-600">
              Register as a Pilot
            </Link>
          </p>
        </div>
        <div>
          <Link
            to="/loginuser"
            className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
          >
            Sign in as User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PilotLogin;
