import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wallet } from '../model/wallet.model';
import { Currencie } from '../model/currencie.model';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  API_URL = 'https://api.guildwars2.com/v2/account/wallet';
  API_URL_CURRENCIE = 'https://api.guildwars2.com/v2/currencies/';
  API_KEY = '95D96FCA-7E23-834E-A4D4-0E2CCF0603C5DE4D9A3B-2686-4DBF-B1FE-3BAE731EC048';

 // https://wiki.guildwars2.com/wiki/API:2/account/wallet à mettre en lien avec https://wiki.guildwars2.com/wiki/API:2/currencies
  constructor(public http: HttpClient) { }

  getWallet(): Observable<Wallet> {
    return this.http.get<Wallet>(
      this.API_URL
      + '?access_token='
      + this.API_KEY
    );
  }

  getToken(id: number): Observable<Currencie> {
    return this.http.get<Currencie>(
      this.API_URL_CURRENCIE
      + id
    );
  }
}
