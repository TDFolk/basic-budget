import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletListComponent } from './component/wallet-list/wallet-list.component';
import { WalletFormComponent } from './component/wallet-form/wallet-form.component';
import { WalletService } from './service/wallet.service';

@NgModule({
  declarations: [
    AppComponent,
    WalletListComponent,
    WalletFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WalletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
