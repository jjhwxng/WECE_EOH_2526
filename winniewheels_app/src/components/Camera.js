import React, { useState } from "react";
import "./Camera.css";

const Camera = () => {
  const [cameraOn, setCameraOn] = useState(false);
  const [cameraUrl] = useState("http://localhost:5000/camera"); // placeholder URL

  const toggleCamera = () => setCameraOn(!cameraOn);

  return (
    <div className="camera-container">
      <h1>Camera Module</h1>

      <div className="camera-feed">
        {cameraOn ? (
          <img 
            className="camera-stream"
            src={cameraUrl}
            alt="Live Stream Placeholder"
          />
        ) : (
          <div className="camera off">Camera is Off</div>
        )}
      </div>

      <button className="toggle-button" onClick={toggleCamera}>
        {cameraOn ? "Turn Camera Off" : "Turn Camera On"}
      </button>
    </div>
  );
};

export default Camera;
