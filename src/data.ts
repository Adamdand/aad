import toolFlashlight from "./assets/flashlight.png";
import toolSage from "./assets/sage.png";
import toolRadio from "./assets/radio.png";
import toolCross from "./assets/cross.png";
import photo1 from "./assets/photo1.jpg"
import photo2 from "./assets/photo2.jpg"
import photo3 from "./assets/photo3.jpg"
import photo4 from "./assets/photo4.jpg"
import photo5 from "./assets/photo5.jpg"
import photo6 from "./assets/photo6.jpg"
import photo7 from "./assets/photo7.jpg"
import photo8 from "./assets/photo8.jpg"
import photo9 from "./assets/photo9.jpg"


interface Items {
  id: number;
  category: string;
  img: string;
  title: string;
}

export type photoData = {
  title: string
  url: string
  }

export const photoItems=[
  {
    title:'photo1',
    url:photo1
  },
  {
    title:'photo2',
    url:photo2
  },
  {
    title:'photo3',
    url:photo3
  },
  {
    title:'photo4',
    url:photo4
  },
  {
    title:'photo5',
    url:photo5
  },
  {
    title:'photo6',
    url:photo6
  },
  {
    title:'photo7',
    url:photo7
  },
  {
    title:'photo8',
    url:photo8
  },
  {
    title:'photo9',
    url:photo9
  },
] as photoData[]

export const items: Items[] = [
  {
    id: 0,
    category: "tool",
    img: toolFlashlight,
    title: "Flash Light",
  },
  {
    id: 1,
    category: "tool",
    img: toolSage,
    title: "Sage",
  },
  {
    id: 2,
    category: "tool",
    img: toolRadio,
    title: "Radio",
  },
  {
    id: 3,
    category: "tool",
    img: toolCross,
    title: "Wooden Cross",
  },
  // {
  //   id: 4,
  //   category: "photo",
  //   img: webTwo,
  //   title: "Agency Landing Page",
  // },
  // {
  //   id: 5,
  //   category: "photo",
  //   img: webThree,
  //   title: "Crypto Landing Page",
  // },
  {
    id: 4,
    category: "photo",
    title:'photo1',
    img:photo1
  },
  {
    id: 7,
    category: "photo",
    title:'photo2',
    img:photo2
  },
  {
    id:8,
    category: "photo",
    title:'photo3',
    img:photo3
  },
  {
    id: 9,
    category: "photo",
    title:'photo4',
    img:photo4
  },
  {
    id: 10,
    category: "photo",
    title:'photo5',
    img:photo5
  },
  {
    id: 11,
    category: "photo",
    title:'photo6',
    img:photo6
  },
  {
    id: 12,
    category: "photo",
    title:'photo7',
    img:photo7
  },
  {
    id: 13,
    category: "photo",
    title:'photo8',
    img:photo8
  },
  {
    id: 14,
    category: "photo",
    title:'photo9',
    img:photo9
  },
];
