import React, { createContext, useContext, useState } from 'react';

interface GeneralUserInfo {
    name: string;
    surname: string;
    role: string;
    accessToken: string;
    refreshToken: string;
}

interface UserContextProps {
    user: GeneralUserInfo | null;
    setUser: (user: GeneralUserInfo | null) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [ user, setUser ] =useState<GeneralUserInfo | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextProps => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
