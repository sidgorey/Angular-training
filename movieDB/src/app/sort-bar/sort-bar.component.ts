import { Component, OnInit } from '@angular/core';
import { send } from 'q';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
enum Sort{
  popLH = '&sort_by=popularity.asc',
  popHL = '&sort_by=popularity.desc',
  dateLH = '&sort_by=release_date.asc',
  dateHL= '&sort_by=release_date.desc'
}
export class SearchBarComponent implements OnInit {

  //Construct a url for the given optoins and then send it to another component.
  // Make a URL Builder class.

  sortUrl : string
  genreCode : string
 
  constructor() { 
    this.sortUrl = ''
  }

  ngOnInit() {
  }

  popularityLowToHigh(){
    this.sortUrl = Sort.popLH
  }
  popularityHighToLow(){
    this.sortUrl = Sort.popHL
  }
  dateLowToHigh(){
    this.sortUrl = Sort.dateLH
  }
  dateHighToLow(){
    this.sortUrl = Sort.dateHL
  }

  genreSelect(value){
    switch(value)
    {
      case 1: this.genreCode = ''
        break; 
        case 1: this.genreCode = '18'
        break;
        case 1: this.genreCode = '35'
        break;
        case 1: this.genreCode = '28'
        break;
        case 1: this.genreCode = '12'
        break;
    }


  }

  sendUrl()
  {
    //Send the url to the other component
    //Extract the genre param.
    this.sortUrl = this.sortUrl.concat('&with_genres=').concat(this.genreCode)
  }



}
