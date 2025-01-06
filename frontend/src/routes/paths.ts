const ROOTS = {
    HOME: '/',
    AUTH: '/auth',
};

// ----------------------------------------------------------------------

export const paths = {
    home: {
        root: ROOTS.HOME,
    },
    auth: {
        login: `${ROOTS.AUTH}/login`,
        register: `${ROOTS.AUTH}/register`,
    }
};
