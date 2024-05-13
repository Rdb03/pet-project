export interface IUser {
    email: string;
    password: string;
    displayName: string;
    token: string;
    avatar: string | null;
    role: string;
    googleID?: string;
}