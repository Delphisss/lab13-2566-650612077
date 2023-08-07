"use client";

import { MovieRow } from "@/components/MovieRow";
import { movieDB } from "@/libs/movieDB";

export default function SearchResultPage({ params }) {
  const processedSearchInput = params.searchInput.replaceAll("%20", " ");

  const filteredMovies = movieDB.filter((movie) =>
    movie.title.toLowerCase().includes(processedSearchInput.toLowerCase())
  );

  return (
    <div>
      <p className="fw-bold fs-4 text-center my-0">
        Searching &quot; {processedSearchInput} &quot;
      </p>
      <p className="fw-bold fs-4 text-center">
        Found {filteredMovies.length} result(s)
      </p>
      {filteredMovies.map((movie, i) => (
        <MovieRow
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movie.rating}
          number={i + 1}
        />
      ))}
    </div>
  );
}
