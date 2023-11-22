function createAccount(pin, amount) {
  let accountPin = pin;
  let currentBalance = amount;
  return {
    checkBalance(pin) {
      if (accountPin !== pin) {
        return "Invalid PIN";
      }
      return currentBalance;
    },
    deposit(pin, amount) {
      if (accountPin !== pin) {
        return "Invalid PIN";
      }
      currentBalance += amount;
      return `Successfully deposited $${amount}, Current balance: $${currentBalance}`;
    },
    withdraw(pin, amount) {
      if (accountPin !== pin) {
        return "Invalid PIN";
      } else if (amount > currentBalance) {
        return `Withdrawal amount exceeds account balance. Transaction cancelled`;
      }
      currentBalance -= amount;
      return `Successfully withdrew $${amount}, Current balance: $${currentBalance}`;
    },
    changePin(pin, changedPin) {
      if (accountPin !== pin) {
        return "Invalid Pin";
      }
      accountPin = changedPin;
      return `PIN successfully changed!`;
    },
  };
}

module.exports = { createAccount };
