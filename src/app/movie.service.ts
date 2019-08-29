import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  API_URL = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  getMovies(page) {
    return this.http.get(this.API_URL + '/movie', { 
      params: {
        page: page
      }
    });
  }

  getMovie(id) {
    return this.http.get(this.API_URL + `/movie/${id}`);
  }

  searchMovies(page, text) {
    return this.http.get(this.API_URL + '/movie/search', { 
      params: {
        page: page,
        text: text
      }
    });
  }
}
