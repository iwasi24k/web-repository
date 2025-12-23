const Background = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-1"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Foreign color */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(255,255,255,0.5) 0%,transparent 100%)
          `,
        }}
      />
    </div>
  );
};

export default Background;
