type WorldSectionProps = {
    id?: string;
    bgColor: string;
    sectionSize?: string;
    children: React.ReactNode;
};

const WorldSection = ({ id, bgColor, sectionSize = "min-h-screen", children }: WorldSectionProps) => {
  return (
    <section id={id} className={`relative ${sectionSize} overflow-hidden scroll-mt-16`}>
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