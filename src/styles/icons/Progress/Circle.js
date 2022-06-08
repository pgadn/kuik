import * as React from "react";

const CircleSVG = (props) => {
  const { fill, className } = props;

  return (
    <svg
      width="100px"
      height="100px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      style={{
        marginRight: "-2px",
        display: "block",
        backgroundRepeatY: "initial",
        backgroundRepeatX: "initial"        
      }}
      
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#e15b64"
        stroke-width="10"
        r="35"
        stroke-dasharray="164.93361431346415 56.97787143782138"
        transform="matrix(1,0,0,1,0,0)"
        style={{
          transform: "matrix(1, 0, 0, 1, 0, 0)"
        }}
        className={className}
      ></circle>
    </svg>
  );
};

export default CircleSVG;
