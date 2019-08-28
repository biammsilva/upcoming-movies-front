import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.getMovie();
  }

  getMovie() {
    this.movie = {
      "id":384018,
      "name":"Fast & Furious Presents: Hobbs & Shaw",
      "poster_image":"https://image.tmdb.org/t/p/original/keym7MPn1icW1wWfzMnW3HeuzWU.jpg",
      "genre":[28],
      "overview":"A spinoff of The Fate of the Furious, focusing on Johnson's US Diplomatic Security Agent Luke Hobbs forming an unlikely alliance with Statham's Deckard Shaw.",
      "release_date":"2019-08-02"
    }
  }

}
