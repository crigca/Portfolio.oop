import { IInvestment } from "./interfaces/IInvestment";
import { InvalidDataError } from "./errors/InvalidDataError";
import { InsufficientBalanceError } from "./errors/InsufficientBalanceError";

export class Portfolio {
    private investments: IInvestment[] = [];

    // Adds an investment to the portfolio
    addInvestment(investment: IInvestment): void {
        if (!investment) {
            throw new InvalidDataError("Invalid data");
        }
        this.investments.push(investment);
    }

    // Calculates the total balance of the portfolio
    checkBalance(): number {
        let totalBalance = 0;
        this.investments.forEach(investment => {
            totalBalance += investment.checkBalance();
        });
        if (totalBalance <= 0) {
            throw new InsufficientBalanceError("Portfolio balance is insufficient to proceed");
        }
        return totalBalance;
    }
}
