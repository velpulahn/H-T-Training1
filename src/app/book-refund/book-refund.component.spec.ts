import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRefundComponent } from './book-refund.component';

describe('BookRefundComponent', () => {
  let component: BookRefundComponent;
  let fixture: ComponentFixture<BookRefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookRefundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
