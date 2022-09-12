import Head from "next/head";
import { FC, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

import withLayout from "../../components/HOC/withLayout";
import SearchInput from "../../components/SearchInput";
import { books, movies } from "../../data/books";
import projects from "../../data/projects";

import StyledSpace from "../../styles/pages/space.style";

const Space: FC = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <Head>
        <title>Kisan Kumavat | Space</title>
      </Head>

      <StyledSpace>
        <div className="page-intro">
          <h1>Space</h1>
          <p>
            This is my space where I share things that I like to do when I am
            not infront of computer screen. I like reading Books and watching
            Movies. Here are some of my favourite books and Movies.
          </p>
          <div className="divider" />
          {/* <SearchInput setQuery={setQuery} placeholder="Search" /> */}
        </div>

        <section className="space-section">
          <div className="books-section">
            <h2 className="heading2">Recently Read</h2>
            <ol className="books">
              {books.map((book) => (
                <li>
                  <p className="book-name">{book.name}</p>
                  <p className="authore">{`By ${book.authore} (${book.genre})`}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="books-section">
            <h2 className="heading2">Favourite Movies</h2>
            <ol className="books">
              {movies.map((movie) => (
                <li>
                  <p className="movie-name">{`${movie.name} (${movie.releaseYear})`}</p>
                  <p className="authore">Director: {movie.director}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </StyledSpace>
    </>
  );
};

export default withLayout(Space);
