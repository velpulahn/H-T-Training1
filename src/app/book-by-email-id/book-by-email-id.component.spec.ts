import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookByEmailIdComponent } from './book-by-email-id.component';

describe('BookByEmailIdComponent', () => {
  let component: BookByEmailIdComponent;
  let fixture: ComponentFixture<BookByEmailIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookByEmailIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookByEmailIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
