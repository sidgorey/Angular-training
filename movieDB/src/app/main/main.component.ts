import { Component, OnInit } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';
import {  MatDialog } from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  load: boolean
  movies: any
  changeLoader(load: boolean)
  {
    console.log("Called it", load)
    this.load = load
    console.log(this.load)
  }
  
  displayMovies(json: any){
    this.movies = json
    console.log("this.movies",this.movies)
  }
  constructor(private dialog: MatDialog) { 
    this.load = false

  }

  ngOnInit() {
    if(this.load)
    {
      let dialogRef= this.dialog.open(LoadingComponent, { disableClose: true, width : '10rem', height:'10rem' })
      dialogRef.componentInstance.load = this.load
    }
  }

  

}
