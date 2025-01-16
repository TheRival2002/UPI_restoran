import React, { createContext, useCallback, useMemo, useReducer } from 'react';
import api, { endpoints } from '@utils/axios.ts';
import { UserLoginDataDTO, UserRegisterDataDTO } from '../types/user.dto.ts';

type AuthenticatedUser = {
    name: string;
    surname: string;
    role: string;
    accessToken: string;
} | null;

type AuthContextType = {
    user: AuthenticatedUser;
    isAuthenticated: boolean;
    register: (userData: UserRegisterDataDTO) => Promise<void>;
    login: (userData: UserLoginDataDTO) => Promise<void>;
}

enum Types {
    REGISTER = 'REGISTER',
    LOGIN = 'LOGIN',
}

type Payload = {
    [Types.LOGIN]: { user: AuthenticatedUser };
    [Types.REGISTER]: { user: AuthenticatedUser };
}

type ActionsType = {
    type: keyof Payload;
    payload: Payload[keyof Payload];
}
type AuthState = {
    user: AuthenticatedUser;
}
// ----------------------------------------------------------------
const initialState: AuthState = { user: null };
const reducer = (state: AuthState, action: ActionsType) => {
    switch (action.type) {
        case Types.REGISTER:
            return { user: action.payload.user };
        case Types.LOGIN:
            return { user: action.payload.user };
        default:
            return state;
    }
};
export const UserContext = createContext<AuthContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    console.log(state);
    const register = useCallback(async (userData: UserRegisterDataDTO) => {
        const response = await api.post(
            endpoints.auth.register,
            userData
        );

        const { user, accessToken } = response.data;
        localStorage.setItem('accessToken', accessToken);
        dispatch({ type: Types.REGISTER, payload: { user }});
    }, []);

    const login = useCallback(async (userData: UserLoginDataDTO) => {
        const isEmailEntered = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            userData.emailOrUsernameValue,
        );
        const response = await api.post(endpoints.auth.login, {
            [isEmailEntered ? 'email' : 'username']: userData.emailOrUsernameValue,
            password: userData.password,
        });

        const { user, accessToken } = response.data;
        localStorage.setItem('accessToken', accessToken);
        dispatch({ type: Types.LOGIN, payload: { user }});
    }, []);

    const memoizedValue = useMemo(
        () => ({
            user: state.user,
            isAuthenticated: !!state.user,
            register,
            login
        }),
        [ state.user, register, login ]);

    return (
        <UserContext.Provider value={memoizedValue}>
            {children}
        </UserContext.Provider>
    );
};

