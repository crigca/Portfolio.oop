import { InsufficientUnitsError } from "../errors/InsufficientUnitsError";
import { IInvestment } from "../interfaces/IInvestment";

export abstract class Investment implements IInvestment {
    protected _ticker: string;
    protected _quantity: number;
    protected _purchasePrice: number;

    constructor(ticker: string, quantity: number, purchasePrice: number) {
        this._ticker = ticker;
        this._quantity = quantity;
        this._purchasePrice = purchasePrice;
    }

    // Returns investment details
    getDetails(): string {
        return `Ticker: ${this._ticker}, Quantity: ${this._quantity}, Purchase Price: ${this._purchasePrice}`;
    }
    
    // Getter to retrieve the quantity
    getQuantity(): number {
        return this._quantity;
    } 

    // Method to buy additional units
    buyAssets(quantity: number): void {
        if (quantity <= 0) {
            throw new Error("Quantity to buy must be greater than zero");
        }
        this._quantity += quantity;
    }
    
    // Method to sell units
    sellAssets(quantity: number): void {
        if (quantity > this._quantity) {
            throw new InsufficientUnitsError("Cannot sell more units than owned");
        }
        this._quantity -= quantity;
    }

    abstract checkBalance(): number;

    abstract calculateReturn(): number;
}
