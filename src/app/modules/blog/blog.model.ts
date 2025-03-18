import { model, Schema } from 'mongoose';
import { IBlog } from './blog.interface';

const blogSchema = new Schema<IBlog>(
  {
    category: {
      type: String,
      required: [true, 'Please provide a category for the blog'],
      trim: true,
    },
    name: {
      type: String,
      required: [true, 'Please provide the name of the blog'],
      trim: true,
    },
    image: {
      type: String,
      required: [true, 'Please provide an image for the blog'],
    },
    title: {
      type: String,
      required: [true, 'Please provide a title for the blog'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Please provide content for the blog'],
    },
    introduction: {
      type: String,
      required: [true, 'Please provide an introduction for the blog'],
    },
    tags: {
      type: [String], // Array of tags (optional)
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    thumbnail: {
      type: String, // Optional thumbnail image
    },
    authorName: {
      type: String,
      required: [true, "Please provide the author's name"],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt & updatedAt fields
  },
);

const Blog = model<IBlog>('Blog', blogSchema);
export default Blog;
