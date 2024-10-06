import { Investment } from "./Investment";

export class Stock extends Investment {
    private currentMarketPrice: number = 300;
    
    // Implements the checkBalance method for stocks
    checkBalance(): number {
        return this._quantity * this._purchasePrice;
    }

   // Implements the calculateReturn method for stocks
   calculateReturn(): number {
       return (this.currentMarketPrice - this._purchasePrice) * this._quantity;
   }
}
