class Customer {
    private name: string;
    private address: string;


    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
}


class Orders {
    private date: Date;
    private status: string;
    private customer: Customer;
    private payment: Payment = new Cash(0, 0);
    private orderDetails: OrdersDetail[] = []


    constructor(date: Date, status: string, customer: Customer, payment: Payment, orderDetails: OrdersDetail[]) {
        this.date = date;
        this.status = status;
        this.customer = customer;
        this.payment = payment;
        this.orderDetails = orderDetails;
    }



    public addOrderDetail(orderDetails: OrdersDetail): void {
        this.orderDetails.push(orderDetails)
    }


    public calcSubTotal(): number {
        return 0;
    }


    public calcTax(): number {
        return 0;
    }


    public calcTotal(): number {
        return 0;
    }


    public calcTotalWeight(): number {
        return 0;
    }


    public pay(payment: Payment) {
        this.payment = payment;
    }
}


class OrdersDetail {
    private quantity: number;
    private taxStatus: string;
    private Item: Item;


    constructor(quantity: number, taxStatus: string, Item: Item) {
        this.quantity = quantity;
        this.taxStatus = taxStatus;
        this.Item = Item;
    }


    public calcSubTotal(): number {
        return 0;
    }


    public calcWeight(): number {
        return 0;
    }


    public calcTax(): number {
        return 0;
    }
}


class Item {
    private shippingweight: string;
    private description: string;


    constructor(shippingweight: string, description: string) {
        this.shippingweight = shippingweight;
        this.description = description;
    }


    public getPriceForQuantity(): number {
        return 0;
    }


    public getTax(): number {
        return 0;
    }


    public inStock(): number {
        return 0;
    }
}


abstract class Payment {
    private amount: number;


    constructor(amount: number) {
        this.amount = amount;
    }
}


class Cash extends Payment {
    private cashTendered: number;


    constructor(amount: number, cashTendered: number) {
        super(amount);
        this.cashTendered = cashTendered;
    }
}


class Check extends Payment {
    private name: string;
    private bankID: string;


    constructor(name: string, bankID: string, amount: number) {
        super(amount);
        this.name = name;
        this.bankID = bankID;
    }

    public authorized(): boolean {
        return true;
    }
}

class Credit extends Payment {
    private number: string;
    private type: string;
    private expDate: string;

    constructor(number: string, type: string, amount: number, expDate: string) {
        super(amount);
        this.number = number;
        this.type = type;
        this.expDate = expDate;
    }

    public authorized(): boolean {
        return true;
    }
}