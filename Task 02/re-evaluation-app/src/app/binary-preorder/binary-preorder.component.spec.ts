import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryPreorderComponent } from './binary-preorder.component';

describe('BinaryPreorderComponent', () => {
  let component: BinaryPreorderComponent;
  let fixture: ComponentFixture<BinaryPreorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinaryPreorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryPreorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
