import { Component, OnInit } from '@angular/core';
import { WalletService } from '../services/wallet.service';

import { Wallet } from '../model/wallet.model';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  wallets: Wallet;

  // Wallet service
  constructor(public ws: WalletService) { }

  ngOnInit() {
    this.wallet();
  }
  wallet() {
    this.ws.getWallet().subscribe(res => {
      this.wallets = res;
    });

  }
}
