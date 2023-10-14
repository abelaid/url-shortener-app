import { Input, Output, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-external-link',
  template: `
    <span *ngIf="url">
        <span *ngIf="displayLabel">Shortened url:  </span><a [href]="url" (click)="this.click.emit()" target="_blank">{{url}}<mat-icon>launch</mat-icon></a>
    </span>
    `,
  styleUrls: ['./external-link.component.scss']
})
export class ExternalLinkComponent {

  @Input()
  url: string|undefined;
  
  @Input()
  displayLabel = false;

  @Output()
  click = new EventEmitter();

}
