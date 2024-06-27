import React, { useState, useRef } from 'react';

const AnimatedButton = ({ text, href }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    updatePosition(e);
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
    updatePosition(e);
  };

  const handleMouseMove = (e) => {
    if (isHovered) {
      updatePosition(e);
    }
  };

  const updatePosition = (e) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPosition({ x, y });
    }
  };

  return (
    <div className="btn-two d-none d-xl-inline-block" ref={buttonRef}>
      <span 
        className={`btn-circle ${isHovered ? 'explode-circle' : 'desplode-circle'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      ></span>
      <a 
        href={href} 
        className="btn-inner"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <span className="btn-text">Donate Now</span>
      </a>
    </div>
  );
};

export default AnimatedButton;