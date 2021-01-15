import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinnowComponent } from './joinnow.component';

describe('JoinnowComponent', () => {
  let component: JoinnowComponent;
  let fixture: ComponentFixture<JoinnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinnowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
