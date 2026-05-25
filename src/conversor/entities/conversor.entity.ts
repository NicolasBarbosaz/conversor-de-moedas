export class ConversorEntity {
    constructor(id: number, amount: number, fromCurrency: string, usdValue: number, eurValue: number) {
        this.id = id;
        this.amount = amount;
        this.fromCurrency = fromCurrency;
        this.usdValue = usdValue;
        this.eurValue = eurValue;
    }

    id: number; 
    amount: number;
    fromCurrency: string;
    usdValue: number;
    eurValue: number;

    static create(
        id: number,
        amount: number, 
        fromCurrency: string, 
        usdValue: number, 
        eurValue: number
    ):ConversorEntity {
        return new ConversorEntity(id, amount, fromCurrency,usdValue, eurValue);
    }
   

}