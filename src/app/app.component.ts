import { NgxLoaderService } from 'ngx-loader';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'homework';

  constructor(
    private ngxLoaderService: NgxLoaderService
  ){}


  ngOnInit() {
    this.ngxLoaderService.setLoader(true);

    setTimeout(() => {
      this.ngxLoaderService.setLoader(false);
    }, 5000)
  }
}
