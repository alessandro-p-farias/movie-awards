import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableModule } from 'primeng/table';

import { WinningYearsRankingComponent } from './winning-years-ranking.component';
import { ApiService } from 'src/app/services/api.service';

describe('WinningYearsRankingComponent', () => {
  let component: WinningYearsRankingComponent;
  let fixture: ComponentFixture<WinningYearsRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WinningYearsRankingComponent],
      providers: [ApiService],
      imports: [
        TableModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WinningYearsRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table to display', () => {
    const table = fixture.debugElement.nativeElement.querySelector('#rankingTable');
    expect(table.innerHTML.length).toBeGreaterThan(0);
  });

  it('should define variable ranking', () => {
    expect(fixture.componentInstance.ranking).toBeDefined();
  });
});
