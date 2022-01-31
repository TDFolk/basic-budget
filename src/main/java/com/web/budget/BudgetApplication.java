package com.web.budget;

import java.util.*;
import java.util.stream.Stream;

import com.web.budget.entities.Wallet;
import com.web.budget.repositories.WalletRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BudgetApplication {

	public static void main(String[] args) {
		SpringApplication.run(BudgetApplication.class, args);
	}

	@Bean
	CommandLineRunner init(WalletRepository walletRepository) {
		return args -> {
			Stream.of("Trent", "Arielle").forEach(name -> {
				Wallet wallet = new Wallet(name, Long.valueOf(4000), new HashMap<String, Long>(Map.of("jacket", Long.valueOf(80))));
				walletRepository.save(wallet);
			});
			walletRepository.findAll().forEach(System.out::println);
		};
	}

}
