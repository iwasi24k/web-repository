const debugLibCode = `
#pragma once

// --- Debugビルドでのみ有効 ---
#if _DEBUG
#else
#define DEBUG_NO_USE_LOG
#define DEBUG_NO_USE_MSGBOX
#endif

#ifndef DEBUG_NO_LOG
#ifndef DEBUG_NO_USE_LOG
#include "Logger.h"

// --- ログ初期化&終了処理マクロ ---
#define LOG_INITIALIZE Logger::Initialize()
#define LOG_SHUTDOWN Logger::Shutdown()


// --- 基本ログ(呼び出し元情報なし) ---
#define LOG_I(msg)   Logger::Log(msg, Logger::LogLevel::Info)

// --- ファイル名・行番号付き ---
#define LOG_IF(msg)  Logger::Log(msg, Logger::LogLevel::Info, __FILE__, __LINE__)

// --- ファイル名・行番号・関数名付き ---
#define LOG_IFF(msg) Logger::Log(msg, Logger::LogLevel::Info, __FILE__, __LINE__, __func__)


// --- 基本ログ(呼び出し元情報なし) ---
#define LOG_W(msg)   Logger::Log(msg, Logger::LogLevel::Warning)

// --- ファイル名・行番号付き ---
#define LOG_WF(msg)  Logger::Log(msg, Logger::LogLevel::Warning, __FILE__, __LINE__)

// --- ファイル名・行番号・関数名付き ---
#define LOG_WFF(msg) Logger::Log(msg, Logger::LogLevel::Warning, __FILE__, __LINE__, __func__)


// --- 基本ログ(呼び出し元情報なし) ---
#define LOG_E(msg)   Logger::Log(msg, Logger::LogLevel::Error)

// --- ファイル名・行番号付き ---
#define LOG_EF(msg)  Logger::Log(msg, Logger::LogLevel::Error, __FILE__, __LINE__)

// --- ファイル名・行番号・関数名付き ---
#define LOG_EFF(msg) Logger::Log(msg, Logger::LogLevel::Error, __FILE__, __LINE__, __func__)

#else
// --- ログ初期化&終了処理マクロ無効化 ---
#define LOG_INITIALIZE 
#define LOG_SHUTDOWN 

// --- ログマクロ無効化 ---
#define LOG_I(msg)   ((void)0)
#define LOG_IF(msg)  ((void)0)
#define LOG_IFF(msg) ((void)0)

#define LOG_W(msg)   ((void)0)
#define LOG_WF(msg)  ((void)0)
#define LOG_WFF(msg) ((void)0)

#define LOG_E(msg)   ((void)0)
#define LOG_EF(msg)  ((void)0)
#define LOG_EFF(msg) ((void)0)

#endif // DEBUG_NO_USE_LOG
#endif // DEBUG_NO_LOG

#ifndef DEBUG_NO_MSGBOX
#ifndef DEBUG_NO_USE_MSGBOX
#include "MsgBox.h"

// --- メッセージボックス初期化&終了処理マクロ ---
#define MSGBOX_INITIALIZE(hWnd) MsgBox::SetParentWindow(hWnd)


// --- 基本メッセージボックス(呼び出し元情報なし) ---
#define MSG_INFO(msg)  MsgBox::ShowInfo(msg, L"DebugTool[Info]")

// --- ファイル名・行番号・関数名付き ---
#define MSG_INFOF(msg)  MsgBox::ShowInfo(msg, L"DebugTool[Info]", __FILE__, __LINE__, __func__)


// --- 基本メッセージボックス(呼び出し元情報なし) ---
#define MSG_ERR(msg)   MsgBox::ShowError(msg, L"DebugTool[Error]")

// --- ファイル名・行番号・関数名付き ---
#define MSG_ERRF(msg)   MsgBox::ShowError(msg, L"DebugTool[Error]", __FILE__, __LINE__, __func__)


// --- 基本メッセージボックス(呼び出し元情報なし) ---
#define MSG_WARN(msg)  MsgBox::ShowWarning(msg, L"DebugTool[Warning]")

// --- ファイル名・行番号・関数名付き ---
#define MSG_WARNF(msg)  MsgBox::ShowWarning(msg, L"DebugTool[Warning]", __FILE__, __LINE__, __func__)


// --- 基本メッセージボックス(呼び出し元情報なし) ---
#define MSG_YESNO(msg) MsgBox::ShowYesNo(msg, L"DebugTool[Confir]")

// --- ファイル名・行番号・関数名付き ---
#define MSG_YESNOF(msg) MsgBox::ShowYesNo(msg, L"DebugTool[Confir]", __FILE__, __LINE__, __func__)

#else
// --- メッセージボックス初期化&終了処理マクロ無効化 ---
#define MSGBOX_INITIALIZE(hWnd) ((void)0)

// --- メッセージボックスマクロ無効化 ---
#define MSG_ERR(msg)   ((void)0)
#define MSG_WARN(msg)  ((void)0)
#define MSG_INFO(msg)  ((void)0)
#define MSG_YESNO(msg) (false)

#define MSG_ERRF(msg)   ((void)0)
#define MSG_WARNF(msg)  ((void)0)
#define MSG_INFOF(msg)  ((void)0)
#define MSG_YESNOF(msg) (false)

#endif // DEBUG_NO_USE_MSGBOX
#endif // DEBUG_NO_MSGBOX
`;

export default debugLibCode;