import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HitMoviesApiService } from '../hit-movies-api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  data: Object
  
  @Output()
  loading= new EventEmitter<boolean>()

  @Output()
  getFilteredMoviesSearch = new EventEmitter<any>()

  movieName : string
  constructor(private apiService: HitMoviesApiService) {
    this.movieName = ""
    this.data = {}
   }

   findMovieWithName(value)
   {
     //Display loader component.
     this.loading.emit(true)

     //Hit API with params: 
      this.apiService.getMoviesWithFilter('search', '&query='.concat(value)).subscribe(
       data => {
        // this.data = data
        this.getFilteredMoviesSearch.emit(data)
        console.log("Emitted", data)
       } ,
       error => {
         console.log(error)
       }
        )//
    //render the movies list component with the result returned from getMovies().
   }
  ngOnInit() {
  }

}
