import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { WinnersByYearComponent } from './winners-by-year.component';

describe('WinnersByYearComponent', () => {
  let component: WinnersByYearComponent;
  let fixture: ComponentFixture<WinnersByYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WinnersByYearComponent],
      imports: [
        FormsModule,
        TableModule,
        HttpClientTestingModule,
        InputTextModule,
        ButtonModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WinnersByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table to display', () => {
    const table = fixture.debugElement.nativeElement.querySelector('#winnersTable');
    expect(table.innerHTML.length).toBeGreaterThan(0);
  });

  it('should define variable winners', () => {
    expect(fixture.componentInstance.winners).toBeDefined();
  });
});
