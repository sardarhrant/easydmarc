export interface IUserData {
    email: string;
    password: string;
    'confirm-password': string; // property name contains a dash, so must be in quotes
    industry: string;
    experienceInYears: number;
    yourRole: string;
    aboutUs: string;
}