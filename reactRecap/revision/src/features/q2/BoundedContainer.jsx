import React, { useRef } from "react";

//getBoundingClientRect - where is the DOM element placed on the screen
//clientX ,clientY - where is the mouse on the screen
const BoundedContainer = () => {
  const containerRef = useRef();

  const circleRef = useRef();
  const mouseMoveHandler = (e) => {
    const { top, left } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    circleRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const mouseEnterHandler = () => {
    circleRef.current.style.display = "block";
  };

  const mouseLeaveHandler = () => {
    circleRef.current.style.display = "none";
  };
  return (
    <>
      <div
        className="boundedContainer"
        ref={containerRef}
        onMouseMove={(e) => mouseMoveHandler(e)}
        onMouseEnter={(e) => mouseEnterHandler(e)}
        onMouseLeave={(e) => mouseLeaveHandler(e)}
      >
        <div className="circle" ref={circleRef}></div>
      </div>
    </>
  );
};

export default BoundedContainer;
