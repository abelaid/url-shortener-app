import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortUrlListComponent } from './short-url-list.component';
import { AppTestingModule } from 'src/test/app-testing.module';

describe('ShortUrlListComponent', () => {
  let component: ShortUrlListComponent;
  let fixture: ComponentFixture<ShortUrlListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule],
      declarations: [ShortUrlListComponent]
    });
    fixture = TestBed.createComponent(ShortUrlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
