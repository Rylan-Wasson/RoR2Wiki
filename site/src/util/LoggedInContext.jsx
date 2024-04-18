import React, { createContext, useState, useContext } from 'react';

const LoggedInContext = createContext();

export const LoggedInProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <LoggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
        </LoggedInContext.Provider>
    );
};

export const useLoggedIn = () => useContext(LoggedInContext);
