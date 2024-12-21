import React, { useState, createContext } from "react";

export const PilotDataContext = createContext();

const PilotContext = ({ children }) => {
  const [ pilot, setPilot ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const updatePilot = (pilotData) => {
        setPilot(pilotData);
    };

    const value = {
        pilot,
        setPilot,
        isLoading,
        setIsLoading,
        error,
        setError,
        updatePilot
    };


  return (
    <div>
      <PilotDataContext.Provider value={value}>
        {children}
      </PilotDataContext.Provider>
    </div>
  );
};

export default PilotContext;
