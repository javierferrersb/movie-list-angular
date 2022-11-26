import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APIServiceService } from '../apiservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail-screen',
  templateUrl: './detail-screen.component.html',
  styleUrls: ['./detail-screen.component.css'],
})
export class DetailScreenComponent implements OnInit {
  private apiService!: APIServiceService;
  private id: string = '';
  rows: {
    title: string;
    value: string;
  }[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.apiService = new APIServiceService(http);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    console.log(this.id);
    this.apiService
      .GetByImdbID({
        i: this.id,
      })
      .subscribe((data) => {
        this.rows = [
          {
            title: 'Title',
            value: data.Title,
          },
          {
            title: 'Year',
            value: data.Year,
          },
          {
            title: 'Rated',
            value: data.Rated,
          },
          {
            title: 'Released',
            value: data.Released,
          },
          {
            title: 'Runtime',
            value: data.Runtime,
          },
          {
            title: 'Genre',
            value: data.Genre,
          },
          {
            title: 'Director',
            value: data.Director,
          },
          {
            title: 'Writer',
            value: data.Writer,
          },
          {
            title: 'Actors',
            value: data.Actors,
          },
          {
            title: 'Plot',
            value: data.Plot,
          },
          {
            title: 'Language',
            value: data.Language,
          },
          {
            title: 'Country',
            value: data.Country,
          },
          {
            title: 'Awards',
            value: data.Awards,
          },
        ];
      });
  }
}
