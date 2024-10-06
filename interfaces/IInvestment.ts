
export interface IInvestment{
    buyAssets(quantity: number): void;
    sellAssets(quantity: number): void;
    checkBalance(): number;
    calculateReturn(): number;
}