import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbySearchComponent } from './bookby-search.component';

describe('BookbySearchComponent', () => {
  let component: BookbySearchComponent;
  let fixture: ComponentFixture<BookbySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookbySearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookbySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
