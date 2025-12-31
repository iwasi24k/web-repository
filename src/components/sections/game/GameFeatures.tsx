import { VOID_COLORS } from "../../../design/colors";
import TopicSection from "../../../layouts/TopicSection";
import Carousel from "../../ui/Carousel"

const GameFeatures = () => {
  return (
    <>
      {/* TopicSection: Voxel */}
      <TopicSection
      align="left"
      x="50%"
      y="26.5dvh"
      label={{
          text: "Single Block World",
          textColor: VOID_COLORS.WHITE,
          blockColor: VOID_COLORS.GRAY_2,
          textSize: "0.85rem",
      }}
      title={{
          text: "Single Block World",
          textColor: VOID_COLORS.BLACK,
          textSize: "text-3xl",
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
      x="50%"
      y="48dvh"
      label={{
          text: "Monochro Color World",
          textColor: VOID_COLORS.WHITE,
          blockColor: VOID_COLORS.GRAY_3,
          textSize: "0.85rem",
      }}
      title={{
          text: "Monochro Color World",
          textColor: VOID_COLORS.BLACK,
          textSize: "text-3xl",
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
      x="50%"
      y="72.5dvh"
      label={{
          text: "Moving Field Structure",
          textColor: VOID_COLORS.WHITE,
          blockColor: VOID_COLORS.GRAY_4,
          textSize: "0.85rem",
      }}
      title={{
          text: "Moving Field Structure",
          textColor: VOID_COLORS.BLACK,
          textSize: "text-3xl",
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
          images={[
              "src/assets/test.png",
              "src/assets/1.jpg",
          ]}
          className="absolute top-70 left-25"
          width="780px"
          height="480px"
          imageBorderColor={VOID_COLORS.GRAY_3}
          imageBorderWidth={1.75}
          imagePadding={7}
          slideGap={70}

          indicatorActiveColor={VOID_COLORS.GRAY_4}
          indicatorInactiveColor={VOID_COLORS.GRAY_2}
      />

    </>
  );
};

export default GameFeatures;