import { VOID_COLORS } from "../../../design/colors";
import TopicSection from "../../../layouts/TopicSection";
import Carousel from "../../ui/Carousel";

import voxelImages0 from "../../../assets/voxel-void0.png";
import voxelImages1 from "../../../assets/voxel-void1.png";
import voxelImages2 from "../../../assets/voxel-void2.png";

const voxelImages = [voxelImages0, voxelImages1, voxelImages2];

const GameFeatures = () => {
  return (
    <div className="flex flex-col gap-1.25 pt-[30vw] pb-[15vw] pl-[7vw] pr-[7vw] md:pt-[25vw] xl:gap-[2.5vw] xl:pl-[48vw] xl:pr-[2vw] xl:pt-[14vw] xl:pb-[7vw]">
      <TopicSection
        align="left"
        label={{
          text: "Monochro × Block",
          textColor: VOID_COLORS.WHITE,
          blockColor: VOID_COLORS.GRAY_3,
        }}
        title={{
          text: "Monochro × Block",
          textColor: VOID_COLORS.BLACK,
          textSize: "text-[20px] md:text-[3.5vw] xl:text-[2vw]",
        }}
        descriptionColor={VOID_COLORS.BLACK}
        description={
          <>
            <p className="mb-4">
              この世界は、上から下へ行くほど暗くなる光のグラデーションに包まれた、白と黒を基調とするモノクロ空間で構成されています。
              <br />
              下層へ進むにつれて光は失われ、空間そのものが沈み込むような印象を与えます。
              <br />
              そこに差し込まれる黄色と紫色が、均衡の崩れた世界と強い違和感を際立たせます。
              <br />
              すべてのオブジェクトは単一のブロックで構成され、「位置・色・動き」だけが意味を持つ設計です。
            </p>
          </>
        }
      />
      {/* TopicSection: Field */}
      <TopicSection
        align="left"
        label={{
          text: "Moving Field Structure",
          textColor: VOID_COLORS.WHITE,
          blockColor: VOID_COLORS.GRAY_4,
        }}
        title={{
          text: "Moving Field Structure",
          textColor: VOID_COLORS.BLACK,
          textSize: "text-[20px] md:text-[3.5vw] xl:text-[2vw]",
        }}
        descriptionColor={VOID_COLORS.BLACK}
        description={
          <>
            <p className="mb-4">
              フィールドを構成する白黒のブロックは、一定時間ごとに上下へと移動します。
              <br />
              地形そのものが動的に変化するため、同じ戦闘状況は訪れません。足場の挙動を読む力が生存時間に直結します。
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
                hidden 
                xl:flex

                xl:absolute
                xl:top-[17vw]
                xl:left-[5vw]
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
        indicatorInactiveColor={VOID_COLORS.GRAY_2}
      />
    </div>
  );
};

export default GameFeatures;
