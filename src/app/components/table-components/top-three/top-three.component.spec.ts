import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableModule } from 'primeng/table';

import { TopThreeComponent } from './top-three.component';
import { ApiService } from 'src/app/services/api.service';

describe('TopThreeComponent', () => {
  let component: TopThreeComponent;
  let fixture: ComponentFixture<TopThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopThreeComponent],
      providers: [ApiService],
      imports: [
        TableModule,
        HttpClientTestingModule
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

  describe('getTopThree()', () => {
    it('should return the three first elements of the array', () => {
      const fakeData = [
        {
          name: 'studio A',
          winCount: 12
        },
        {
          name: 'studio B',
          winCount: 10
        },
        {
          name: 'studio C',
          winCount: 4
        },
        {
          name: 'studio D',
          winCount: 2
        }
      ];
      const expected = [
        {
          name: 'studio A',
          winCount: 12
        },
        {
          name: 'studio B',
          winCount: 10
        },
        {
          name: 'studio C',
          winCount: 4
        }
      ];
      expect(component.getTopThree(fakeData)).toEqual(expected);
    })

    it('should return all elements of the array if it contain less than three elements', () => {
      const fakeData = [
        {
          name: 'studio A',
          winCount: 12
        },
        {
          name: 'studio B',
          winCount: 10
        }
      ];
      const expected = fakeData;
      expect(component.getTopThree(fakeData)).toEqual(expected);
    })
  });
});
