import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.css'],
})
export class ErrorDisplayComponent implements OnInit {
  @Input() error!: string;

  constructor() {}

  ngOnInit(): void {}
}
