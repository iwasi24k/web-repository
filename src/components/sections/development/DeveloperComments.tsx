import { VOID_COLORS } from "../../../design/colors";
import TopicSection from "../../../layouts/TopicSection";

const DeveloperComments = () => {
  return (
    <div className="flex flex-col gap-[10vw] pt-[30vw] pb-[15vw] pl-[7vw] pr-[7vw] md:pt-[25vw] xl:gap-[5vw] xl:pt-[13vw] xl:pb-[15vw]">
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
          textSize: "text-[20px] md:text-[3.5vw] xl:text-[2vw]",
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
