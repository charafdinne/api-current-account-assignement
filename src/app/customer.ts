export interface Customer {
    customerId : number,
    name : string,
    surname: string,
    accounts : Account[],
    addresse: string
}

export interface Account {
    accountId : number,
    title:string,
    description:string,
    creation_date:string,
    is_closed:boolean,
    transactions:Transaction[]
}

export interface Transaction{
    transactionId:number,
    balance:number,
    transaction_type:boolean
}