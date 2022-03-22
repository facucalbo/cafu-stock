
export interface ItemResponse {
    id:    string;
    type:    string;
    brand:    string;
    model:    string;
    cant:    number;
    stock:    number;
    price: number;
}

export interface ItemRequest {
    type:    string;
    brand:    string;
    model:    string;
    cant:    number;
    stock:    number;
    price: number;
}