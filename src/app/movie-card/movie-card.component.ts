import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() title!: string;
  @Input() posterPath!: string;
  @Input() id!: string;
  @Input() year!: string;

  constructor() {}

  showPoster: boolean = this.posterPath !== 'N/A';

  ngOnInit(): void {}
}
