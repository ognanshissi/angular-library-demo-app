import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgxLoaderComponent } from './ngx-loader.component';



@NgModule({
  declarations: [NgxLoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxLoaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgxLoaderModule { }
