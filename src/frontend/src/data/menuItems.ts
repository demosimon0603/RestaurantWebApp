import type { MenuItem, ServiceHighlight } from "../types/restaurant";

export const menuItems: MenuItem[] = [
  {
    name: "乾式熟成肋眼",
    description: "28 天熟成牛排、紅酒小牛汁、烤蒜與海鹽奶油。",
    price: 1680,
    accent: "Chef's cut"
  },
  {
    name: "松露野菇寬麵",
    description: "手工寬麵、帕瑪森乳酪、季節野菇與黑松露油。",
    price: 680,
    accent: "Handmade"
  },
  {
    name: "炭烤海鱸魚",
    description: "檸檬香草奶油、烤時蔬、酸豆與薄荷沙拉。",
    price: 920,
    accent: "Seafood"
  }
];

export const serviceHighlights: ServiceHighlight[] = [
  { label: "晚餐時段", value: "17:30 - 23:00" },
  { label: "精選酒款", value: "80+ bottles" },
  { label: "包廂座位", value: "4 - 12 位" }
];
