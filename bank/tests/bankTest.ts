import Bank from "../src/bank";

// initializing the Bank instance
const bank = new Bank();

// scenario 1: verifying successful creation of an account
try {
  const account = bank.createAccount("John Doe", 29, "2938298");
  if (account.accountNumber === "2938298") {
    console.log("Scenario 1 passed");
  }
} catch (e) {
  console.log("Scenario 1 failed");
}

// scenario 2: checking failure when trying to create a duplicate account
try {
  bank.createAccount("John Doe", 29, "2938298");
  console.log("Scenario 2 failed");
} catch (e) {
  console.log("Scenario 2 passed");
}

// scenario 3: testing deposit functionality for an existing account
try {
  bank.deposit("2938298", 100);
  console.log("Scenario 3 passed");
} catch (e) {
  console.log("Scenario 3 failed");
}

// scenario 4: verifying deposit failure when account is not found
try {
  bank.deposit("9999999", 100);
  console.log("Scenario 4 failed");
} catch (e) {
  if (e instanceof Error && e.message === "Account does not exist") {
    console.log("Scenario 4 passed");
  } else {
    console.log("Scenario 4 failed");
  }
}

// scenario 5: testing withdrawal from an account with sufficient balance
try {
  bank.withdraw("2938298", 50);
  console.log("Scenario 5 passed");
} catch (e) {
  console.log("Scenario 5 failed");
}

// scenario 6: verifying withdrawal failure when insufficient balance exists
try {
  bank.withdraw("2938298", 100);
  console.log("Scenario 6 failed");
} catch (e) {
  if (e instanceof Error && e.message === "Insufficient funds") {
    console.log("Scenario 6 passed");
  } else {
    console.log("Scenario 6 failed");
  }
}

// scenario 7: testing withdrawal failure when account is not found
try {
  bank.withdraw("9999999", 50);
  console.log("Scenario 7 failed");
} catch (e) {
  if (e instanceof Error && e.message === "Account does not exist") {
    console.log("Scenario 7 passed");
  } else {
    console.log("Scenario 7 failed");
  }
}

// scenario 8: verifying successful balance check for an existing account
try {
  const balance = bank.getBalance("2938298");
  console.log(balance === 50 ? "Scenario 8 passed" : "Scenario 8 failed");
} catch (e) {
  console.log("Scenario 8 failed");
}

// scenario 9: testing balance check failure when account is not found
try {
  bank.getBalance("9999999");
  console.log("Scenario 9 failed");
} catch (e) {
  if (e instanceof Error && e.message === "Account does not exist") {
    console.log("Scenario 9 passed");
  } else {
    console.log("Scenario 9 failed");
  }
}

// scenario 10: verifying deposit failure when given an invalid amount
try {
  bank.deposit("2938298", -100);
  console.log("Scenario 10 failed");
} catch (e) {
  if (e instanceof Error && e.message === "Deposit amount must be positive") {
    console.log("Scenario 10 passed");
  } else {
    console.log("Scenario 10 failed");
  }
}

// scenario 11: testing withdrawal failure when given an invalid amount
try {
  bank.withdraw("2938298", -100);
  console.log("Scenario 11 failed");
} catch (e) {
  if (
    e instanceof Error &&
    e.message === "Withdrawal amount must be positive"
  ) {
    console.log("Scenario 11 passed");
  } else {
    console.log("Scenario 11 failed");
  }
}
