import React from "react";
import "./index.css";

function GoogleMap() {
  return (
    <div className="App">
      <iframe
        title="CDGI College"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.0491188750975!2d75.88668611496031!3d22.614640885161254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fb28a5660d8b%3A0x2a7a0698a930c80f!2sChameli%20Devi%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1646473430595!5m2!1sen!2sin"
        width="100%"
        height="250"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default GoogleMap;