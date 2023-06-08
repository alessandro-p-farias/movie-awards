import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { MoviesListComponent } from './movies-list.component';
import { ApiService } from 'src/app/services/api.service';

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesListComponent],
      providers: [ApiService],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        TableModule,
        ButtonModule,
        TableModule,
        InputTextModule,
        DropdownModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table to display', () => {
    const table = fixture.debugElement.nativeElement.querySelector('#moviesTable');
    expect(table.innerHTML.length).toBeGreaterThan(0);
  });

  it('should define variable movies', () => {
    expect(fixture.componentInstance.movies).toBeDefined();
  });

  it('should define variable yearFilter', () => {
    expect(fixture.componentInstance.yearFilter).toBeDefined();
  });

  it('should define variable winnerFilter', () => {
    expect(fixture.componentInstance.winnerFilter).toBeDefined();
  });

  it('should define variable winnerOptions', () => {
    expect(fixture.componentInstance.winnerOptions).toBeDefined();
  });

  it('should create variable winnerOptions correctly', () => {
    const expetedValue = [
      { label: 'All', value: null },
      { label: 'Yes', value: true },
      { label: 'No', value: false }
    ];

    expect(fixture.componentInstance.winnerOptions).toEqual(expetedValue);
  });
});
