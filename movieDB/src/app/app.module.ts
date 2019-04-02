import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MatRadioModule, MatButtonModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatDialogModule, MatGridListModule, MatCardModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SortBarComponent } from './sort-bar/sort-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HitMoviesApiService } from './hit-movies-api.service';
import { LoadingComponent } from './loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SearchBarComponent,
    SortBarComponent,
    LoadingComponent,
    MovieListComponent,
    FilterComponent
    
  ],
  entryComponents:[
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [HitMoviesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
