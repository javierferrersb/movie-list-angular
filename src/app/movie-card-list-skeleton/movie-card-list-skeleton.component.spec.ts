import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardListSkeletonComponent } from './movie-card-list-skeleton.component';

describe('MovieCardListSkeletonComponent', () => {
  let component: MovieCardListSkeletonComponent;
  let fixture: ComponentFixture<MovieCardListSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCardListSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCardListSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
