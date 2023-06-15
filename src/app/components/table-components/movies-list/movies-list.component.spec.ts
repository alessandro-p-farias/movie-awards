import { HttpClientTestingModule } from '@angular/common/http/testing';
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

  it('should change the component when input variable is true', () => {
    component.movies = {
      content: [
        {
          id: 1,
          year: 1980,
          title: 'Stop the Music',
          studios: [
            'Associated Film Distribution'
          ],
          producers: [
            'Allan Carr'
          ],
          winner: true
        },
        {
          id: 2,
          year: 1980,
          title: 'Cruising',
          studios: [
            'Lorimar Productions',
            'United Artists'
          ],
          producers: [
            'Jerry Weintraub'
          ],
          winner: false
        }
      ],
      pageable: {
        sort: {
          unsorted: true,
          sorted: false,
        },
        offset: 0,
        pageSize: 15,
        pageNumber: 0,
        paged: true,
        unpaged: false
      },
      sort: {
        unsorted: true,
        sorted: false,
      },
      first: true,
      last: false,
      size: 10,
      number: 0,
      numberOfElements: 2
    };
    component.showOnlyWinners = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#winnerFilter')).toBeNull();
    expect(fixture.nativeElement.querySelector('#winnerHeader')).toBeNull();
    expect(fixture.nativeElement.querySelector('#winnerCell')).toBeNull();

    component.showOnlyWinners = false;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#winnerFilter')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('#winnerHeader')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('#winnerCell')).not.toBeNull();
  });

  describe('calculatePageNumber', () => {
    it('should calculate the page number correctly', () => {
      expect(component.calculatePageNumber(60, 30)).toEqual(2);
    })
    it('should return the rounded value if the parameters where incorrectly', () => {
      expect(component.calculatePageNumber(66, 30)).toEqual(2);
    })
    it('should return a number no matter the parameters sent', () => {
      expect(component.calculatePageNumber(0, 0)).not.toBeNaN();
      expect(component.calculatePageNumber(0, 10)).not.toBeNaN();
      expect(component.calculatePageNumber(23, 231)).not.toBeNaN();
      expect(component.calculatePageNumber(111123, 21231)).not.toBeNaN();
    })
  });
});
