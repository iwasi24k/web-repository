import heroImage from "../../assets/voxel-void0.png";

const HeroSection = () => {
  const style: React.CSSProperties = {
    width: "100%",
    aspectRatio: `${window.screen.width} / ${window.screen.height}`,
    height: "auto",
  };

  return (
    <section
      id="top"
      className="w-full overflow-hidden bg-black"
      style={style}
    >
      <img
        src={heroImage}
        alt="Hero Background"
        className="block w-full h-full object-cover"
      />
    </section>
  );
};

export default HeroSection;
