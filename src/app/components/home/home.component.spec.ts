import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Routes } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

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
        HttpClientTestingModule,
        ButtonModule,
        SidebarModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display and hide menu correctly', () => {
    component.showMenu = true;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('#menu')).not.toBeUndefined();

    component.showMenu = false;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('#menu')).not.toBeUndefined();
  });

  it('should have content on menu', () => {
    component.showMenu = true;
    fixture.detectChanges();
    const menu = fixture.debugElement.query(By.css('.menu')).nativeElement;
    expect(menu.innerHTML).not.toBeNull();
    expect(menu.innerHTML.length).toBeGreaterThan(0)
  })

  it('should have the text dashboard in the button dashboard when displays the menu', () => {
    component.showMenu = true;
    fixture.detectChanges();
    const btn = fixture.debugElement.nativeElement.querySelector('#buttonDashboard');
    expect(btn.innerText).toBe('DASHBOARD');
  });

  it('should have the text list in the button list when displays the menu', () => {
    component.showMenu = true;
    fixture.detectChanges();
    const btn = fixture.debugElement.nativeElement.querySelector('#buttonList');
    expect(btn.innerText).toContain('LIST');
  });

  it('should button dashboard point to dashboard page', () => {
    component.showMenu = true;
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('#buttonDashboard'))
    expect(btn.attributes['ng-reflect-router-link']).toBe('/dashboard');
  });

  it('should button dashboard point to dashboard page', () => {
    component.showMenu = true;
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('#buttonList'))
    expect(btn.attributes['ng-reflect-router-link']).toBe('/list');
  });

  it('should go to dashboard view after click in button dashboard', fakeAsync(() => {
    component.showMenu = true;
    fixture.detectChanges();
    fixture.debugElement.query(By.css('#buttonDashboard')).nativeElement.click();
    fixture.detectChanges();
    tick();
    const location: Location = TestBed.inject(Location);
    expect(location.path()).toBe('/dashboard');
  }));

  it('should go to list view after click in button list', fakeAsync(() => {
    component.showMenu = true;
    fixture.detectChanges();
    fixture.debugElement.query(By.css('#buttonList')).nativeElement.click();
    fixture.detectChanges();
    tick();
    const location: Location = TestBed.inject(Location);
    expect(location.path()).toBe('/list');
  }));
});
