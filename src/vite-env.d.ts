/// <reference types="vite/client" />

interface PosterImage {
  tiny: string;
  large: string;
  small: string;
  medium: string;
  original: string;
}

interface Favorite {
  parentId: number;
  id: number;
  title: string;
  img: string;
}

interface Ititles {
  en: string;
  en_jp: string;
  ja_jp: string;
}

interface Attributes {
  posterImage: PosterImage;
  titles: Ititles;
  canonicalTitle: string;
  description?: string;
}

interface AnimeInfo {
  id: number;
  attributes: Attributes;
  favorite?: boolean;
  favoriteId?: number;
}
interface AnimeData {
  data: AnimeInfo[];
}
