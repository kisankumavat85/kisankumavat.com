import { FC, useEffect, useState } from "react";
import Head from "next/head";
import { BiSearchAlt } from "react-icons/bi";

// Components
import withLayout from "../../components/HOC/withLayout";
import Posts from "../../components/Posts";

// Styles
import { StyledBlog } from "../../styles/pages/blog.style";

// Types
import { BlogPageProps, PostMetaAndSlug } from "../../types";
import { getAllPosts, getFeaturedPosts } from "../../apis";
import FeaturedPosts from "../../components/FeaturedPosts";

const Blog: FC<BlogPageProps> = (props) => {
  const { posts } = props;
  const [query, setQuery] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState<PostMetaAndSlug[]>(
    posts.allPosts
  );

  useEffect(() => {
    const trimedQuery = query.trim();
    if (trimedQuery) {
      setFilteredPosts(
        posts.allPosts.filter((post) =>
          post.data.title.toLowerCase().includes(trimedQuery.toLowerCase())
        )
      );
    } else {
      setFilteredPosts(posts.allPosts);
    }
  }, [query, posts.allPosts]);

  return (
    <>
      <Head>
        <title>Kisan Kumavat | Blog</title>
      </Head>
      <StyledBlog>
        <div className="page-intro">
          <h1>Blog</h1>
          <p>
            Recently I have started writing online about JavaScript and
            it&apos;s library and tools like React, Next.js, TypeScript and ES6
            features. Use search to filter by title.
          </p>
          <div className="search-container">
            <span>
              <BiSearchAlt />
            </span>
            <input
              type="text"
              placeholder="Search blog"
              className="search-input"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        {query === "" && <FeaturedPosts posts={posts.featuredPosts} />}
        <Posts posts={filteredPosts} title="All Posts" />
      </StyledBlog>
    </>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: {
        allPosts,
        featuredPosts,
      },
    },
  };
};

export default withLayout(Blog);
