type WorldSectionProps = {
    bgColor: string;
    sectionSize?: string;
    children: React.ReactNode;
};

const WorldSection = ({ bgColor, sectionSize = "min-h-screen", children }: WorldSectionProps) => {
  return (
    <section className={`relative ${sectionSize} overflow-hidden`}>
      {/* 背景 */}
      <div
        className={`absolute inset-0 z-10`}
        style={ { backgroundColor: bgColor } }
      />

      {/* UI */}
      <div className="relative z-30">
        {children}
      </div>
    </section>
  );
};

export default WorldSection;