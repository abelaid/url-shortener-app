import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule.forChild([
      
      {
        path: '',
        data: { pageTitle: 'Shortened Urls' },
        loadChildren: () => import('./shortened-url/shortened-url.module').then(m => m.ShortenedUrlModule),
      },
    ]),
  ],
})
export class FeaturesRoutingModule { }
