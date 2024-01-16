import MovieCard from "components/movieCard/movieCard";
import { Wrapper, CardWarapper } from "./style";
import { fetchMovies } from "actions/movies";
import { fetchCategory } from "actions/category";

const Movies = async () => {
  const fetchData = await fetchMovies();
  const movies = await fetchData.results;
  const fetchDataCategory = await fetchCategory();

  return (
    <Wrapper>
      {movies &&
        movies.map((item: any) => {
          return (
            <CardWarapper key={item.id}>
              <MovieCard movies={item} category={fetchDataCategory.genres} />
            </CardWarapper>
          );
        })}
    </Wrapper>
  );
};

export default Movies;
