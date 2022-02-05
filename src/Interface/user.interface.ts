export interface IUserData {
    email: string;
    password: string;
}

export interface IResponseUser {
    user: {
        id:number
        email: string
    }
    token: string
}

export interface IAuthContextData {
    signIn(credentials: IUserData): Promise<void>
    signOut(): Promise<void>
    loadUserStorageData(): Promise<void>
    token: string
    user: {
        id:number
        email: string
    }
}
