import { Component, OnInit, Input } from '@angular/core';
import { WalletService } from '../services/wallet.service';
import { Currencie } from '../model/currencie.model';
import { Token } from '../model/token.model';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  @Input() wallet: Token;
  tokenCurrencie: Currencie;

  constructor(public ws: WalletService) { }

  ngOnInit() {
     this.token(this.wallet.id);
  }

  token(id: number): void {
    this.ws.getToken(id).subscribe(res => {
      this.tokenCurrencie = res;
    });
  }
}
