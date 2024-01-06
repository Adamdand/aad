import uiUxOne from "./assets/ui-ux-project-one.svg";
import uiUxTwo from "./assets/ui-ux-project-two.svg";
import uiUxThree from "./assets/ui-ux-project-three.svg";
import webOne from "./assets/web-project-one.jpeg";
import webTwo from "./assets/web-project-two.jpeg";
import webThree from "./assets/web-project-three.jpeg";

interface Items {
  id: number;
  category: string;
  img: string;
  title: string;
}

export const items: Items[] = [
  {
    id: 0,
    category: "photo",
    img: uiUxOne,
    title: "UI/UX Web Template",
  },
  {
    id: 1,
    category: "photo",
    img: uiUxTwo,
    title: "UI/UX Tablet Template",
  },
  {
    id: 2,
    category: "photo",
    img: uiUxThree,
    title: "Solar System App Design",
  },
  {
    id: 3,
    category: "tool",
    img: webOne,
    title: "Interior Design Website",
  },
  {
    id: 4,
    category: "tool",
    img: webTwo,
    title: "Agency Landing Page",
  },
  {
    id: 5,
    category: "tool",
    img: webThree,
    title: "Crypto Landing Page",
  },
];
