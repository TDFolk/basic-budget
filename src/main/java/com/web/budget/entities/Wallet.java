package com.web.budget.entities;

import java.util.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Wallet {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private final String name;
    private Long balance;
    @Lob
    private HashMap<String, Long> monthlyExpenses;

    public Wallet() {
        this.name = "";
        this.balance = Long.valueOf(0);
        this.monthlyExpenses = new HashMap<String, Long>();
    }

    public Wallet(String name, Long balance, HashMap<String, Long> monthlyExpenses) {
        this.name = name;
        this.balance = balance;
        this.monthlyExpenses = monthlyExpenses;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Long getBalance() {
        return balance;
    }

    public HashMap<String, Long> getMonthlyExpenses() {
        return monthlyExpenses;
    }

    @Override
    public String toString() {
        return String.format(
            "Wallet[id=%d, name='%s', balance=%d]", 
            id, name, balance) + monthlyExpenses.toString();
    }
}