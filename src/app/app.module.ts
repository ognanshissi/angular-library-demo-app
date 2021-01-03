import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxLoaderModule, NgxLoaderTypeEnum} from 'ngx-loader'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxLoaderModule.forRoot({
      type: NgxLoaderTypeEnum.GRID
    })
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
