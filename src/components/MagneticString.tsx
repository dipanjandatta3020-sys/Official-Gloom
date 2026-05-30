import React, { useRef, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'motion/react';

export default function MagneticString() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Spring values for the control point of the bezier curve
  // We use values from 0 to 1 for x, and -1 to 1 for y
  const springConfig = { damping: 4, stiffness: 40 }; // Very bouncy
  const controlY = useSpring(0, springConfig);

  // When mouse moves over the container
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;
    
    // Calculate normalized Y position relative to the center (-1 to 1)
    const normalizedY = ((mouseY / rect.height) - 0.5) * 2;
    
    // Apply a pulling force. The closer to the line, the stronger it pulls?
    // Actually, we just map the mouse Y to the control point
    controlY.set(normalizedY);
  };

  const handleMouseLeave = () => {
    // Snap back to 0
    controlY.set(0);
  };

  // Convert the spring value into an SVG path string
  // The path goes from (0, 50) to (1000, 50) with a control point at (500, 50 + offset)
  const path = useTransform(controlY, (y) => {
    const offset = y * 50; // Max deflection of 50px up or down
    return `M 0 50 Q 500 ${50 + offset} 1000 50`;
  });

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: '100%',
        height: '100px', // Hit area height
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer',
      }}
    >
      <svg 
        width="100%" 
        height="100" 
        viewBox="0 0 1000 100" 
        preserveAspectRatio="none"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <motion.path 
          d={path}
          fill="transparent" 
          stroke="#0D0A1A" 
          strokeWidth="1.5" 
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
