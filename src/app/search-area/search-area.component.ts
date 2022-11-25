import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.css'],
})
export class SearchAreaComponent implements OnInit {
  @Input() searchMovies!: (searchQuery: string) => void;

  searchForm = this.formBuilder.group({
    searchText: '',
  });

  onSubmit(event: Event): void {
    event.preventDefault();
    this.searchMovies(this.searchForm.value.searchText || '');
  }
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
