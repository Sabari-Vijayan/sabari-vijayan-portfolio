   // src/components/GridBackground.jsx
const GridBackground = ({ size = '50px', color = '#808080', opacity = '0.15' }) => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none" 
      style={{
        backgroundImage: `
          linear-gradient(to right, ${color} 1px, transparent 1px), 
          linear-gradient(to bottom, ${color} 1px, transparent 1px)
        `,
        backgroundSize: `${size} calc(${size} + 20px)`,
        opacity: opacity,
        zIndex: 0
      }}
    />
  );
};

export default GridBackground;
