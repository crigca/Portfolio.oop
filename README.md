## Features

- **Investment Management**: Allows you to add and list investments within a portfolio.
- **Custom Error Handling**: Manages invalid operations, such as attempting to sell more units than are available.
- **SOLID Principles**: Implements a clean architecture using **interfaces**, **inheritance**, and **abstract classes** for flexible and scalable design.

## Classes

### 1. `Portfolio.ts`
Manages the investment portfolio and allows operations like adding new investments. It calculates the total balance and ensures there are sufficient funds for future operations.

### 2. Investment Models
Each of these files represents a specific type of investment, all inheriting from the abstract class `Investment.ts`:
- **`Stock.ts`**: Models a stock investment. Calculates returns based on the current market price.
- **`Bond.ts`**: Models a bond investment. Calculates returns by applying a fixed interest rate.
- **`ETF.ts`**: Models an ETF (Exchange-Traded Fund) investment. Calculates returns considering the market price and a management fee.
- **`Investment.ts`**: An abstract class that defines shared logic among all investment types, such as methods for buying and selling units.

### 3. Interfaces
- **`IInvestment.ts`**: Defines essential methods that all investments must implement, such as `calculateReturn()`, `buyAssets()`, `sellAssets()`, and `checkBalance()`.

### 4. Error Handling
These files contain custom errors for different situations:
- **`InvalidDataError.ts`**: Used to indicate invalid input data, such as when trying to add an investment without proper information.
- **`InsufficientBalanceError.ts`**: Triggered when the portfolio’s balance isn’t sufficient to cover an operation.
- **`InsufficientUnitsError.ts`**: Throws an error when attempting to sell more units of an investment than are available.

