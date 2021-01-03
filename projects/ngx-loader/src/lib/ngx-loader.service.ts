import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxLoaderService {

  private readonly loader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public loader$: Observable<boolean> = this.loader.asObservable();

  constructor() { }

  public setLoader(value: boolean): void {
    this.loader.next(value);
  }
}
