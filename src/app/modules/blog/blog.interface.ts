export interface IBlog {
  category: string; 
  name: string; 
  image: string; 
  title: string; 
  content: string; 
  introduction: string; 

  tags?: string[]; 

  isPublished: boolean; 
  isDeleted?: boolean;

  views?: number;
  likes?: number; 

  authorName: string;
  createdAt: Date; 
  updatedAt?: Date; 
}
