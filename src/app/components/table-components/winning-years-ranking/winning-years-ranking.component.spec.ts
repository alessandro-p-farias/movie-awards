import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableModule } from 'primeng/table';

import { WinningYearsRankingComponent } from './winning-years-ranking.component';

describe('WinningYearsRankingComponent', () => {
  let component: WinningYearsRankingComponent;
  let fixture: ComponentFixture<WinningYearsRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WinningYearsRankingComponent],
      imports: [
        TableModule
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
