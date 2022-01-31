import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WalletService } from '../../service/wallet.service';
import { Wallet } from '../../model/wallet';

@Component({
  selector: 'app-wallet-form',
  templateUrl: './wallet-form.component.html',
  styleUrls: ['./wallet-form.component.css']
})
export class WalletFormComponent {

  wallet: Wallet;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private walletService: WalletService) {
    this.wallet = new Wallet();  
  }

  onSubmit() {
    this.walletService.save(this.wallet).subscribe(result => this.gotoWalletList());
  }

  gotoWalletList() {
    this.router.navigate(['/wallets']);
  }
}
