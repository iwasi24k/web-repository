import type React from "react";
import { VOID_COLORS } from "../../design/colors";

import GameSystem from "./game/GameSystem";
import GameFeatures from "./game/GameFeatures";
import Workflow from "./development/Workflow";
import WebEngineering from "./development/WebEngineering";
import GameEngineering from "./development/GameEngineering";
import DeveloperComments from "./development/DeveloperComments";

// 各Sectionの高さ
const CUSTOM_SIZE_CLASS = "min-h-[10vw]";

const TITLE_SIZE_CLASS = "text-[7vw] xl:text-[5vw]";

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
    titleSize: TITLE_SIZE_CLASS,
    bgColor: VOID_COLORS.WHITE,
    textColor: VOID_COLORS.BLACK,
    sectionSize: CUSTOM_SIZE_CLASS,
    content: <GameSystem />,
  },
  {
    id: "features",
    title: "GAME FEATURES",
    titleSize: TITLE_SIZE_CLASS,
    bgColor: VOID_COLORS.GRAY_1,
    textColor: VOID_COLORS.GRAY_4,
    sectionSize: CUSTOM_SIZE_CLASS,
    content: <GameFeatures />,
  },
  {
    id: "workflow",
    title: "WORKFLOW",
    titleSize: TITLE_SIZE_CLASS,
    bgColor: VOID_COLORS.GRAY_2,
    textColor: VOID_COLORS.GRAY_3,
    sectionSize: CUSTOM_SIZE_CLASS,
    content: <Workflow />,
  },
  {
    id: "web-eng",
    title: "WEB ENGINEERING",
    titleSize: TITLE_SIZE_CLASS,
    bgColor: VOID_COLORS.GRAY_3,
    textColor: VOID_COLORS.GRAY_2,
    sectionSize: CUSTOM_SIZE_CLASS,
    content: <WebEngineering />,
  },
  {
    id: "game-eng",
    title: "GAME ENGINEERING",
    titleSize: TITLE_SIZE_CLASS,
    bgColor: VOID_COLORS.GRAY_4,
    textColor: VOID_COLORS.GRAY_1,
    sectionSize: CUSTOM_SIZE_CLASS,
    content: <GameEngineering />,
  },
  {
    id: "comments",
    title: "DEVELOPER COMMENTS",
    titleSize: TITLE_SIZE_CLASS,
    bgColor: VOID_COLORS.BLACK,
    textColor: VOID_COLORS.WHITE,
    sectionSize: CUSTOM_SIZE_CLASS,
    content: <DeveloperComments />,
  },
] as const;
