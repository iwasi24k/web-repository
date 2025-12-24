const WorldGridLayer = () => {
    return (
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
    );
};

export default WorldGridLayer;