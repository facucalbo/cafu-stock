export interface UserResponse {
    error: boolean,
    body: UserBody,
}

export interface UserRequest {
    name:    string;
    email:    string;
    username:    string;
    password:    number;
}

export interface AuthResponse {
    error: boolean,
    body: AuthBody,
}

export interface AuthBody {
    accessToken: string,
    refreshToken?: string,
    uid?: string,
}

export interface UserBody {
    _id: string,
    alredyExist?: boolean,
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
