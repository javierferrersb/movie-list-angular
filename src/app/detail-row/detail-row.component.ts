import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-row',
  templateUrl: './detail-row.component.html',
  styleUrls: ['./detail-row.component.css'],
})
export class DetailRowComponent implements OnInit {
  @Input() title!: string;
  @Input() value!: string;

  constructor() {}

  ngOnInit(): void {}
}
