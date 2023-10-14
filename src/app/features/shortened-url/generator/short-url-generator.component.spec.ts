import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortUrlGeneratorComponent } from './short-url-generator.component';

describe('ShortUrlGeneratorComponent', () => {
  let component: ShortUrlGeneratorComponent;
  let fixture: ComponentFixture<ShortUrlGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortUrlGeneratorComponent]
    });
    fixture = TestBed.createComponent(ShortUrlGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
