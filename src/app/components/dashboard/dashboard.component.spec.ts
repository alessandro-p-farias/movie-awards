import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModule } from 'primeng/card';

import { DashboardComponent } from './dashboard.component';
import { ProducersWinningIntervalModule } from '../table-components/producers-winning-interval/producers-winning-interval.module';
import { WinningYearsRankingModule } from '../table-components/winning-years-ranking/winning-years-ranking.module';
import { TopThreeModule } from '../table-components/top-three/top-three.module';
import { MoviesListModule } from '../table-components/movies-list/movies-list.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [
        HttpClientTestingModule,
        CardModule,
        ProducersWinningIntervalModule,
        WinningYearsRankingModule,
        TopThreeModule,
        MoviesListModule
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
    expect(fixture.debugElement.nativeElement.innerHTML).toContain('<app-movies-list');
  });

  it('should render winning years ranking app', () => {
    expect(fixture.debugElement.nativeElement.innerHTML).toContain('<app-winning-years-ranking');
  });
});
