import React, { createContext } from 'react';
import useFirebase from './useFirebase'


export const  authContext = createContext();
const AuthProvider = ({children}) => {

    const allAuth = useFirebase();
    return (
        <authContext.Provider value ={allAuth} >
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;