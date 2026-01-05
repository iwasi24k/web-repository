import { VOID_COLORS } from "../../../design/colors";
import TopicSection from "../../../layouts/TopicSection";

const DeveloperComments = () => {
  return (
    <div className="flex flex-col gap-[5svh] pl-[7svw] pr-[7svw] pb-[7svh] pt-[20svh] md:gap-[10vh] md:pl-[7vw] md:pr-0 md:pt-[30vh] md:pb-0">
      <TopicSection
        align="left"
        label={{
          text: "Comments",
          textColor: VOID_COLORS.WHITE,
          blockColor: VOID_COLORS.PURPLE,
        }}
        title={{
          text: "Comments",
          textColor: VOID_COLORS.WHITE,
          textSize: "text-[3svh] md:text-[3.25dvh]",
        }}
        descriptionColor={VOID_COLORS.WHITE}
        description={
          <>
            <p className="mb-4">
              Voxel
              Voidは、リアルでも派手でもない、抽象的で研ぎ澄まされた3D体験を目指しています。
              <br />
            </p>
            <p className="-mt-1">
              「単一ブロックのVoxel感×白黒Voidの静寂×変動する足場」が三位一体となり、他にない"ミニマルで緊張感のある立体空間"が特徴です。
              <br />
              シンプルでありながら奥行のある世界観とそれを支える独自構造を大切に制作しておりますので、ぜひその空気感を楽しんでいただければ幸いです。
            </p>
          </>
        }
      />
    </div>
  );
};

export default DeveloperComments;
