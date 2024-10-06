classDiagram
    class IInvestment {
        +calculateReturn() number
        +buyAssets(quantity: number) void
        +sellAssets(quantity: number) void
        +checkBalance() number
    }

    class Investment {
        #_ticker : string
        #_quantity : number
        #_purchasePrice : number
        +getDetails() string
        +getQuantity() number
        +buyAssets(quantity: number) void
        +sellAssets(quantity: number) void
        +checkBalance() number
        +calculateReturn() number
    }

    IInvestment <|.. Investment : implements

    class Stock {
        +checkBalance() number
        +calculateReturn() number
        -currentMarketPrice : number = 300
    }

    class Bond {
        +checkBalance() number
        +calculateReturn() number
        -interestRate : number = 0.05
    }

    class ETF {
        +checkBalance() number
        +calculateReturn() number
        -currentMarketPrice : number = 120
        -managementFee : number = 0.01
    }

    Investment <|-- Stock : extends
    Investment <|-- Bond : extends
    Investment <|-- ETF : extends

    class InvalidDataError {
        -message : string
    }

    class InsufficientUnitsError {
        -message : string
    }

    class InsufficientBalanceError {
        -message : string
    }

    class Portfolio {
        -investments : IInvestment[]
        +addInvestment(investment: IInvestment) void
        +checkBalance() number
    }

    Portfolio "1" o-- "*" IInvestment : manages
