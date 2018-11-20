export const actions = Object.freeze({
    NAVIGATE: 'NAVIGATE'
});

export const navigate = route => ({type: actions.NAVIGATE, route: route});