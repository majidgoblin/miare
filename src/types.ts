export interface ConcurrencyItems{
    amount:number,
    created_at:string,
    started_date:string,
    end_date:string,
    id?:number
}

export interface MiscItems{
    amount:number,
    created_at:string,
    title:string,
    id?:number
}

export interface PaymentItems{
    datetime:string,
    amount:number,
    description?:string,
    id?:number
}

export interface TripItems{
    request_datetime:string,
    final_price:number,
    source_title:string,
    id?:number,
    driver:string,
    hub:string
}