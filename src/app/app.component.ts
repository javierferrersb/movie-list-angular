import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component } from '@angular/core';
import { Movie } from 'src/global/types';
import { APIServiceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  movies: Movie[] = [];
  loading: boolean = false;
  errorMessage = 'Error message';
  error = false;
  private searchText = '';
  private apiService!: APIServiceService;

  constructor(private http: HttpClient) {
    this.apiService = new APIServiceService(http);
  }

  searchMovies = (searchQuery: string) => {
    this.movies = [];
    this.loading = true;
    this.error = false;
    this.searchText = searchQuery;

    const params = {
      s: searchQuery,
    };

    this.apiService
      .GetBySearch({
        ...params,
        type: 'movie',
      })
      .subscribe((data) => {
        if (data.Response === 'True') {
          this.movies = data.Search;
          this.loading = false;
          console.log(this.movies);
        } else {
          this.error = true;
          this.errorMessage = data.Error || 'Error';
          this.loading = false;
        }
      });
  };
  title = 'movie-list-angular';
}
