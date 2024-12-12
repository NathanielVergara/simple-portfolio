import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _account: BehaviorSubject<string> = new BehaviorSubject<string>('World');

  constructor() { }

  get account$(): Observable<string> {
    return this._account.asObservable();
  }

  set account(value: string) {
    this._account.next(value);
  }
}
