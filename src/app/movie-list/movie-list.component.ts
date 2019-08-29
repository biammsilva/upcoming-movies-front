import { Component, OnInit } from '@angular/core';
import { Movie, PaginatedMovies } from '../movie';
import { MovieService } from '../movie.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  page: number = 1;
  private searchUpdated: Subject<string> = new Subject()

  constructor(
    private service: MovieService,
  ) {
    this.searchUpdated.pipe(
      debounceTime(200),
      distinctUntilChanged()
    ).subscribe(text => {
        this.service.searchMovies(this.page, text)
          .subscribe((data: PaginatedMovies) => {
            this.movies = data.movies;
            this.page = data.pagination.page;
          });
      });
  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.service.getMovies(this.page).subscribe((data: PaginatedMovies) => {
      this.movies = data.movies;
      this.page = data.pagination.page;
    })
  }

  search(event) {
    let text = event.target.value;
    if(text == ''){
      this.getMovies();
    }
    this.searchUpdated.next(text);
    
  }
}
