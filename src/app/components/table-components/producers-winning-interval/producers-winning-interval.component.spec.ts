import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableModule } from 'primeng/table';

import { ProducersWinningIntervalComponent } from './producers-winning-interval.component';
import { ApiService } from 'src/app/services/api.service';

describe('ProducersWinningIntervalComponent', () => {
  let component: ProducersWinningIntervalComponent;
  let fixture: ComponentFixture<ProducersWinningIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducersWinningIntervalComponent ],
      providers: [ApiService],
      imports: [
        TableModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducersWinningIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the max interval table to display', () => {
    const table = fixture.debugElement.nativeElement.querySelector('#maxIntervalTable');
    expect(table.innerHTML.length).toBeGreaterThan(0);
  });

  it('should have the min interval table to display', () => {
    const table = fixture.debugElement.nativeElement.querySelector('#minIntervalTable');
    expect(table.innerHTML.length).toBeGreaterThan(0);
  });

  it('should define variable intervals', () => {
    expect(fixture.componentInstance.intervals).toBeDefined();
  });
});
