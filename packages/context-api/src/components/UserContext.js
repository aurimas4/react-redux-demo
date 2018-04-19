import React from 'react';

export const UserContext = React.createContext({
    user: {},
    afterUserDelete: () => {
        console.log('default after user delete');
    },
});
