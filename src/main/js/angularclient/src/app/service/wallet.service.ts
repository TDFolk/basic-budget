import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Wallet } from '../model/wallet';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  
  private walletUrl: string;

  constructor(private http: HttpClient) {
    this.walletUrl = 'http://localhost:8080/wallets';
  }

  public findAll(): Observable<Wallet[]> {
    return this.http.get<Wallet[]>(this.walletUrl);
  }

  public save(wallet: Wallet) {
    return this.http.post<Wallet>(this.walletUrl, wallet);
  }
}
