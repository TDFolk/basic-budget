package com.web.budget.repositories;

import com.web.budget.entities.Wallet;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WalletRepository extends CrudRepository<Wallet, Long>{}