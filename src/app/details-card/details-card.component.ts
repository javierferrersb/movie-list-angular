import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.css'],
})
export class DetailsCardComponent implements OnInit {
  @Input() rows!: {
    title: string;
    value: string;
  }[];
  constructor() {}

  ngOnInit(): void {}
}
