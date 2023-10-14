import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortUrlGeneratorComponent } from './generator/short-url-generator.component';
import { ShortUrlListComponent } from './list/short-url-list.component';
import { RouterModule } from '@angular/router';
import { ShortenedUrlComponent } from './shortened-url.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ShortUrlGeneratorComponent,
    ShortUrlListComponent,
    ShortenedUrlComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: ShortenedUrlComponent
    }])
  ]
})
export class ShortenedUrlModule { }
