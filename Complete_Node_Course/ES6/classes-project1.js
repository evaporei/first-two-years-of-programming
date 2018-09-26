class BankAccount {
    constructor (balance) {
        this.balance = typeof balance === "number" ? balance : 0
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

    withdraw (amount) {
        if (typeof amount === "number" && amount <= this.balance) {
            this.balance -= amount
            return this.balance
        } else {
            console.log("The amount to be withdraw needs to be a number and smaller than the balance in the account.")
            return false
        }
    }

    printBalance () {
        console.log(`Your balance is $${this.balance}`)
    }
}

const account = new BankAccount(100)
account.deposit(100)
account.withdraw(10)
account.printBalance()// 190

const account2 = new BankAccount(";asdfjouh22")// 0 balance
account2.deposit("plant")// err
account2.withdraw(true)// err
account2.printBalance()// 0

const account3 = new BankAccount(400)
account3.deposit(-100)
account3.withdraw(400)
account3.printBalance()