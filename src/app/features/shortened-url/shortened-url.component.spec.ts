import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenedUrlComponent } from './shortened-url.component';
import { AppTestingModule } from 'src/test/app-testing.module';
import { ShortenedUrlModule } from './shortened-url.module';

describe('ShortenedUrlComponent', () => {
  let component: ShortenedUrlComponent;
  let fixture: ComponentFixture<ShortenedUrlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule, ShortenedUrlModule]
    });
    fixture = TestBed.createComponent(ShortenedUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
