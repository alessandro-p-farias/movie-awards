import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducersWinningIntervalComponent } from './producers-winning-interval.component';

describe('ProducersWinningIntervalComponent', () => {
  let component: ProducersWinningIntervalComponent;
  let fixture: ComponentFixture<ProducersWinningIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducersWinningIntervalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducersWinningIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
