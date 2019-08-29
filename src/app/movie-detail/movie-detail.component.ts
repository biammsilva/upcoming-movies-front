import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;

  constructor( private route: ActivatedRoute, private service: MovieService ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getMovie(id);
  }

  getMovie(id) {
    this.service.getMovie(id).subscribe((movie: Movie) => {
      this.movie = movie;
    })
  }

}
