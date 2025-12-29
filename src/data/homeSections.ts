import { VOID_COLORS } from "../design/colors";

const CUSTOM_SIZE_CLASS = "min-h-[100dvh]";
const CUSTOM_SIZE_CLASS_MIN = "min-h-[80dvh]";
const CUSTOM_SIZE_CLASS_MAX = "min-h-[200dvh]";

export type HomeSectionData = {
  id: string;
  title: string;
  bgColor: string;
  textColor: string;
  sectionSize: string;
};

export const HOME_SECTIONS_DATA = [
  {
    id: "system",
    title: "GAME SYSTEM",
    bgColor: VOID_COLORS.WHITE,
    textColor: VOID_COLORS.BLACK,
    sectionSize: CUSTOM_SIZE_CLASS,
  },
  {
    id: "features",
    title: "GAME FEATURES",
    bgColor: VOID_COLORS.GRAY_1,
    textColor: VOID_COLORS.GRAY_4,
    sectionSize: CUSTOM_SIZE_CLASS,
  },
  {
    id: "workflow",
    title: "WORKFLOW",
    bgColor: VOID_COLORS.GRAY_2,
    textColor: VOID_COLORS.GRAY_3,
    sectionSize: CUSTOM_SIZE_CLASS_MAX,
  },
  {
    id: "web-eng",
    title: "WEB ENGINEERING",
    bgColor: VOID_COLORS.GRAY_3,
    textColor: VOID_COLORS.GRAY_2,
    sectionSize: CUSTOM_SIZE_CLASS_MAX,
  },
  {
    id: "game-eng",
    title: "GAME ENGINEERING",
    bgColor: VOID_COLORS.GRAY_4,
    textColor: VOID_COLORS.GRAY_1,
    sectionSize: CUSTOM_SIZE_CLASS_MAX,
  },
  {
    id: "comments",
    title: "DEVELOPER COMMENTS",
    bgColor: VOID_COLORS.BLACK,
    textColor: VOID_COLORS.WHITE,
    sectionSize: CUSTOM_SIZE_CLASS_MIN,
  },
] as const;
