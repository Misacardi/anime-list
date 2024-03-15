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

interface Titles {
  en: string;
  en_jp: string;
  ja_jp: string;
}

interface Attributes {
  posterImage: PosterImage;
  titles: Titles;
  canonicalTitle: string;
  description?: string;
  ageRatingGuide: string;
  subtype: string;
  status: string;
  startDate: string;
  endDate: string;
}

interface AnimeInfo {
  id: number;
  type: string;
  attributes: Attributes;
  favorite?: boolean;
  favoriteId?: number;
}
interface AnimeData {
  data: AnimeInfo[];
}

interface SingleAnime {
  data: AnimeInfo;
}
