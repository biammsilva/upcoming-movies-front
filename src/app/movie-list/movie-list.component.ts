import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];

  constructor() { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movies = [
        {
          "id":384018,
          "name":"Fast & Furious Presents: Hobbs & Shaw",
          "poster_image":"https://image.tmdb.org/t/p/original/keym7MPn1icW1wWfzMnW3HeuzWU.jpg",
          "genre":[28],
          "overview":"A spinoff of The Fate of the Furious, focusing on Johnson's US Diplomatic Security Agent Luke Hobbs forming an unlikely alliance with Statham's Deckard Shaw.",
          "release_date":"2019-08-02"
        },
        {
          "id":423204,
          "name":"Angel Has Fallen",
          "poster_image":"https://image.tmdb.org/t/p/original/fapXd3v9qTcNBTm39ZC4KUVQDNf.jpg",
          "genre":[28],
          "overview":"Secret Service Agent Mike Banning is framed for the attempted assassination of the President and must evade his own agency and the FBI as he tries to uncover the real threat.",
          "release_date":"2019-08-23"
        },
        {
          "id":412117,
          "name":"The Secret Life of Pets 2",
          "poster_image":"https://image.tmdb.org/t/p/original/nYcaCNkB4EgVyvrXxxbklefDrGL.jpg",
          "genre":[12,16,35,10751],
          "overview":"Max the terrier must cope with some major life changes when his owner gets married and has a baby. When the family takes a trip to the countryside, nervous Max has numerous run-ins with canine-intolerant cows, hostile foxes and a scary turkey. Luckily for Max, he soon catches a break when he meets Rooster, a gruff farm dog who tries to cure the lovable pooch of his neuroses.",
          "release_date":"2019-06-07"
        },
        {
          "id":521777,
          "name":"Good Boys",
          "poster_image":"https://image.tmdb.org/t/p/original/jIthqo2tQmW8TFN1fYpF8FmVL0o.jpg",
          "genre":[35],
          "overview":"A group of young boys on the cusp of becoming teenagers embark on an epic quest in the San Fernando Valley to fix their broken toy before their parents get home.",
          "release_date":"2019-08-16"
        },
        {
          "id":474350,
          "name":"It: Chapter Two",
          "poster_image":"https://image.tmdb.org/t/p/original/wF6SNPcUrTKFA4fOFfukm7zQ3ob.jpg",
          "genre":[27],
          "overview":"27 years after overcoming the malevolent supernatural entity Pennywise,the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
          "release_date":"2019-09-06"
        },
        {
          "id":466272,
          "name":"Once Upon a Time in Hollywood",
          "poster_image":"https://image.tmdb.org/t/p/original/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
          "genre":[28,35,80,18,37],
          "overview":"A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
          "release_date":"2019-07-26"
        }
      ]
  }

  search(event) {
    let text = event.target.value;
    console.log(text);
    this.movies = [];
  }
}
