import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhaskarComponent } from './bhaskar.component';

describe('BhaskarComponent', () => {
  let component: BhaskarComponent;
  let fixture: ComponentFixture<BhaskarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhaskarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BhaskarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
