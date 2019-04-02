import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HitMoviesApiService {

  base_url = 'https://api.themoviedb.org/3/'
  option = 'search'
  api_key='/movie?api_key=da5bf3a049b411d443e6e0b82cc8acc2'
 
  constructor(private http: HttpClient) {
  
   }

  getMovies(){

    return this.http.get(this.base_url.concat(this.option).concat(this.api_key))
  }
  getMoviesWithFilter(type, filter)
  {
    console.log(this.base_url.concat(this.option).concat(this.api_key).concat(filter))
    return this.http.get(this.base_url.concat(type).concat(this.api_key).concat(filter))
  }
  
}
