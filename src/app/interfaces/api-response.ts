export interface UserResponse {
    error: boolean,
    body: Body,
}

export interface UserRequest {
    name:    string;
    email:    string;
    username:    string;
    password:    number;
}

export interface AuthResponse {
    error: boolean,
    body: {
        token: string,
        refreshToken?: string,
        uid?: string,
    }
}

export interface Body {
    _id: string,
    alredyExist?: boolean,
    token?: string,
    refreshToken?: string,
    uid?: string,
    name: string,
    username: string,
    email: string,
    clients: Client[],
    unrealizedSales: UnrealizedSales[],
}

export interface Client {

}

export interface UnrealizedSales {

}
