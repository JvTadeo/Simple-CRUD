export interface ICreateUser {
    email: string;
    password: string;
}

export interface IUpdateUser {
    id: string;
    email?: string;
    password?: string;
}

export interface IDeleteUser {
    id: string
}