import { MDXRemoteSerializeResult } from "next-mdx-remote";

type PostMeta = {
  title: string;
  excerpt: string;
  date: string;
  coverImage: string;
  readingTime: string;
};

export type PostMetaAndSlug = {
  data: PostMeta;
  slug: string;
};

export type BlogPageProps = {
  posts: {
    allPosts: PostMetaAndSlug[];
    featuredPosts: PostMetaAndSlug[];
  };
};

export type PostsProps = {
  posts: PostMetaAndSlug[];
  title: string;
};

export type FeaturedPostsProps = {
  posts: PostMetaAndSlug[];
};

export type SlugPageStaticProps = {
  params: {
    slug: string;
  };
};

export type SlugPageProps = {
  slug: string;
  data: PostMeta;
  content: MDXRemoteSerializeResult<Record<string, unknown>>;
};
