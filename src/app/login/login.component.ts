import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userAccount: Account;

  constructor(public account: AccountService) { }

  ngOnInit() {
    this.getAccount();
  }

  getAccount(): void {
    this.account.getAccount().subscribe( res => {
      this.userAccount = res;
      console.log(this.userAccount);
    }, error => {
      console.log('erreur !');
      console.log(error);
    });
  }

  getAge(time: number): string {
    let answer = 'Vous avez joué ';
    if ( Math.floor( time / 3600 ) !== 0 ) {
      answer += (Math.floor( time / 3600 )) + ' heures ';
    }
    return answer;
  }
}
