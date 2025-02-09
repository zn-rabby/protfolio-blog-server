import { model, Schema } from 'mongoose';
import { IBlog } from './blog.interface';

const blogSchema = new Schema<IBlog>(
  {
    name: {
      type: String,
      required: [true, 'Please provide name'],
      trim: true,
    },
    title: {
      type: String,
      required: [true, 'Please provide title'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Please provide content'],
    },
    category: {
      type: String, // Single category selection
      required: [true, 'Please select a category'],
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt & updatedAt fields
  },
);

const Blog = model<IBlog>('Blog', blogSchema);
export default Blog;
