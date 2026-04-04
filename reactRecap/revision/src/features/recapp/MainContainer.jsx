import React, { useRef } from "react";

const MainContainer = () => {
  const containerRef = useRef();
  const circleRef = useRef();
  const mouseEnterHandler = () => {
    circleRef.current.style.display = "block";
  };

  const mouseMoveHandler = (e) => {
    console.log(e.clientX, e.clientY);
    const coords = containerRef.current.getBoundingClientRect();
    const left = coords.left;
    const top = coords.top;
    const x = e.clientX - left;
    const y = e.clientY - top;
    circleRef.current.style.transform = `translate(${x}px,${y}px)`;
  };

  const mouseLeaveHandler = () => {
    circleRef.current.style.display = "none";
  };

  return (
    <div
      style={{
        width: "500px",
        height: "200px",
        border: "1px solid black",
      }}
      ref={containerRef}
      onMouseEnter={mouseEnterHandler}
      onMouseMove={mouseMoveHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <div
        className="circle"
        style={{
          display: "none",
        }}
        ref={circleRef}
      ></div>
    </div>
  );
};

export default MainContainer;
