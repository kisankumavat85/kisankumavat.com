import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

export const POSTS_FOLDER_PATH = path.join(process.cwd(), "src", "posts");

export const getAllPosts = () => {
  const files = fs.readdirSync(POSTS_FOLDER_PATH);

  const posts = files.map((fileName) => {
    // Create slug
    const slug = fileName.replace(".mdx", "");
    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), "src", "posts", fileName),
      "utf-8"
    );
    const { data } = matter(markdownWithMeta);
    return {
      slug,
      data,
    };
  });

  return posts;
};

export const getFeaturedPosts = () => {
  const files = fs.readdirSync(POSTS_FOLDER_PATH);

  let posts = [];

  for (let i = 0; i < files.length; i++) {
    const slug = files[i].replace(".mdx", "");
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), "src", "posts", files[i]),
      "utf-8"
    );
    const { data } = matter(markdownWithMeta);
    if (data.isFeatured) {
      posts.push({
        slug,
        data,
      });
    }
    if (posts.length === 3) break;
  }

  return posts;
};

export const getPostBySlug = async (slug: string) => {
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), "src", "posts", slug + ".mdx"),
    "utf-8"
  );

  const { data, content } = matter(markdownWithMeta);

  const mdxContent = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behaviour: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return {
    data,
    content: mdxContent,
    slug,
  };
};
