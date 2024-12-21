import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import PilotDetail from "../PilotComponents/PilotDetail";
import RidePopUp from "../PilotComponents/RidePopUp";
import { useGSAP } from "@gsap/react";
import ConfirmRidePopUp from "../PilotComponents/ConfirmRidePopUp";

const PilotHome = () => {
  const [ridePopUpPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopUpPanel, setConfirmRidePopupPanel] = useState(false);

  const ridePopUpRef = useRef(null);
  const confirmRidePopUpRef = useRef(null);

  useGSAP(() => {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ridePopUpRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ridePopUpPanel]);

  useGSAP(() => {
    if (confirmRidePopUpPanel) {
      gsap.to(confirmRidePopUpRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePopUpRef.current, {
        transform: "translateY(100%)",
      });
    }
  },[confirmRidePopUpPanel]);

  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/pilothome"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
        <PilotDetail />
      </div>
      <div
        ref={ridePopUpRef}
        className="fixed w-full z-10 bottom-0  translate-y-full bg-white px-3 py-10 pt-12"
      >
        <RidePopUp
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
        />
      </div>
      <div
        ref={confirmRidePopUpRef}
        className="fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
      >
        <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
      </div>
    </div>
  );
};

export default PilotHome;
