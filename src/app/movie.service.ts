import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private http: HttpClient ) { }

  getMovies(page) {
    return this.http.get(environment.API_URL + '/movie', { 
      params: {
        page: page
      }
    });
  }

  getMovie(id) {
    return this.http.get(environment.API_URL + `/movie/${id}`);
  }

  searchMovies(page, text) {
    return this.http.get(environment.API_URL + '/movie/search', { 
      params: {
        page: page,
        text: text
      }
    });
  }
}
