import { model } from "mongoose";
import { BlogSchema } from "../schemas/blog-schema";
const Blog = model("blog", BlogSchema);

export class BlogModel {
  async addBlogToDB(blogs) {
    return await Blog.create(blogs);
  }
  async findAllBlogs() {
    return await Blog.find();
  }
}

const blogModel = new BlogModel();

export { blogModel };
