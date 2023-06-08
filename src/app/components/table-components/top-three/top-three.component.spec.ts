import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableModule } from 'primeng/table';

import { TopThreeComponent } from './top-three.component';

describe('TopThreeComponent', () => {
  let component: TopThreeComponent;
  let fixture: ComponentFixture<TopThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopThreeComponent],
      imports: [
        TableModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TopThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table to display', () => {
    const table = fixture.debugElement.nativeElement.querySelector('#topThreeTable');
    expect(table.innerHTML.length).toBeGreaterThan(0);
  });

  it('should define variable topThree', () => {
    expect(fixture.componentInstance.topThree).toBeDefined();
  });
});
