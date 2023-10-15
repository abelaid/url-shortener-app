import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortUrlGeneratorComponent } from './short-url-generator.component';
import { AppTestingModule } from 'src/test/app-testing.module';
import { TestPage } from 'src/test/test-page';
import { ShortenUrlServiceService } from '../services/shorten-url-service.service';
import { of } from 'rxjs';

describe('ShortUrlGeneratorComponent', () => {
  let component: ShortUrlGeneratorComponent;
  let fixture: ComponentFixture<ShortUrlGeneratorComponent>;
  let testPage: TestPage;
  let shortenUrlServiceServiceSpy: any;

  beforeEach(() => {
    shortenUrlServiceServiceSpy = jasmine.createSpyObj('ShortenUrlServiceService', ['shorten']);
    TestBed.configureTestingModule({
      imports: [AppTestingModule],
      declarations: [ShortUrlGeneratorComponent],
      providers: [
        { provide: ShortenUrlServiceService, useValue: shortenUrlServiceServiceSpy }
      ]
    });
    fixture = TestBed.createComponent(ShortUrlGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(async () => {
    await fixture.whenStable();
    testPage = new TestPage(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('url input validation', () => {
    it('not accept empty input', () => {
      testPage.inputValue('#urlInput', '');
      testPage.expectElementContainsText('mat-error', 'Url is');
      testPage.expectElementContainsText('mat-error > strong', 'required');
      testPage.click('#submitBtn');

      expect(shortenUrlServiceServiceSpy.shorten).not.toHaveBeenCalled();
    });

    it('not accept non url text', () => {
      testPage.inputValue('#urlInput', 'Hey! this is not an url!');
      testPage.expectElementContainsText('mat-error', 'Please enter a valid url');
      testPage.click('#submitBtn');

      expect(shortenUrlServiceServiceSpy.shorten).not.toHaveBeenCalled();
    });

  });

  describe('shorten', () => {
    it('should shorten and display shortened url', () => {
      shortenUrlServiceServiceSpy.shorten.and.returnValue(of({url: 'http://greate.service/ShoRty'}));

      testPage.inputValue('#urlInput', 'http://fake.jasmine');
      testPage.click('#submitBtn');
      
      expect(shortenUrlServiceServiceSpy.shorten).toHaveBeenCalledWith('http://fake.jasmine');
      testPage.expectElementContainsText('app-external-link > span > span', 'Shortened url:');
      testPage.expectElementContainsText('app-external-link > span > a', 'http://greate.service/ShoRty');
    });
  });
});
