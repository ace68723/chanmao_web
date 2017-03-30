export interface User {
    username: string;
    password: string;
}

export interface LoginObject {
    username: string;
    password: string;
    os: string;
    version: string;
}

export interface LoginResult {
    errorcode: number;
    message: string;
    result: number;
    token: string;
    uid: string;
}


export interface SignupObject {
    username: string;
    password: string;
    os: string;
    version: string;
    email: string
}