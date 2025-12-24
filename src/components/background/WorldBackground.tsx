import WorldBaseColorLayer from "./WorldBaseColorLayer";
import WorldGridLayer from "./WorldGridLayer";
import WorldDarknessLayer from "./WorldDarknessLayer";
import {WorldBlocksLayer} from './WorldBlocksLayer';

const WorldBackground = () => {
    return (
        <div>
            <WorldBaseColorLayer />
            <WorldGridLayer />
            <div className="relative min-h-[300vh]">
                <WorldDarknessLayer opacity={0.7} />
                <WorldBlocksLayer />
            </div>
        </div>
    )
};

export default WorldBackground;