export interface MenuItem {
  name: string;
  description: string;
  price: number;
  accent: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface ServiceHighlight {
  label: string;
  value: string;
}
