import { Component } from '@angular/core';
import { ShortenUrlServiceService } from '../services/shorten-url-service.service';
import { ShortenedUrl } from '../model/shortened-url';

@Component({
  selector: 'app-short-url-list',
  templateUrl: './short-url-list.component.html'
})
export class ShortUrlListComponent {

  displayedColumns: string[] = ['shortenedUrl', 'completeUrl', 'clickCount', 'delete'];
  data: ShortenedUrl[] = [];

  constructor(private shortenUrlServiceService: ShortenUrlServiceService) {
    this.shortenUrlServiceService.refresh$.subscribe(() => this._load());
  }

  onDelete(shortened: ShortenedUrl): void {
    this.shortenUrlServiceService.delete(shortened).subscribe();
  }

  onShortenedUrlClick(): void {
    setTimeout(() => this.shortenUrlServiceService.triggerRefresh(), 1000);
  }

  private _load(): void {
    this.shortenUrlServiceService.findAll()
      .subscribe((shortenedUrls: Array<ShortenedUrl>) => this.data = shortenedUrls);

  }

  
}
