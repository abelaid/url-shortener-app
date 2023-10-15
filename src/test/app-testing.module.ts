import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoreModule } from 'src/app/core/core.module';
import { FeaturesModule } from 'src/app/features/features.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CoreModule,
    SharedModule,
    FeaturesModule,
    NoopAnimationsModule,
    HttpClientTestingModule
  ],
  exports: [
    CoreModule,
    SharedModule,
    FeaturesModule,
    NoopAnimationsModule,
    HttpClientTestingModule
  ]
})
export class AppTestingModule { }
