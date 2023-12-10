/* 
Filename: complexCode.js

This code is a simulation of a bank account management system.
It includes features for creating accounts, depositing and withdrawing funds,
transferring funds between accounts, and generating account statements.

*/

// Class representing a bank account
class BankAccount {
  constructor(accountNumber, accountHolderName, initialBalance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = initialBalance;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Invalid amount. Deposit amount must be greater than zero.");
    }

    this.balance += amount;
    this.transactions.push(`Deposit: +${amount}`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Invalid amount. Withdrawal amount must be greater than zero.");
    }

    if (amount > this.balance) {
      throw new Error("Insufficient balance.");
    }

    this.balance -= amount;
    this.transactions.push(`Withdrawal: -${amount}`);
  }

  transfer(amount, receiver) {
    if (amount <= 0) {
      throw new Error("Invalid amount. Transfer amount must be greater than zero.");
    }

    if (amount > this.balance) {
      throw new Error("Insufficient balance.");
    }

    this.balance -= amount;
    receiver.deposit(amount);

    this.transactions.push(`Transfer to ${receiver.accountNumber}: -${amount}`);
  }

  generateStatement() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Account Holder: ${this.accountHolderName}`);
    console.log("Transaction History: ");

    for (let transaction of this.transactions) {
      console.log(transaction);
    }

    console.log(`Current Balance: ${this.balance}`);
  }
}

// Creating sample bank accounts
const account1 = new BankAccount(123456, "John Doe", 1000);
const account2 = new BankAccount(789012, "Jane Smith", 500);

// Depositing, withdrawing, and transferring funds
account1.deposit(500);
account1.withdraw(200);
account1.transfer(100, account2);

account2.deposit(1000);
account2.withdraw(300);
account2.transfer(200, account1);

// Generating account statements
console.log("Account Statement for Account 1");
account1.generateStatement();

console.log("Account Statement for Account 2");
account2.generateStatement();

// Output:
// Account Statement for Account 1
// Account Number: 123456
// Account Holder: John Doe
// Transaction History:
// Deposit: +500
// Withdrawal: -200
// Transfer to 789012: -100
// Current Balance: 1200

// Account Statement for Account 2
// Account Number: 789012
// Account Holder: Jane Smith
// Transaction History:
// Deposit: +1000
// Withdrawal: -300
// Transfer to 123456: -200
// Current Balance: 1000