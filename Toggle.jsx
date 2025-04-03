import React, { useState } from "react";

const ToggleComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ textAlign: "center", color:"red",marginTop: "20px" }}>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Content" : "Show Content"}
      </button>
      {isVisible && <p>hello everyone welcome!</p>}
    </div>
  );
};

export default ToggleComponent;
