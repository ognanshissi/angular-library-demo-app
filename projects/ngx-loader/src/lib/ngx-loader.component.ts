import { NgxLoaderService } from './ngx-loader.service';
import { NgxLoaderType, NgxLoaderTypeEnum } from './ngx-loader.config';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'ngx-loader',
  templateUrl: './ngx-loader.component.html',
  styleUrls: ['./ngx-loader.component.css'],
})
export class NgxLoaderComponent implements OnInit {

  @Input() type: NgxLoaderType = NgxLoaderTypeEnum.OVAL; // default
  @Input() size: number = 12;

  ngxLoaderTypeEnum = NgxLoaderTypeEnum;

  isLoading$: Observable<boolean> = of(false);

  constructor(
    private ngxLoaderService: NgxLoaderService
  ) { }

  ngOnInit(): void {
    console.log(this.type);
    this.isLoading$ = this.ngxLoaderService.loader$;
  }

}
