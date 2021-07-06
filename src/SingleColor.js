import React, { useState } from "react";

const SingleColor = ({ rgb, hex, weight, idx }) => {
  const [alert, setAlert] = useState(false);
  const bckgColor = rgb.join(",");
  const hexValue = `#${hex}`;

  const copyValue = () => {
    navigator.clipboard.writeText(hexValue);
    setAlert(true);
    setTimeout(function () {
      setAlert(false);
    }, 3000);
  };

  return (
    <div
      style={{
        backgroundColor: `rgb(${bckgColor})`,
      }}
      className={`color ${idx > 10 && "color-light"}`}
      onClick={copyValue}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </div>
  );
};

export default SingleColor;
