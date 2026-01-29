import { VOID_COLORS } from "../../../design/colors";
import DetailTopic from "../../../layouts/DetailTopic";
import StackItem from "../../ui/StackItem";
import CodeBlock from "../../ui/CodeBlock";

const dx11InitCode = `// DirectX 11初期化コード
bool Renderer::Initialize(HWND hWnd) {
	// --- Device ---
    m_Device = std::make_unique<Device>();
    if (!m_Device->Initialize()) { 
        LOG_EFF(L"Device Initialize Failed");
        return false; 
    }

	// --- SwapChain ---
    m_SwapChain = std::make_unique<SwapChain>();
    if (!m_SwapChain->Initialize(hWnd, m_Device->GetDevice())) { 
        LOG_EFF(L"SwapChain Initialize Failed");
        return false; 
    }

	// --- RenderTarget ---
    m_RenderTargetManager = std::make_unique<RenderTargetManager>();
    if (!m_RenderTargetManager->Initialize(m_Device->GetDevice(), m_Device->GetContext(), m_SwapChain->GetSwapChain())) { 
        LOG_EFF(L"RenderTarget Initialize Failed");
        return false; 
    }

	// --- DepthStencil ---
    m_DepthStencilState = std::make_unique<DepthStencilState>();
    if (!m_DepthStencilState->Initialize(m_Device->GetDevice())) { 
        LOG_EFF(L"DepthStencil Initialize Failed");
        return false; 
    }

	// --- Viewport ---
    m_ViewportManager = std::make_unique<ViewportManager>();
    if (!m_ViewportManager->Initialize()) { 
        LOG_EFF(L"Viewport Initialize Failed");
        return false; 
    }

	// --- RasterizerState ---
    m_RasterizerStateManager = std::make_unique<RasterizerStateManager>();
    if (!m_RasterizerStateManager->Initialize(m_Device->GetDevice())) { 
        LOG_EFF(L"Rasterizer Initialize Failed");
        return false; 
    }

	// --- BlendState ---
    m_BlendStateManager = std::make_unique<BlendStateManager>();
    if (!m_BlendStateManager->Initialize(m_Device->GetDevice())) { 
        LOG_EFF(L"BlendState Initialize Failed");
        return false; 
    }

	// --- Sampler ---
    m_SamplerManager = std::make_unique<SamplerManager>();
    if (!m_SamplerManager->Initialize(m_Device->GetDevice())) { 
        LOG_EFF(L"Sampler Initialize Failed");
        return false; 
    }

	// --- ConstantBuffer ---
    m_ConstantBufferManager = std::make_unique<ConstantBufferManager>();
    if (!m_ConstantBufferManager->Initialize(m_Device->GetDevice())) { 
        LOG_EFF(L"ConstantBuffer Initialize Failed");
        return false; 
    }

	LOG_IF(L"Renderer Initialize Completed");
    return true;
}`;

const GameEngineeringDetails = () => {
  return (
    <div className="flex flex-col mx-auto items-center pt-[20vw] pb-[20vw] xl:pt-[7vw] xl:pb-[10vw]">
      <DetailTopic
        title={{
          text: "Core Technologies",
          textColor: VOID_COLORS.WHITE,
          textSize: "text-[30px] md:text-[3.5vw] xl:text-[2.5vw]",
        }}
        descriptionColor={VOID_COLORS.WHITE}
        description={
          <div className="flex flex-col gap-10 pt-3">
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
            </StackItem>

            <StackItem title="MATH LIBRARY">
              3Dグラフィックス処理を一貫して扱うために開発。
              <br />
              STL風のインターフェースを採用し、
              ベクトル・行列演算を直感的かつ安全に利用可能。
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
