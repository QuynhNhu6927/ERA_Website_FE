import { colors } from "@/lib/theme";

export type Course = {
  id: number;
  titleParts: { text: string; color: string }[];
  topColor: string;
  sections: {
    heading: string;
    content?: string;
    bullets?: string[];
  }[];
  target: string;
  btnVariant: "primary" | "secondary";
  image?: string;
  titleImage?: string;
  headingColor?: string;
};
