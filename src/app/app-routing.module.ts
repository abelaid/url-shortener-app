import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {
        path: '',
        loadChildren: () => import(`./features/features-routing.module`).then(m => m.FeaturesRoutingModule),
      }
    ],
    { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
