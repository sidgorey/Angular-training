import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { getComponentViewByInstance } from '@angular/core/src/render3/context_discovery';
import { HitMoviesApiService } from '../hit-movies-api.service';


enum Sort{
  popLH = '&sort_by=popularity.asc',
  popHL = '&sort_by=popularity.desc',
  dateLH = '&sort_by=release_date.desc',
  dateHL= '&sort_by=release_date.asc'
}
@Component({
  selector: 'app-sort-bar',
  templateUrl: './sort-bar.component.html',
  styleUrls: ['./sort-bar.component.css']
})
export class SortBarComponent implements OnInit {

  //Construct a url for the given optoins and then send it to another component.
  // Make a URL Builder class.
  data: Object

  @Output()
  loading = new EventEmitter<boolean>()

  @Output()
  getFilteredMoviesSort = new EventEmitter<any>()

  sortUrl : string
  genreCode : string
  isActive: number
  expanded: boolean

  constructor(private service : HitMoviesApiService) { 
    this.data= {}
    this.sortUrl = ''
    this.isActive = 0
    this.expanded = false
  }


  ngOnInit() {
  }

  expandCollapse()
  {
    this.expanded = !this.expanded
    return false
  }

  popularityLowToHigh(){
    this.sortUrl = Sort.popLH
    this.setActive(1)
    return false
  }
  popularityHighToLow(){
    this.sortUrl = Sort.popHL
    this.setActive(2)
    return false
  }
  dateLowToHigh(){
    this.sortUrl = Sort.dateLH
    this.setActive(3)
    return false
  }
  dateHighToLow(){
    this.sortUrl = Sort.dateHL
    this.setActive(4)
    return false
  }

  setActive(num)
  {
    if(num <= 0 || num >= 5)
    {
      this.isActive = 0
      return
    }
      
    this.isActive = num
  }
  genreSelect(value){
    switch(value)
    {
      case 1: this.genreCode = ''
        break; 
        case 2: this.genreCode = '18'
        break;
        case 3: this.genreCode = '35'
        break;
        case 4: this.genreCode = '28'
        break;
        case 5: this.genreCode = '12'
        break;
    }


  }

  hitApi()
  {
    //Send the url to the other component
    //Extract the genre param.

    this.loading.emit(true)
    console.log("Loading")

    if(this.genreCode != undefined ){
      this.sortUrl = this.sortUrl.concat('&with_genres=').concat(this.genreCode)
    }
    this.service.getMoviesWithFilter('discover',this.sortUrl).subscribe(
      data => {
        this.data = data
        this.loading.emit(false)
        this.getFilteredMoviesSort.emit(data)
        console.log("Found data")
      },
      error => {
        console.log("Hit api failed.")
        this.loading.emit(false)
        console.log("Error")
      }
    )
    return false
  }



}
