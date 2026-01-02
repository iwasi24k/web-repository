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

const GameFeatures = () => {
  return (
    <div className="flex flex-col gap-[3svh] pb-[7svh] pt-[20svh] pl-[7svw] pr-[7svw] md:gap-0 md:pb-0 md:pl-0 md:pr-[2vw]">
      {/* TopicSection: Voxel */}
      <TopicSection
      align="left"
      position="
        md:top-[26.5dvh]
        md:left-[50vw]
      "
      label={{
          text: "Single Block World",
          textColor: VOID_COLORS.WHITE,
          blockColor: VOID_COLORS.GRAY_2,
      }}
      title={{
          text: "Single Block World",
          textColor: VOID_COLORS.BLACK,
          textSize: "text-[3svh] md:text-[3.25dvh]",
      }}
      descriptionColor={VOID_COLORS.BLACK}
      description={
          <>
          <p className="mb-4">
              この世界に存在する全てのオブジェクトは、単一のブロックで構成されています。<br />
              装飾や余分な形状を排除し、「位置・色・動き」だけが意味を持つ世界。

              視覚情報は最小限ですが、判断に必要な要素が揃っています。<br />
          </p>
          </>
      }
      />
      {/* TopicSection: Void */}
      <TopicSection
      align="left"
      position="
        md:top-[48dvh]
        md:left-[50vw]
      "
      label={{
          text: "Monochro Color World",
          textColor: VOID_COLORS.WHITE,
          blockColor: VOID_COLORS.GRAY_3,
      }}
      title={{
          text: "Monochro Color World",
          textColor: VOID_COLORS.BLACK,
          textSize: "text-[3svh] md:text-[3.25dvh]",
      }}
      descriptionColor={VOID_COLORS.BLACK}
      description={
          <>
          <p className="mb-4">
              世界は、上から下へ行くほど徐々に暗くなる光のグラデーションに包まれています。<br />
              上層では視界が保たれていますが、下層へ向かうほど光は失われ、空間そのものが沈み込むような印象を与えます。<br />
              この世界の基調は、白と黒のみ。そこに、黄色と紫色という僅かな異色が混ざることで、均衡の崩れた空間と強い違和感を演出しています。
          </p>
          </>
      }
      />
      {/* TopicSection: Field */}
      <TopicSection
      align="left"
      position="
        md:top-[72.5dvh]
        md:left-[50vw]
      "
      label={{
          text: "Moving Field Structure",
          textColor: VOID_COLORS.WHITE,
          blockColor: VOID_COLORS.GRAY_4,
      }}
      title={{
          text: "Moving Field Structure",
          textColor: VOID_COLORS.BLACK,
          textSize: "text-[3svh] md:text-[3.25dvh]",
      }}
      descriptionColor={VOID_COLORS.BLACK}
      description={
          <>
          <p className="mb-4">
              フィールドを構成する白黒のブロックは、一定時間ごとに上下へと移動します。<br />
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
                hidden md:flex 
                
                /* PC (md以上) */
                md:absolute
                md:top-[30svh]
                md:left-[5dvw]
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
            indicatorInactiveColor={VOID_COLORS.GRAY_2}
        />

    </div>
  );
};

export default GameFeatures;