import { Injectable } from '@angular/core';
import {
  GetMovieDetailsFromIDParams,
  GetMovieDetailsFromTitleParams,
  SearchMoviesParams,
} from 'src/global/interfaces';
import {
  GetByImdbIDResponse,
  GetBySearchResponse,
  GetByTitleResponse,
} from 'src/global/types';
import { APIServiceService } from './apiservice.service';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private APIService: APIServiceService) {}

  SearchMovies(parameters: SearchMoviesParams) {
    let { searchQuery, searchType, year, page } = parameters;
    searchType = 'movie';
    const params = {
      s: searchQuery,
      type: searchType,
      y: year,
      page: page,
    };
    this.APIService.GetBySearch(params).subscribe(
      (data: GetBySearchResponse) => {
        if (data.Response === 'True') {
          return data.Search;
        } else {
          throw new Error(data.Error);
        }
      }
    );
  }

  GetMovieDetailsFromID(parameters: GetMovieDetailsFromIDParams) {
    const { imdbID, searchType, year, plot } = parameters;
    const params = {
      i: imdbID,
      type: searchType,
      y: year,
      plot: plot,
    };
    this.APIService.GetByImdbID(params).subscribe(
      (data: GetByImdbIDResponse) => {
        if (data.Response === 'True') {
          return data;
        } else {
          throw new Error(data.Error);
        }
      }
    );
  }

  GetMovieDetailsFromTitle(parameters: GetMovieDetailsFromTitleParams) {
    const { title, searchType, year, plot } = parameters;
    const params = {
      t: title,
      type: searchType,
      y: year,
      plot: plot,
    };
    this.APIService.GetByTitle(params).subscribe((data: GetByTitleResponse) => {
      if (data.Response === 'True') {
        return data;
      } else {
        throw new Error(data.Error);
      }
    });
  }
}
