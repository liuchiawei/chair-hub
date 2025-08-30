export type Chair = {
  id: number;
  slug: string;
  name_en: string;
  name_jp: string;
  year: number;
  country: string;
  style: string[];
  designer: string;
  catchphrase?: string;
  description: string[];
  image: string;
};
