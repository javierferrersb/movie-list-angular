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
import { MovieCardListSkeletonComponent } from './movie-card-list-skeleton/movie-card-list-skeleton.component';
import { MovieCardSkeletonComponent } from './movie-card-skeleton/movie-card-skeleton.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailScreenComponent } from './detail-screen/detail-screen.component';
import { DetailRowComponent } from './detail-row/detail-row.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    ErrorDisplayComponent,
    MovieCardListComponent,
    SearchAreaComponent,
    DetailsCardComponent,
    MovieCardListSkeletonComponent,
    MovieCardSkeletonComponent,
    DetailScreenComponent,
    DetailRowComponent,
    HomeScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [APIServiceService],
  bootstrap: [AppComponent],
  exports: [HomeScreenComponent, DetailScreenComponent, AppRoutingModule],
})
export class AppModule {}
