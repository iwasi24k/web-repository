import heroImage from "../../assets/voxel-void0.png";

const HeroSection = () => {
  return (
    <section id="top" className="relative h-screen">
      <img
        src={heroImage}
        alt="Hero Background"
        className="absolute inset-0 z-10 object-cover w-full h-full"
      />
    </section>
  );
};

export default HeroSection;
