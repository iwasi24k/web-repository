import { VOID_COLORS } from "../../../design/colors";
import DetailTopic from "../../../layouts/DetailTopic";
import StackItem from "../../ui/StackItem";

const WebEngineeringDetails = () => {
  return (
    <div className="flex flex-col mx-auto items-center pt-[20vw] pb-[20vw] xl:pt-[7vw] xl:pb-[10vw]">
      <DetailTopic
        title={{
          text: "Technology Selection",
          textColor: VOID_COLORS.WHITE,
          textSize: "text-[30px] md:text-[3.5vw] xl:text-[2.5vw]",
        }}
        descriptionColor={VOID_COLORS.WHITE}
        description={
          <div className="flex flex-col gap-10 pt-3">
            <StackItem title="REACT">
              ゲーム開発で自作したコンポーネント指向フレームワークの運用経験を活かすため採用。
              <br />
              UIを部品単位で管理可能な、構造化されたコンポーネント設計を実現。
            </StackItem>

            <StackItem title="TYPESCRIPT">
              C++による開発経験から静的型付けの有効性を理解していたため採用。
              <br />
              型定義による事前検証により、実装段階での不具合や見落としを抑制。
            </StackItem>

            <StackItem title="TAILWIND CSS">
              個人開発におけるCSS分離管理の煩雑さを回避するため採用。
              ユーティリティクラスにより、デザインと実装の乖離を最小化。
            </StackItem>

            <StackItem title="VITE">
              React + TypeScript に最適化されたビルドツールとして採用。
              高速な開発サーバーとビルドにより、開発効率を重視。
            </StackItem>

            <StackItem title="NODE.JS">
              Viteの実行環境およびパッケージ管理基盤として利用。
              npmによる依存関係管理で安定したビルド環境を構築。
            </StackItem>

            <StackItem title="ESLINT / PRETTIER">
              記述ルールの統一とコード品質維持を目的として導入。
              構文ミスを早期検出し、可読性と保守性を確保。
            </StackItem>
          </div>
        }
      />
    </div>
  );
};

export default WebEngineeringDetails;
