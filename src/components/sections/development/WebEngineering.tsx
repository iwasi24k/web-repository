import { VOID_COLORS } from "../../../design/colors";
import TopicSection from "../../../layouts/TopicSection";

const WebEngineering = () => {
    return (
        <TopicSection
          align="left"
          x="7.5%"
          y="30dvh"
          label={{
            text: "Technology Stack",
            textColor: VOID_COLORS.WHITE,
            blockColor: VOID_COLORS.PURPLE,
            textSize: "0.85rem",
          }}
          title={{
            text: "Technology Stack",
            textColor: VOID_COLORS.WHITE,
            textSize: "text-3xl",
          }}
          descriptionColor={VOID_COLORS.WHITE}
          description={
            <>
              <p className="mb-4">
                言語/API: C++ / DirectX11 <br />
                開発環境: Visual Studio 2022 <br />
                ツール: Git, GitHub, GitHub Actions (CI/CD)
              </p>
            </>
          }
        />
    );
};

export default WebEngineering;