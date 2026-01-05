import { VOID_COLORS } from "../../../design/colors";
import TopicSection from "../../../layouts/TopicSection";
// import TransitionButton from "../../ui/TransitionButton";
import gitImage from "../../../assets/gitFlow2.svg";

const Workflow = () => {
  return (
    <div className="flex flex-col gap-[5svh] pl-[7svw] pr-[7svw] pb-[7svh] pt-[20svh] md:gap-[10vh] md:pl-[7vw] md:pr-0 md:pt-[30vh] md:pb-0">
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
          textSize: "text-[3svh] md:text-[3.25dvh]",
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
        className="md:ml-[8vw] md:-mt-[3svh] md:mb-[6svh] w-150 md:w-180"
        src={gitImage}
        alt="Gitフロー図"
      />
      {/* <TransitionButton 
          text="詳細ページへ →" 
          href="/about"
          textColor={VOID_COLORS.WHITE}
          hoverTextColor={VOID_COLORS.WHITE}
          className="ml-[55vw] mb:ml-[80vw] mt-8 md:mt-0 md:mb-[7vh]"
        /> */}
    </div>
  );
};

export default Workflow;
