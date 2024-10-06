import { Investment } from "./Investment";

export class Bond extends Investment {
    private interestRate: number = 0.05;
    
    // Implements the checkBalance method for bonds
    checkBalance(): number {
        return this._quantity * this._purchasePrice;
    }

    // Implements the calculateReturn method for bonds
    calculateReturn(): number {
        return this._quantity * this._purchasePrice * this.interestRate;
    }
}
