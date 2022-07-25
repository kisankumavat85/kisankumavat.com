import Link from "next/link";
import { FC } from "react";

// Styles
import { StyledFeaturedPosts } from "../styles/components/featured-posts.style";

// Types
import { FeaturedPostsProps } from "../types";

const FeaturedPosts: FC<FeaturedPostsProps> = (props) => {
  const { posts } = props;

  return (
    <StyledFeaturedPosts>
      <h2 className="featured-posts-heading">Featured Posts</h2>
      <div className="featured-posts-container">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="card">
              <div>
                <h4 className="card-title">{post.data.title}</h4>
              </div>
              <div>
                <p className="card-date">{post.data.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </StyledFeaturedPosts>
  );
};

export default FeaturedPosts;
