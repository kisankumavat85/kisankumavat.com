import { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import fs from "fs";
import { MDXRemote } from "next-mdx-remote";

// Components
import withLayout from "../../components/HOC/withLayout";

// Styles
import { StyledSlug } from "../../styles/pages/slug.style";
import "highlight.js/styles/atom-one-dark.css";

// Types
import { SlugPageProps, SlugPageStaticProps } from "../../types";
import { getPostBySlug, POSTS_FOLDER_PATH } from "../../apis";

const Post: FC<SlugPageProps> = (props) => {
  const { data, content, slug } = props;

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <StyledSlug>
        <div className="page-intro">
          <h1>{data.title}</h1>
          <div className="author-info">
            <span>{`Kisan Kumavat | ${data.date}`}</span>
            <span>{data.readingTime} min read</span>
          </div>
        </div>
        <div className="post-body">
          <div className="image-wrapper">
            <Image
              src={data.coverImage}
              alt="Cover Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <MDXRemote {...content} components={{ Image }} />
        </div>
      </StyledSlug>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(POSTS_FOLDER_PATH);

  // Creates array of paths
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (props: SlugPageStaticProps) => {
  const { params } = props;
  const post = await getPostBySlug(params.slug);
  return {
    props: post,
  };
};

export default withLayout(Post);
