type WorldDarknessLayerProps = {
    opacity: number;
};

const WorldDarknessLayer = ({ opacity }: WorldDarknessLayerProps) => {
    return (
        <div
            className="absolute inset-0 z-0 pointer-events-none bg-void-black"
            style={{ opacity }}
        />
    );
};

export default WorldDarknessLayer;