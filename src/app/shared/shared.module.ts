import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ExternalLinkComponent } from './components/external-link/external-link.component';

@NgModule({
  declarations: [
    ExternalLinkComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ExternalLinkComponent
  ]
})
export class SharedModule { }
