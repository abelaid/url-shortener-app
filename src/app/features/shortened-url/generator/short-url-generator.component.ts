import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms'
import { ErrorStateMatcher } from '@angular/material/core';
import { ShortenUrlServiceService } from '../services/shorten-url-service.service';
import { ShortenedUrlResponse } from '../model/shortened-url-response';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-short-url-generator',
  templateUrl: './short-url-generator.component.html',
  styleUrls: ['./short-url-generator.component.scss']
})
export class ShortUrlGeneratorComponent {
  urlFormControl = new FormControl('', [Validators.required,  Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]);

  matcher = new MyErrorStateMatcher();
  url: string|undefined;

  constructor(private shortenUrlServiceService: ShortenUrlServiceService) {}

  onSubmit() {
    if (this.urlFormControl.errors) {
      return;
    }
    this.shortenUrlServiceService.shorten(this.urlFormControl.value as string)
      .subscribe((shortenedUrl: ShortenedUrlResponse) => this.url=shortenedUrl.url);
  }

  onShortenedUrlClick() {
    setTimeout(() => this.shortenUrlServiceService.triggerRefresh(), 1000);

  }
}
