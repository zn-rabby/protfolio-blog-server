export interface IBlog {
  category: string; // Category of the blog (e.g., 'Technology', 'Web Development') (required)
  name: string; // Blog name or title (required)
  image: string; // Main image for the blog (required)
  title: string; // Blog post title (required)
  content: string; // Detailed content of the blog (required)
  introduction: string; // Short introduction or summary of the blog (required)

  tags?: string[]; // Tags related to the blog (optional)

  isPublished: boolean; // Whether the blog is published or not (required)
  isDeleted?: boolean; // Whether the blog is deleted (soft delete) (optional)

  views?: number; // View count of the blog (optional)
  likes?: number; // Like count for the blog (optional)

  thumbnail?: string; // Thumbnail image for the blog (optional)

  authorName: string; // Author of the blog post (required)

  createdAt: Date; // Date of creation (required)
  updatedAt?: Date; // Date when the blog was last updated (optional)
}
