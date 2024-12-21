import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/user/logout`,
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
        navigate("/loginuser");
      } catch (error) {
        console.error(error);
      }
    };

    logout();
  }, [navigate, token]);

  return <div>Logging out...</div>;
};

export default UserLogout;
