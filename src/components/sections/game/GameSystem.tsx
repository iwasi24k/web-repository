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
      <div className="flex flex-col gap-[3svh] pb-[7svh] pt-[20svh] md:gap-0 md:pb-0">
        {/* TopicSection: Overview */}
        <TopicSection
        align="left"
        position="pl-[7svw] pr-[7svw] md:pl-0 md:pr-[50dvw] md:top-[30svh] md:left-[7svw]"
        label={{
            text: "About",
            textColor: VOID_COLORS.BLACK,
            blockColor: VOID_COLORS.YELLOW,
        }}
        title={{
            text: "About",
            textColor: VOID_COLORS.BLACK,
            textSize: "text-[3svh] md:text-[3.25dvh]",
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
            
            // 1. 全体の配置とサイズ (ここでレスポンシブ制御)
            className="
                /* モバイル (デフォルト) */
                relative
                w-[90vw]
                aspect-video
                mx-auto
                mt-10
                
                /* PC (md以上) */
                md:absolute
                md:top-[25svh]
                md:left-[55dvw]
                md:w-[40vw]
                md:aspect-[7/4.5]
            "

            // 2. スライド個別のデザイン (ここもTailwindクラスで指定！)
            // これで md:p-3 などが効くようになります
            itemClassName="
                border-black
                border-[0.1rem] md:border-[0.125rem]
                p-[0.5rem] md:p-[0.75rem]
            "
            
            // 3. スライド間の隙間
            // ここを広げすぎると画像の幅が狭くなり、比率が変わって見えるので注意
            slideGap="10%"

            indicatorActiveColor={VOID_COLORS.GRAY_4}
            indicatorInactiveColor={VOID_COLORS.GRAY_1}
        />
      </div>
    );
};

export default GameSystem;