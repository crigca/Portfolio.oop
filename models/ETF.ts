import { Investment } from "./Investment";

export class ETF extends Investment {
    private currentMarketPrice: number = 120;
    private managementFee: number = 0.01;
    
    // Implements the checkBalance method for ETFs
    checkBalance(): number {
        return this._quantity * this._purchasePrice;
    }

    // Implements the calculateReturn method for ETFs
    calculateReturn(): number {
        const rawReturn = (this.currentMarketPrice - this._purchasePrice) * this._quantity;
        return rawReturn - rawReturn * this.managementFee;
    }
}
