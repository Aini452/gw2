import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  URL_API = 'https://api.guildwars2.com/v2/account';
  URL_KEY = '95D96FCA-7E23-834E-A4D4-0E2CCF0603C5DE4D9A3B-2686-4DBF-B1FE-3BAE731EC048';

  constructor(public http: HttpClient) { }

  getAccount(): Observable<Account> {
    return this.http.get<Account>(this.URL_API +
      '?access_token=' + this.URL_KEY);
  }
}
