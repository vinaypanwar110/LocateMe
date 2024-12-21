import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const PilotLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    const logout = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/pilot/logout`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Logout failed");
        }

        // Clear the token and redirect
        localStorage.removeItem("token");
        navigate("/pilotlogin");
      } catch (error) {
        console.error(error);
      }
    };

    logout();
  }, [navigate, token]);

  return <div>Logging out...</div>;
};

export default PilotLogout;
