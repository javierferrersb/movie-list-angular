import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {
  GetByImdbIDParams,
  GetBySearchParams,
  GetByTitleParams,
} from 'src/global/interfaces';
import {
  GetByImdbIDResponse,
  GetBySearchResponse,
  GetByTitleResponse,
} from 'src/global/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class APIServiceService {
  private OMD_WEBSITE = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  GetBySearch = (
    parameters: GetBySearchParams
  ): Observable<GetBySearchResponse> => {
    const params = {
      apikey: environment.OMDB_API_KEY,
      ...parameters,
    };

    return this.http.get<GetBySearchResponse>(this.OMD_WEBSITE, {
      params: params,
    });
  };

  GetByImdbID(parameters: GetByImdbIDParams): Observable<GetByImdbIDResponse> {
    const params = {
      apikey: environment.OMDB_API_KEY,
      ...parameters,
    };
    return this.http.get<GetByImdbIDResponse>(this.OMD_WEBSITE, {
      params: params,
    });
  }

  GetByTitle(parameters: GetByTitleParams): Observable<GetByTitleResponse> {
    const params = {
      apikey: environment.OMDB_API_KEY,
      ...parameters,
    };
    return this.http.get<GetByTitleResponse>(this.OMD_WEBSITE, {
      params: params,
    });
  }
}
