import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowReaderComponent } from './now-reader.component';

describe('NowReaderComponent', () => {
  let component: NowReaderComponent;
  let fixture: ComponentFixture<NowReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NowReaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NowReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
