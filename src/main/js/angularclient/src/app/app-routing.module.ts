import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalletListComponent } from './component/wallet-list/wallet-list.component';
import { WalletFormComponent } from './component/wallet-form/wallet-form.component';

const routes: Routes = [
  { path: 'wallets', component: WalletListComponent},
  { path: 'addwallet', component: WalletFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
