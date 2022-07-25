import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { Dispatch, SetStateAction } from "react";

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

export type SearchInputProps = {
  setQuery: Dispatch<SetStateAction<string>>;
  placeholder: string;
};

export type HomePageProps = {
  posts: PostMetaAndSlug[];
};
