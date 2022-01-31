package com.web.budget.contollers;

import com.web.budget.entities.Wallet;
import com.web.budget.repositories.WalletRepository;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class WalletController {
    
    private final WalletRepository walletRepository;

    public WalletController(WalletRepository walletRepository) {
        this.walletRepository = walletRepository;
    }

    @GetMapping("/wallets")
    public List<Wallet> getWallets() {
        return (List<Wallet>) walletRepository.findAll();
    }

    @PostMapping(path = "/wallets", consumes = "application/json")
    void addWallet(@RequestBody Wallet wallet) {
        System.out.println(wallet.toString());
        walletRepository.save(wallet);
    }

}
