export class Movie {
  id: number;
  name: string;
  poster_image: string;
  genre: Genre[];
  overview: string;
  release_date: string;
}

export class PaginatedMovies {
  movies: Movie[];
  pagination: Pagination;
}

export class Genre {
  id: number;
  name: string;
}

export class Pagination {
  page: 1;
}
