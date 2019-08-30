import { Component, OnInit, HostListener } from '@angular/core';
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
  total_pages: number = 1;
  finalScroll: boolean = true;
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

  getMovies(concat=false) {
    this.service.getMovies(this.page).subscribe((data: PaginatedMovies) => {
      if (concat){
        for (const movie of data.movies) {
          this.movies.push(movie);
        }
      } else {
        this.movies = data.movies;
      }
      this.finalScroll = false;
      this.page = data.pagination.page;
      this.total_pages = data.pagination.total_pages;
    })
  }

  search(event) {
    let text = event.target.value;
    if(text == ''){
      this.getMovies();
    }
    this.searchUpdated.next(text);
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        if (this.page < this.total_pages || !this.finalScroll) {
          let element = this;
          setTimeout(null, 2000);
          element.page = element.page + 1;
          element.getMovies(true);
        } else {
          this.finalScroll = true;
        }
    }
  }
}
