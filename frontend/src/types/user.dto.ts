export type UserRegisterDataDTO = {
    name: string;
    surname: string;
    username: string;
    email: string;
    password: string;
}

export type UserLoginDataDTO = {
    emailOrUsernameValue: string;
    password: string;
}

export type UserProfileInfoDTO = {
    id: number;
    name: string;
    surname: string;
    username: string;
    email: string;
}
