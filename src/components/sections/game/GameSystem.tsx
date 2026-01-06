import { VOID_COLORS } from "../../../design/colors";
import TopicSection from "../../../layouts/TopicSection";
import Carousel from "../../ui/Carousel";

import voxelImages0 from "../../../assets/voxel-void0.png";
import voxelImages1 from "../../../assets/voxel-void1.png";
import voxelImages2 from "../../../assets/voxel-void2.png";

const voxelImages = [voxelImages0, voxelImages1, voxelImages2];

const GameSystem = () => {
  return (
    <div className="flex flex-col gap-1.25 pt-[30vw] pb-[15vw] md:pt-[25vw] xl:pt-[13vw] xl:gap-[10vw] xl:pb-[35vw]">
      {/* TopicSection: Overview */}
      <TopicSection
        align="left"
        position="pl-[7vw] pr-[7vw] xl:pr-[40vw]"
        label={{
          text: "About",
          textColor: VOID_COLORS.BLACK,
          blockColor: VOID_COLORS.YELLOW,
        }}
        title={{
          text: "About",
          textColor: VOID_COLORS.BLACK,
          textSize: "text-[20px] md:text-[3.5vw] xl:text-[2vw]",
        }}
        descriptionColor={VOID_COLORS.BLACK}
        description={
          <>
            <p className="mb-4">
              Voxel Voidは、
              <br />
              すべてが単一のブロックで構成された世界を舞台に、無数の敵を相手に生存を競う「3Dサバイバルアクションゲーム」です。
              <br />
            </p>
            <p className="-mt-1">
              白と黒のブロックで構成された立体フィールドは、上下運動によって常に形を変え続けます。
              <br />
              高低差と動的に変化する地形構造が、移動そのものを不安定なものへと変化させ、
              <br />
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
                relative
                w-[90vw]
                aspect-video
                mx-auto
                mt-[10vw]

                md:w-[80vw]
                md:mt-[45vw]

                xl:absolute
                xl:top-[15vw]
                xl:left-[55vw]
                xl:w-[40vw]
                xl:aspect-[7/4.5]
            "
        // 2. スライド個別のデザイン (ここもTailwindクラスで指定！)
        // これで md:p-3 などが効くようになります
        itemClassName="
                border-black
                border-[0.1rem] xl:border-[0.125rem]
                p-[0.5rem] xl:p-[0.75rem]
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
