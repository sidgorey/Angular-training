import { Component, OnInit, Input, OnChanges,  SimpleChanges, SimpleChange } from '@angular/core';
import { movie } from '../model/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit , OnChanges{
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes)
    let change:SimpleChange = changes.movies
    if(change == null || change == undefined || change.currentValue == undefined)
    {
      return
    }

    this.movies = change.currentValue.results

    this.updateMovieList(this.movies)

  }

  @Input()
  movies: any

  movieList: Array<movie>
  constructor() {
    
  }


   

  ngOnInit() {
    console.log("ngonINit")
    if(this.movies == undefined || this.movies == "" || this.movies == null)
    {
      return
    }
    let res= this.movies.results
    this.updateMovieList(res)
    
  }

  updateMovieList(res){
    this.movieList = []
    
    for(let mov of res){

      this.movieList.push(new movie(mov.id, mov.video, mov.title, mov.poster_path, mov.overview, mov.release_date));

        }

  }
}
