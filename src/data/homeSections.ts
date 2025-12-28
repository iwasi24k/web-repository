import { VOID_COLORS } from "../design/colors";

export type HomeSectionData = {
  id: string;
  title: string;
  bgColor: string;
  textColor: string;
};

export const HOME_SECTIONS_DATA: readonly HomeSectionData[] = [
  {
    id: "system",
    title: "GAME SYSTEM",
    bgColor: VOID_COLORS.WHITE,
    textColor: VOID_COLORS.BLACK,
  },
  {
    id: "pipeline",
    title: "DEVELOPMENT PIPELINE",
    bgColor: VOID_COLORS.GRAY_1,
    textColor: VOID_COLORS.GRAY_4,
  },
  {
    id: "web-eng-1",
    title: "WEB ENGINEERING",
    bgColor: VOID_COLORS.GRAY_2,
    textColor: VOID_COLORS.GRAY_3,
  },
  {
    id: "web-eng-2",
    title: "WEB ENGINEERING",
    bgColor: VOID_COLORS.GRAY_3,
    textColor: VOID_COLORS.GRAY_2,
  },
  {
    id: "game-eng-1",
    title: "GAME ENGINEERING",
    bgColor: VOID_COLORS.GRAY_4,
    textColor: VOID_COLORS.GRAY_1,
  },
  {
    id: "game-eng-2",
    title: "GAME ENGINEERING",
    bgColor: VOID_COLORS.BLACK,
    textColor: VOID_COLORS.WHITE,
  },
] as const;
