import { useContext } from 'react';
import { UserContext } from '../providers/UserContext.tsx';

export const useAuthContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
};
