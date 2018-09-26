class BankAccount {
    constructor (balance) {
        this.balance = typeof balance === "number" ? balance : 0
    }

    //getters and setters
    get balance () {
        return this._balance
    }
    set balance (value) {
        this._balance = value
        this.balanceUpdatedAt = new Date()
    }

    deposit (amount) {
        if (typeof amount === "number" && amount > 0) {
            this.balance += amount
            return true
        } else {
            console.log("The amount to be deposited needs to be a number and bigger than 0.")
            return false
        }
    }

    withdrawal (amount) {
        if (typeof amount === "number" && amount <= this.balance) {
            this.balance -= amount
            return this.balance
        } else {
            console.log("The amount to be withdrawal needs to be a number and smaller than the balance in the account.")
            return false
        }
    }

    printBalance () {
        console.log(`Your balance is $${this.balance}! Last updated at ${this.balanceUpdatedAt}`)
    }
}

class SavingsAccount extends BankAccount {
    deposit(amount) {
        if (super.deposit(amount))
            console.log("Congrats on saving $" + amount)
    }
    withdrawal () {
        console.log("You can't withdrawal in a Savings account.")
    }
}

let savingsAccount = new SavingsAccount(500)
savingsAccount.deposit(100)
savingsAccount.printBalance()
savingsAccount.withdrawal(25)
savingsAccount.printBalance()

// const account = new BankAccount(100)
// account.deposit(100)
// account.withdrawal(10)
// account.printBalance()// 190

// const account2 = new BankAccount(";asdfjouh22")// 0 balance
// account2.deposit("plant")// err
// account2.withdrawal(true)// err
// account2.printBalance()// 0

// const account3 = new BankAccount(400)
// account3.deposit(-100)
// account3.withdrawal(400)
// account3.printBalance()