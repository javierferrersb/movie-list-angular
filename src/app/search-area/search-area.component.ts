import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.css'],
})
export class SearchAreaComponent implements OnInit {
  @Input() searchMovies!: (searchQuery: string) => void;

  searchForm = new FormGroup({
    searchQuery: new FormControl(''),
  });

  onSubmit() {
    this.searchMovies(this.searchForm.controls.searchQuery.value || '');
  }
  constructor() {}

  ngOnInit(): void {}
}
