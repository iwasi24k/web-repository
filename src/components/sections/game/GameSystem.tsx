import { VOID_COLORS } from "../../../design/colors";
import TopicSection from "../../../layouts/TopicSection";
import Carousel from "../../ui/Carousel"

import voxelImages0 from "../../../assets/voxel-void0.png";
import voxelImages1 from "../../../assets/voxel-void1.png";
import voxelImages2 from "../../../assets/voxel-void2.png";

const voxelImages = [
  voxelImages0,
  voxelImages1,
  voxelImages2,
];

const GameSystem = () => {
    return (
      <>
        {/* TopicSection: Overview */}
        <TopicSection
        align="left"
        x="7.5%"
        y="30dvh"
        label={{
            text: "About",
            textColor: VOID_COLORS.BLACK,
            blockColor: VOID_COLORS.YELLOW,
            textSize: "0.85rem",
        }}
        title={{
            text: "About",
            textColor: VOID_COLORS.BLACK,
            textSize: "text-3xl",
        }}
        descriptionColor={VOID_COLORS.BLACK}
        description={
            <>
            <p className="mb-4">
                Voxel Voidは、<br />
                すべてが単一のブロックで構成された世界を舞台に、無数の敵を相手に生存を競う「3Dサバイバルアクションゲーム」です。<br />
            </p>
            <p className="-mt-1">
                白と黒のブロックで構成された立体フィールドは、上下運動によって常に形を変え続けます。<br />
                高低差と動的に変化する地形構造が、移動そのものを不安定なものへと変化させ、<br />
                極限までそぎ落とされたビジュアルが、その判断をプレイヤーの感覚に委ねます。
            </p>
            </>
        }
        />
        {/* UI Component */}

        {/* Carousel Component */}
        <Carousel
            images={voxelImages}
            className="absolute top-70 left-245"
            width="780px"
            height="480px"
            imageBorderColor={VOID_COLORS.GRAY_3}
            imageBorderWidth={1.75}
            imagePadding={7}
            slideGap={70}

            indicatorActiveColor={VOID_COLORS.GRAY_4}
            indicatorInactiveColor={VOID_COLORS.GRAY_1}
        />

      </>
    );
};

export default GameSystem;