import { Component } from '@angular/core';
import { AccountService } from './services/account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  title = 'Account Page';
  account$: Observable<string>;

  constructor(
    private _accountService: AccountService
  ) {
    this.account$ = this._accountService.account$;
  }

  public executeHelloWorld() {
    window.alert('Hello World!');
    this.title = 'Hello World!';
  }

  public modifyAccount(event: Event) {
    console.log(event);
    const input = event.target as HTMLInputElement
    this._accountService.account = input.value;
  }
}
