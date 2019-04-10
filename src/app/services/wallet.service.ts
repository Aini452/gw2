import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  API_URL = 'https://api.guildwars2.com/v2/account/wallet';
  API_KEY = '95D96FCA-7E23-834E-A4D4-0E2CCF0603C5DE4D9A3B-2686-4DBF-B1FE-3BAE731EC048';

 // https://wiki.guildwars2.com/wiki/API:2/account/wallet à mettre en lien avec https://wiki.guildwars2.com/wiki/API:2/currencies
  constructor() { }
}
