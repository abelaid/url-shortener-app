import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenedUrlComponent } from './shortened-url.component';

describe('ShortenedUrlComponent', () => {
  let component: ShortenedUrlComponent;
  let fixture: ComponentFixture<ShortenedUrlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortenedUrlComponent]
    });
    fixture = TestBed.createComponent(ShortenedUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
