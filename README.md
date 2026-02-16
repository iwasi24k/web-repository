# Voxel Void Official Website / Voxel Void 公式サイト

Official website for Voxel Void — a 3D survival action game built with a custom C++ component-based engine.  
自作C++コンポーネント指向エンジンで開発した3Dサバイバルアクションゲーム「Voxel Void」の公式Webサイトです。

[View Live Demo](https://voxel-void.vercel.app/)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---


![Hero Image](./public/Thumbnail.png)

## Overview / 概要

**English**

This project serves two purposes:

1. Present the game's world, system design, and development philosophy  
2. Demonstrate structured front-end engineering aligned with real-world development practices  

The website architecture mirrors the component-oriented design philosophy used in the game engine.

**日本語**

本プロジェクトは以下の2点を目的としています：

1. ゲームの世界観・設計思想・開発構造の提示  
2. 実務水準を意識したフロントエンド設計力の提示  

ゲームエンジンのコンポーネント指向設計思想を、Webアーキテクチャにも反映させています。

---

## Architecture Philosophy / 設計思想

**English**

- Component-based UI structure  
- Clear responsibility boundaries  
- Reusable and isolated modules  
- Minimal dependency surface  

Directory structure:

```
src/
 ├─ components/
 │   ├─ sections/
 │   └─ ui/
 ├─ layout/
 └─ pages/
```

Each section is implemented as an independent React component.

**日本語**

- コンポーネント指向UI設計  
- 責務分離の明確化  
- 再利用可能な独立モジュール構造  
- 依存関係を最小限に抑制  

各セクションは独立したReactコンポーネントとして実装されています。

---

## Tech Stack / 使用技術

### Front-End Core

- React 19  
- TypeScript 5.x  
- Tailwind CSS v4  
- Vite  
- Node.js  

### Tooling & Quality

- ESLint  
- Prettier  
- Git / GitHub  
- GitHub Actions  
- OpenAI API（AIによるPRレビュー）

---

## Technology Rationale / 技術選定理由

### React
**English:** Adopted to leverage experience building a custom component-based C++ game engine.  
**日本語:** C++で構築したコンポーネント方式エンジンの運用経験を活かすため採用。

### TypeScript
**English:** Ensures type safety and early validation, reflecting experience with static typing in C++.  
**日本語:** C++開発経験を踏まえ、静的型付けによる事前検証を実現するため採用。

### Tailwind CSS
**English:** Utility-first styling prevents CSS fragmentation in solo development.  
**日本語:** 個人開発におけるCSS分離管理の煩雑化を防ぐため採用。

### Vite
**English:** Provides high-speed development server and optimized builds.  
**日本語:** 高速な開発環境と最適化ビルドを実現するため採用。

---

## Functional Overview / 機能概要

**English**

- Single-page vertical section layout  
- Scroll-synchronized navigation  
- Active section highlighting  
- Mobile hamburger menu  
- Detail pages via react-router-dom  
- Fully responsive design  
- Static content delivery  

**日本語**

- シングルページ縦構成レイアウト    
- スクロール同期ナビゲーション    
- アクティブセクションのハイライト表示    
- モバイル用ハンバーガーメニュー    
- react-router-domによるセクションルーティング    
- レスポンシブ対応    
- 静的コンテンツ配信構成

---

## Non-Functional Design / 非機能設計

**English**

- Lightweight dependency structure  
- Type-safe implementation  
- ESLint / Prettier enforced consistency  
- Verified on the latest versions of Chrome, Edge, and Safari
- No backend / No API communication  
- Static-first architecture  

**日本語**

- 依存関係を最小化した軽量構造    
- 型安全な実装    
- ESLint / Prettierによるコード品質統制    
- Chrome / Edge / Safari（最新版）で動作確認    
- バックエンドおよびAPI通信なし    
- 静的ファースト設計

---

## Development Workflow / 開発フロー

**English**

To simulate real-world team development:

- Two separate development environments  
- Two GitHub accounts  
- Pull request–based workflow  

**日本語**

実務に近い開発を再現するため：

- 2台のPC  
- 2つのGitHubアカウント  
- プルリクエストベースの開発  

ブランチ運用・レビュー前提の変更管理を実践しました。

---

## CI & AI Code Review / CIとAIレビュー

**English**

This project integrates an automated AI-based code review pipeline using GitHub Actions.

- Triggered on internal Pull Requests    
- Extracts diff only    
- Sends diff to OpenAI API    
- Posts structured review comments    

The system is designed to minimize token usage and keep merge decisions fully manual.


**日本語**

GitHub Actionsを用いたAIコードレビュー基盤を構築しています。

- 内部プルリクエスト時に起動    
- 差分のみ抽出    
- OpenAI APIへ送信    
- 自動レビューコメントを投稿    

トークン使用量を抑制し、マージ判断は必ず人間が行う設計としています。

---

## Getting Started / 実行方法

```bash
git clone https://github.com/iwasi24k/web-repository.git
cd web-repository
npm install
npm run dev
```

Build:

```bash
npm run build
```

---

## Deployment / デプロイ

**English**

- Automated deployment via Vercel    
- Integrated with GitHub Actions

**日本語**

- Vercelによる自動デプロイ  
- GitHub Actions連携  

---

## Future Roadmap / 今後の拡張

**English**

- Introduce Vitest and React Testing Library    
- Extend architecture for backend integration    
- Define performance metrics using Lighthouse

**日本語**

- Vitest + React Testing Library導入  
- バックエンド連携可能な構造拡張  
- Lighthouse等による性能指標明確化  

---

## Evaluation Focus / 評価観点

**English**

This repository emphasizes:

- Architectural clarity  
- Maintainability  
- CI-integrated workflow  
- Engineering structure over visual complexity  

**日本語**

本リポジトリでは以下を重視しています：

- アーキテクチャの明確性    
- 保守性    
- CI統合型ワークフロー    
- 見た目よりも設計構造の一貫性

---

## License

MIT
