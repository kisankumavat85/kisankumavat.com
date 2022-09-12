import { FC } from "react";
import Link from "next/link";

// Styles
import StyledPosts from "../styles/components/posts.style";

// Types
import { PostsProps } from "../types";

const Posts: FC<PostsProps> = (props) => {
  const { posts, title } = props;

  return (
    <StyledPosts>
      <h2 className="featured-posts-heading">{title}</h2>
      <div className="featured-posts-container">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="card">
                <div className="card-title-date">
                  <h4 className="card-title">{post.data.title}</h4>
                  <p className="card-date">{post.data.date}</p>
                </div>
                <p className="card-info">{post.data.excerpt}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="no-posts-found">No posts found.</p>
        )}
      </div>
    </StyledPosts>
  );
};

export default Posts;
