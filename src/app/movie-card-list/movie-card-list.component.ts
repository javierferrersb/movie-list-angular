import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/global/types';

@Component({
  selector: 'app-movie-card-list',
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.css'],
})
export class MovieCardListComponent implements OnInit {
  @Input() movies!: Movie[];
  constructor() {}

  ngOnInit(): void {}
}
