interface BankAccount {
  name: string;
  age: number;
  accountNumber: string;
  balance: number;
}

/**
 * Bank class that manages a collection of bank accounts
 */
export default class Bank {
  // Array to store all bank accounts
  private accounts: BankAccount[] = [];

  /**
   * Helper method to locate an account by its number
   * @param {string} accountNumber Account number to search for
   * @returns The found account or undefined if not found
   */
  private getAccount(accountNumber: string): BankAccount | undefined {
    return this.accounts.find(
      (account) => account.accountNumber === accountNumber
    );
  }

  /**
   * Creates a new account if the account number is unique
   * @param name -- Name of the account holder
   * @param age -- Age of the account holder
   * @param accountNumber -- Unique account number
   * @returns BankAccount -- The newly created account
   */
  public createAccount(
    name: string,
    age: number,
    accountNumber: string
  ): BankAccount {
    const existingAccount = this.getAccount(accountNumber);
    if (existingAccount) {
      throw new Error("Account with this number already exists");
    }
    const newAccount: BankAccount = {
      name,
      age,
      accountNumber,
      balance: 0,
    };
    this.accounts.push(newAccount);
    return newAccount;
  }

  /**
   * Deposits an amount into the specified account
   * @param {string} accountNumber The account number to deposit money into
   * @param {number} amount The amount to be deposited
   * @returns The updated bank account after the deposit
   */
  public deposit(accountNumber: string, amount: number): BankAccount {
    const account = this.getAccount(accountNumber);
    if (!account) {
      throw new Error("Account does not exist");
    }
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    account.balance += amount;
    return account;
  }

  /**
   * Withdraws an amount from the specified account
   * @param {string} accountNumber The account number to withdraw from
   * @param {number} amount The amount to withdraw
   * @returns The updated bank account after the withdrawal
   */
  public withdraw(accountNumber: string, amount: number): BankAccount {
    const account = this.getAccount(accountNumber);
    if (!account) {
      throw new Error("Account does not exist");
    }
    if (account.balance < amount) {
      throw new Error("Insufficient funds");
    }
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive");
    }
    account.balance -= amount;
    return account;
  }

  /**
   * Retrieves the balance for the specified account
   * @param {string} accountNumber The account number to check
   * @returns The current balance of the account
   */
  public getBalance(accountNumber: string): number {
    const account = this.getAccount(accountNumber);
    if (!account) {
      throw new Error("Account does not exist");
    }
    return account.balance;
  }
}
