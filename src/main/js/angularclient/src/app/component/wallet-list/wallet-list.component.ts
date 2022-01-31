import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from '../../model/wallet';
import { WalletService } from '../../service/wallet.service';

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.css']
})
export class WalletListComponent implements OnInit {

  wallets: Wallet[];
  expensesCollapse: boolean[] = [];
  keyStr: string = '';
  valueNum: number = 0;
  expenses: any[] = [];
  playMoney: number = 0;
  // currentIndex: number = 0;

  constructor(private walletService: WalletService, private router: Router) { }

  ngOnInit() {
    this.walletService.findAll().subscribe(data => {
      this.wallets = data;
      for (let i = 0; i < this.wallets.length; i++) {
        this.expensesCollapse.push(false);
      }
      console.log(this.wallets);
    });
  }

  selectTableRow(index: number) {
    if (this.expensesCollapse[index] === false) {
      this.expensesCollapse[index] = true;
    }
    else {
      this.expensesCollapse[index] = false;
    }
  }

  onSubmit(index: number) {
    // if (this.expenses.size == 0 || this.currentIndex != index) {
    //   this.expenses.clear();
    //   this.currentIndex = index;
    //   console.log("here");
    // }

    
    // this.expenses = Object.entries(this.wallets[index].monthlyExpenses);
    // let test = {[this.keyStr]: this.valueNum};
    
    // this.expenses.push(test)
    // console.log(this.expenses);

    // this.wallets[index].monthlyExpenses = JSON.stringify(this.expenses);
    // this.wallets[index].monthlyExpenses = "{\"tesla\": 100}, {\"chips\": 37}"
    // this.wallets[index].monthlyExpenses = {["chips"]: 80, ["poop"]: 250};
    this.wallets[index].monthlyExpenses[this.keyStr] = this.valueNum;
    console.log(this.wallets[index].monthlyExpenses);

    // this.wallets[index].monthlyExpenses = new Map();
    // this.wallets[index].monthlyExpenses.set(this.keyStr, this.valueNum);
    // array of tuples
    // this.wallets[index].monthlyExpenses = JSON.stringify(Array.from(this.expenses.entries()));
    // this.wallets[index].monthlyExpenses = JSON.stringify(this.expenses, replacer);
    // this.wallets[index].monthlyExpenses = "{\"tesla\": 100, \"chips\": 37}";
    
    // console.log(JSON.stringify(this.wallets[index], replacer));
    // console.log(this.expenses);
    this.walletService.save(this.wallets[index]).subscribe();
  }

  calcPlayMoney(index: number) {
    let totalExpenses = 0;
    Object.values(this.wallets[index].monthlyExpenses).forEach(val => totalExpenses += Number(val))
    this.playMoney = this.wallets[index].balance - totalExpenses;
  }

  deleteRow(index: number, expense: any) {
    delete this.wallets[index].monthlyExpenses[expense];
  }
}


