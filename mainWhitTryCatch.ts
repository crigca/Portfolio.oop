import { Bond } from "./models/Bond";
import { ETF } from "./models/ETF";
import { Stock } from "./models/Stock";
import { Portfolio } from "./Portfolio";
import { InvalidDataError } from "./errors/InvalidDataError";
import { InsufficientBalanceError } from "./errors/InsufficientBalanceError";
import { InsufficientUnitsError } from "./errors/InsufficientUnitsError";

// Declare variables outside of try blocks
const portfolio = new Portfolio();
let tsla: Stock | undefined;
let al30: Bond | undefined;
let acwi: ETF | undefined;

try {
    // Create investment instances
    tsla = new Stock("TSLA", 100, 250);
    al30 = new Bond("AL30", 250, 60);
    acwi = new ETF("ACWI", 50, 110);
    
    // Add investments to the portfolio
    portfolio.addInvestment(tsla);
    portfolio.addInvestment(al30);
    portfolio.addInvestment(acwi);

    // Force error: Attempt to sell more Tesla shares than owned
    tsla.sellAssets(200);  

} catch (error) {
    if (error instanceof InvalidDataError) {
        console.error(`Invalid data error when adding investments: ${error.message}`);
    } else if (error instanceof InsufficientBalanceError) {
        console.error(`Insufficient balance error: ${error.message}`);
    } else if (error instanceof InsufficientUnitsError) {
        console.error(`Insufficient units error: ${error.message}`);
    } else {
        console.error("Unexpected error: ", error);
    }
}

try {
    // Force error: Attempt to add an invalid investment
    portfolio.addInvestment(null as any);  

} catch (error) {
    if (error instanceof InvalidDataError) {
        console.error(`Invalid data error when adding investments: ${error.message}`);
    } else {
        console.error("Unexpected error: ", error);
    }
}

try {
    // Force insufficient balance error by reducing balance to zero
    if (tsla && al30 && acwi) {
        // Sell all units to reduce balance to zero
        tsla.sellAssets(tsla.getQuantity());
        al30.sellAssets(al30.getQuantity());
        acwi.sellAssets(acwi.getQuantity()); 

        // Check balance after selling everything
        portfolio.checkBalance();  
    } else {
        console.error("Investments are not properly initialized.");
    }

} catch (error) {
    if (error instanceof InsufficientBalanceError) {
        console.error(`Insufficient balance error: ${error.message}`);
    } else {
        console.error("Unexpected error: ", error);
    }
}

try {
    // Force generic error by passing a negative quantity to buy
    if (tsla) {
        tsla.buyAssets(-50); 
        console.error("Tesla was not properly initialized.");
    }

} catch (error) {
    console.error("Generic error: ", error);
}
