import { VOID_COLORS } from "../../../design/colors";
import TopicSection from "../../../layouts/TopicSection";
import Gear from "../../ui/Gear";
import gitImage from "../../../assets/texture/gitFlow2.svg";

const Workflow = () => {
  return (
    <div className="flex flex-col gap-[10vw] pt-[30vw] pb-[15vw] pl-[7vw] pr-[7vw] md:pt-[25vw] lg:gap-[5vw] lg:pt-[13vw] lg:pb-[5vw]">
      <TopicSection
        align="left"
        label={{
          text: "Git Workflow",
          textColor: VOID_COLORS.WHITE,
          blockColor: VOID_COLORS.PURPLE,
        }}
        title={{
          text: "Git Workflow",
          textColor: VOID_COLORS.WHITE,
          textSize: "text-[20px] md:text-[3.5vw] lg:text-[2vw]",
        }}
        descriptionColor={VOID_COLORS.WHITE}
        description={
          <>
            <p className="-mb-4">
              疑似チーム開発：個人開発で、Git/GitHubを用いて「PC
              A（デスクトップPC）」と「PC
              B（ノートPC）」を使い分け、複数人による共同開発を再現。
              <br />
              ブランチ戦略：
              feature/ブランチでの機能開発、developへのマージ、mainでのリリース管理を徹底。
              <br />
              CI/CD： GitHub
              Actionsを活用。プルリクエスト時に自動コードレビューやビルドチェックが走る仕組みを構築。
              <br />
            </p>
          </>
        }
      />
      <img
        className="lg:ml-[7vw] w-[85vw] lg:w-[40vw] user-select-none pointer-events-none"
        src={gitImage}
        alt=""
        aria-hidden="true"
      />
      <Gear
        className="absolute -top-[15vw] -right-[25vw] user-select-none pointer-events-none opacity-20 lg:opacity-30"
        size="w-[60vw]"
        duration={50}
        direction="ccw"
      />
    </div>
  );
};

export default Workflow;
