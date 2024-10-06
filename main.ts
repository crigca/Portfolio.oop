import { Bond } from "./models/Bond";
import { ETF } from "./models/ETF";
import { Stock } from "./models/Stock";
import { Portfolio } from "./Portfolio";   
import { InvalidDataError } from "./errors/InvalidDataError";
import { InsufficientBalanceError } from "./errors/InsufficientBalanceError";
import { InsufficientUnitsError } from "./errors/InsufficientUnitsError";

// Create investment instances
const tsla = new Stock("TSLA", 100, 250);
const al30 = new Bond("AL30", 250, 60);
const acwi = new ETF("ACWI", 50, 110);

// Create portfolio and add investments
const portfolio = new Portfolio();
portfolio.addInvestment(tsla);
portfolio.addInvestment(al30);
portfolio.addInvestment(acwi);

// Show total portfolio balance
console.log("----- Total Portfolio Balance: " + portfolio.checkBalance() + " -----");

// Buy Tesla shares
tsla.buyAssets(50);
console.log(`Bought Tesla shares, now you have ${tsla.getQuantity()} shares, balance: ${tsla.getDetails()}`);

// Sell Tesla shares
tsla.sellAssets(30);
console.log(`Sold Tesla shares, now you have ${tsla.getQuantity()} shares, balance: ${tsla.getDetails()}`);
    
// Calculate and display investment return for Tesla
console.log(`Investment return for Tesla: ${tsla.calculateReturn()}`);

console.log("----- Total Portfolio Balance: " + portfolio.checkBalance() + " -----");

// Buy AL30 bonds
al30.buyAssets(58);
console.log(`Bought AL30 bonds, now you have ${al30.getQuantity()} bonds, balance: ${al30.getDetails()}`);

// Sell AL30 bonds
al30.sellAssets(22);
console.log(`Sold AL30 bonds, now you have ${al30.getQuantity()} bonds, balance: ${al30.getDetails()}`);

// Calculate and display return for AL30 bonds
console.log(`Investment return for AL30 (bonds): ${al30.calculateReturn()}`);

console.log("----- Total Portfolio Balance: " + portfolio.checkBalance() + " -----");

// Buy ACWI ETF
acwi.buyAssets(200);
console.log(`Bought ACWI ETF, now you have ${acwi.getQuantity()} shares, balance: ${acwi.getDetails()}`);

// Sell ACWI ETF
acwi.sellAssets(38);
console.log(`Sold ACWI ETF, now you have ${acwi.getQuantity()} shares, balance: ${acwi.getDetails()}`);
    
// Calculate and display return for ACWI ETF
console.log(`Investment return for ACWI (ETF): ${acwi.calculateReturn()}`);


// Show total portfolio balance
console.log("----- Total Portfolio Balance: " + portfolio.checkBalance() + " -----");



   


