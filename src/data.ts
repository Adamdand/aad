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
import notebook from "./assets/notebook.png"
import ghostJournal from "./assets/ghostJournal.png"
import uvLight from "./assets/uvLight.png"
import emfReader from "./assets/emfReader.png"
import videoCamera from "./assets/videoCamera.png"
import doll from "./assets/doll.png"
import grave from "./assets/grave.png"
import codeBox from "./assets/codeBox.png"
import childDrawing from "./assets/childDrawing.png"
import bathbomb from "./assets/bathbomb.png"
import letter from "./assets/letter.png"




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
    category: "hunterTool",
    img: toolFlashlight,
    title: "Flash Light",
  },
  {
    id: 1,
    category: "hunterTool",
    img: toolSage,
    title: "Sage",
  },
  {
    id: 2,
    category: "hunterTool",
    img: toolRadio,
    title: "Radio",
  },
  {
    id: 3,
    category: "hunterTool",
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
  {
    id: 15,
    category: "ghostTool",
    title:'ghost journal',
    img:ghostJournal
  },
  {
    id: 16,
    category: "ghostTool",
    title:'doll',
    img:doll
  },
  {
    id: 17,
    category: "ghostTool",
    title:'grave stones',
    img:grave
  },
  {
    id: 18,
    category: "ghostTool",
    title:'code box',
    img:codeBox
  },
  {
    id: 19,
    category: "ghostTool",
    title:'child drawings',
    img:childDrawing
  },
  {
    id:20,
    category: "ghostTool",
    title:'creepy letter',
    img:letter
  },
  {
    id: 21,
    category: "hunterTool",
    title:'camera and video-camera',
    img:videoCamera
  },
  {
    id: 22,
    category: "hunterTool",
    title:'emf reader',
    img:emfReader
  },
  {
    id: 23,
    category: "hunterTool",
    title:'uv light',
    img:uvLight
  },
  {
    id: 24,
    category: "hunterTool",
    title:'note books and pens',
    img:notebook
  },
  {
    id: 25,
    category: "ghostTool",
    title:'black bath bomb',
    img:bathbomb
  },
];
