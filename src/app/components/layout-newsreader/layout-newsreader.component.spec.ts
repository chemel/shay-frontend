import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutNewsreaderComponent } from './layout-newsreader.component';

describe('LayoutNewsreaderComponent', () => {
  let component: LayoutNewsreaderComponent;
  let fixture: ComponentFixture<LayoutNewsreaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutNewsreaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutNewsreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
