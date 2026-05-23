import type { MenuItem, ServiceHighlight } from "../types/restaurant";
import mediterraneanMushroomPastaImage from "../assets/mediterranean-mushroom-pasta.png";
import mediterraneanRibeyeImage from "../assets/mediterranean-ribeye.png";
import mediterraneanSeaBassImage from "../assets/mediterranean-sea-bass.png";
import mediterraneanBakedBostonLobsterImage from "../assets/mediterranean-baked-boston-lobster.png";

export const menuItems: MenuItem[] = [
  {
    name: "乾式熟成肋眼",
    description: "28 天熟成牛排、紅酒小牛汁、烤蒜與海鹽奶油。",
    price: 1680,
    accent: "Chef's cut",
    imageSrc: mediterraneanRibeyeImage,
    imageAlt: "地中海風格陶盤上的乾式熟成肋眼牛排"
  },
  {
    name: "松露野菇寬麵",
    description: "手工寬麵、帕瑪森乳酪、季節野菇與黑松露油。",
    price: 680,
    accent: "Handmade",
    imageSrc: mediterraneanMushroomPastaImage,
    imageAlt: "地中海風格陶碗中的松露野菇寬麵"
  },
  {
    name: "炭烤海鱸魚",
    description: "檸檬香草奶油、烤時蔬、酸豆與薄荷沙拉。",
    price: 920,
    accent: "Seafood",
    imageSrc: mediterraneanSeaBassImage,
    imageAlt: "地中海風格陶盤上的炭烤海鱸魚"
  },
  {
    name: "焗烤波士頓龍蝦",
    description: "半隻波士頓龍蝦、香草蒜奶油、帕瑪森焗烤與檸檬油醋。",
    price: 1380,
    accent: "Lobster",
    imageSrc: mediterraneanBakedBostonLobsterImage,
    imageAlt: "地中海風格陶盤上的焗烤波士頓龍蝦"
  }
];

export const serviceHighlights: ServiceHighlight[] = [
  { label: "晚餐時段", value: "17:30 - 23:00" },
  { label: "精選酒款", value: "80+ bottles" },
  { label: "包廂座位", value: "4 - 12 位" }
];
