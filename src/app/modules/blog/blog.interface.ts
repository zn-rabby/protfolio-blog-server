export interface IBlog {
  category: string; // Now only one category can be selected
  name: string;
  title: string;
  content: string;
  isPublished: boolean;
  views?: number;
  likes?: number;
}
