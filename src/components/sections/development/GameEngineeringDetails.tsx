import { VOID_COLORS } from "../../../design/colors";
import DetailTopic from "../../../layouts/DetailTopic";
import StackItem from "../../ui/StackItem";
import CodeBlock from "../../ui/CodeBlock";

import dx11InitCode from "../../world/details/dx11InitCode";
import debugLibCode from "../../world/details/debugLibCode";
import mathLibCode from "../../world/details/mathLibCode";

const GameEngineeringDetails = () => {
  return (
    <div className="flex flex-col mx-auto items-center w-full pt-[20vw] pb-[20vw] lg:pt-[7vw] lg:pb-[10vw]">
      <DetailTopic
        title={{
          text: "Core Technologies",
          textColor: VOID_COLORS.WHITE,
          textSize: "text-[30px] md:text-[3.5vw] lg:text-[2.5vw]",
        }}
        descriptionColor={VOID_COLORS.WHITE}
        description={
          <div className="flex flex-col gap-10 pt-3 w-full min-w-0">
            <StackItem title="DIRECTX 11 INITIALIZER">
              自作エンジンの描画基盤を構築するために実装。
              <br />
              デバイス・スワップチェイン・レンダーターゲットの生成を行い、
              安定したレンダリング初期環境を確立。
              <CodeBlock>{dx11InitCode}</CodeBlock>
            </StackItem>

            <StackItem title="DEBUG LIBRARY">
              開発効率と不具合解析性を高めるために自作。
              <br />
              コンソール出力・ファイル出力・エラーハンドリングを統合し、
              実行時の状態把握と問題切り分けを容易に。
              <CodeBlock>{debugLibCode}</CodeBlock>
            </StackItem>

            <StackItem title="MATH LIBRARY">
              3Dグラフィックス処理を一貫して扱うために開発。
              <br />
              STL風のインターフェースを採用し、
              ベクトル・行列演算を直感的かつ安全に利用可能。
              <CodeBlock>{mathLibCode}</CodeBlock>
            </StackItem>

            <StackItem title="CUSTOM COMPONENT FRAMEWORK">
              柔軟で再利用可能なゲーム設計を実現するために実装。
              <br />
              オブジェクト指向とコンポーネント指向を融合し、
              機能分離と拡張性を重視した構造を構築。
            </StackItem>
          </div>
        }
      />
    </div>
  );
};

export default GameEngineeringDetails;
