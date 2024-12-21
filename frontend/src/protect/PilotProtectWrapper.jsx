import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PilotDataContext } from "../context/PilotContext";

const PilotProtectWrapper = ({ children }) => {
    const navigate = useNavigate();
    const { pilot, setPilot } = useContext(PilotDataContext);
    const [isLoading, setIsLoading] = useState(true);

    const token = localStorage.getItem("token");

    useEffect(() => {
        const verifyPilot = async () => {
            if (!token) {
                navigate("/pilotlogin");
                return;
            }

            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/pilot/profile`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to authenticate pilot");
                }

                const data = await response.json();
                setPilot(data);
            } catch (error) {
                console.error("Error verifying pilot:", error);
                navigate("/pilotlogin"); 
            } finally {
                setIsLoading(false);
            }
        };

        verifyPilot();
    }, [navigate, token, setPilot]);

    if (isLoading) {
        return <div>Loading...</div>; // Optionally show a loading state
    }

    return <>{children}</>;
};

export default PilotProtectWrapper;
