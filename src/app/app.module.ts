import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { ErrorDisplayComponent } from './error-display/error-display.component';
import { MovieCardListComponent } from './movie-card-list/movie-card-list.component';
import { APIServiceService } from './apiservice.service';
import { SearchAreaComponent } from './search-area/search-area.component';
import { DetailsCardComponent } from './details-card/details-card.component';
import { DetailsRowComponent } from './details-row/details-row.component';
import { MovieCardListSkeletonComponent } from './movie-card-list-skeleton/movie-card-list-skeleton.component';
import { MovieCardSkeletonComponent } from './movie-card-skeleton/movie-card-skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    ErrorDisplayComponent,
    MovieCardListComponent,
    SearchAreaComponent,
    DetailsCardComponent,
    DetailsRowComponent,
    MovieCardListSkeletonComponent,
    MovieCardSkeletonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [APIServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
