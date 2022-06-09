export interface ItemResponse {
    error: string;
    body:  InventoryBody[];
}

export interface ItemRequest {
    type:    string;
    brand:    string;
    model:    string;
    cant:    number;
    stock:    number;
    price: number;
}

export interface InventoryBody {
    _id:   string;
    type:  string;
    brand: string;
    model: string;
    stock: number;
    price: number;
    __v:   number;
    cant?: number;
}
