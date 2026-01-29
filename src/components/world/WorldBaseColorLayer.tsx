const WorldBaseColorLayer = () => {
  return (
    <div
      className="absolute inset-0 z-0 opacity-30"
      style={{
        backgroundImage: `
            linear-gradient(to bottom, rgba(255,255,255,0.5),transparent)
          `,
      }}
    />
  );
};

export default WorldBaseColorLayer;
