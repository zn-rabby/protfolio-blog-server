export interface IBlog {
  category: string;
  name: string;
  image: string;
  title: string;
  content: string;
  isPublished: boolean;
  views?: number;
  likes?: number;
}
