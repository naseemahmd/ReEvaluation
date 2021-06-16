import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryLeafComponent } from './binary-leaf.component';

describe('BinaryLeafComponent', () => {
  let component: BinaryLeafComponent;
  let fixture: ComponentFixture<BinaryLeafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinaryLeafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryLeafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
