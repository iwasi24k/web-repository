import type React from "react";
import { VOID_COLORS } from "../../design/colors";

import GameSystem from "./game/GameSystem";
import GameFeatures from "./game/GameFeatures";
import Workflow from "./development/Workflow";
import WebEngineering from "./development/WebEngineering";
import GameEngineering from "./development/GameEngineering";
import DeveloperComments from "./development/DeveloperComments";

// 各Sectionの高さ
const CUSTOM_SIZE_CLASS = "min-h-[100svh]";
const CUSTOM_SIZE_CLASS_MIN = "min-h-[80svh]";
const CUSTOM_SIZE_CLASS_MAX = "min-h-[200svh]";

export type HomeSectionData = {
  id: string;
  title: string;
  titleSize: string;
  bgColor: string;
  textColor: string;
  sectionSize: string;
  content: React.ReactNode;
};

export const HOME_SECTIONS_DATA = [
  {
    id: "system",
    title: "GAME SYSTEM",
    titleSize: "text-[5svh] md:text-[9dvh] lg:text-[10dvh]",
    bgColor: VOID_COLORS.WHITE,
    textColor: VOID_COLORS.BLACK,
    sectionSize: CUSTOM_SIZE_CLASS,
    content: <GameSystem />,
  },
  {
    id: "features",
    title: "GAME FEATURES",
    titleSize: "text-[5svh] md:text-[9dvh] lg:text-[10dvh]",
    bgColor: VOID_COLORS.GRAY_1,
    textColor: VOID_COLORS.GRAY_4,
    sectionSize: CUSTOM_SIZE_CLASS,
    content: <GameFeatures />,
  },
  {
    id: "workflow",
    title: "WORKFLOW",
    titleSize: "text-[5svh] md:text-[9dvh] lg:text-[10dvh]",
    bgColor: VOID_COLORS.GRAY_2,
    textColor: VOID_COLORS.GRAY_3,
    sectionSize: CUSTOM_SIZE_CLASS,
    content: <Workflow />,
  },
  {
    id: "web-eng",
    title: "WEB ENGINEERING",
    titleSize: "text-[5svh] md:text-[9dvh] lg:text-[10dvh]",
    bgColor: VOID_COLORS.GRAY_3,
    textColor: VOID_COLORS.GRAY_2,
    sectionSize: CUSTOM_SIZE_CLASS_MAX,
    content: <WebEngineering />,
  },
  {
    id: "game-eng",
    title: "GAME ENGINEERING",
    titleSize: "text-[5svh] md:text-[9dvh] lg:text-[10dvh]",
    bgColor: VOID_COLORS.GRAY_4,
    textColor: VOID_COLORS.GRAY_1,
    sectionSize: CUSTOM_SIZE_CLASS_MAX,
    content: <GameEngineering />,
  },
  {
    id: "comments",
    title: "DEVELOPER COMMENTS",
    titleSize: "text-[4svh] md:text-[9dvh] lg:text-[10dvh]",
    bgColor: VOID_COLORS.BLACK,
    textColor: VOID_COLORS.WHITE,
    sectionSize: CUSTOM_SIZE_CLASS_MIN,
    content: <DeveloperComments />,
  },
] as const;
