import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { ListModule } from '../list/list.module';
import { ListComponent } from '../list/list.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    const routes = [
      { path: 'list', component: ListComponent },
      { path: 'dashboard', component: DashboardComponent }
    ] as Routes;

    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        RouterTestingModule.withRoutes(routes),
        DashboardModule,
        ListModule,
        HttpClientTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have content on menu', () => {
    const board = fixture.debugElement.query(By.css('.menu')).nativeElement;
    expect(board.innerHTML).not.toBeNull();
    expect(board.innerHTML.length).toBeGreaterThan(0)
  })

  it('should have the text dashboard in the button dashboard', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#buttonDashboard');
    expect(btn.innerText).toBe('Dashboard');
  });

  it('should have the text list in the button list', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#buttonList');
    expect(btn.innerText).toContain('List');
  });

  it('should button dashboard point to dashboard page', () => {
    const btn = fixture.debugElement.query(By.css('#buttonDashboard'))
    expect(btn.attributes['ng-reflect-router-link']).toBe('/dashboard');
  });

  it('should button dashboard point to dashboard page', () => {
    const btn = fixture.debugElement.query(By.css('#buttonList'))
    expect(btn.attributes['ng-reflect-router-link']).toBe('/list');
  });

  it('should go to dashboard view after click in button dashboard', fakeAsync(() => {
    fixture.debugElement.query(By.css('#buttonDashboard')).nativeElement.click();
    fixture.detectChanges();
    tick();
    const location: Location = TestBed.inject(Location);
    expect(location.path()).toBe('/dashboard');
  }));

  it('should go to list view after click in button list', fakeAsync(() => {
    fixture.debugElement.query(By.css('#buttonList')).nativeElement.click();
    fixture.detectChanges();
    tick();
    const location: Location = TestBed.inject(Location);
    expect(location.path()).toBe('/list');
  }));
});
