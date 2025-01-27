enum Roots {
    HOME = '/',
    AUTH = '/auth',
    MEALS = '/meals',
}

// ----------------------------------------------------------------------

export const paths = {
    home: {
        root: Roots.HOME,
    },
    auth: {
        login: `${Roots.AUTH}/login`,
        register: `${Roots.AUTH}/register`,
    },
    meals: {
        root: Roots.MEALS,
        single: (id: number) => `/${Roots.MEALS}/${id}`,
        daily: '/daily-offers',
    },
    users: {
        edit: '/edit-user',
    }
};
