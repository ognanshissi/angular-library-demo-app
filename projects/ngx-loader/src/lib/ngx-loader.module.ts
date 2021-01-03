import { NgxLoaderConfig } from './ngx-loader.config';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { NgxLoaderComponent } from './ngx-loader.component';


@NgModule({
  declarations: [NgxLoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxLoaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgxLoaderModule {

  static forRoot(configuration: NgxLoaderConfig): ModuleWithProviders<NgxLoaderModule> {
    return {
      ngModule: NgxLoaderModule,
      providers: [
        {
          provide: NgxLoaderConfig,
          useValue: configuration
        }
      ]
    }
  }
}
