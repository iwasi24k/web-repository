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

export default dx11InitCode;