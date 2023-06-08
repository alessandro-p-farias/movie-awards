import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModule } from 'primeng/card';

import { DashboardComponent } from './dashboard.component';
import { ProducersWinningIntervalModule } from '../table-components/producers-winning-interval/producers-winning-interval.module';
import { WinnersByYearModule } from '../table-components/winners-by-year/winners-by-year.module';
import { WinningYearsRankingModule } from '../table-components/winning-years-ranking/winning-years-ranking.module';
import { TopThreeModule } from '../table-components/top-three/top-three.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [
        CardModule,
        ProducersWinningIntervalModule,
        WinnersByYearModule,
        WinningYearsRankingModule,
        TopThreeModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render producers winning interval app', () => {
    expect(fixture.debugElement.nativeElement.innerHTML).toContain('<app-producers-winning-interval');
  });

  it('should render top three app', () => {
    expect(fixture.debugElement.nativeElement.innerHTML).toContain('<app-top-three');
  });

  it('should render winners by year app', () => {
    expect(fixture.debugElement.nativeElement.innerHTML).toContain('<app-winners-by-year');
  });

  it('should render winning years ranking app', () => {
    expect(fixture.debugElement.nativeElement.innerHTML).toContain('<app-winning-years-ranking');
  });
});
