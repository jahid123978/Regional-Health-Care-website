import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Context/useAuth';

const Private_Route = ({children, ...rest}) => {
    const {user, isLogin} = useAuth();
    if(isLogin) {
        return 0;
    }
    return (
        <Route
        {...rest}
        render = {({location}) => user.displayName? children:
    
        <Redirect
         to={{ 
             pathname: '/login',
             state: {from : location}
         }}
        ></Redirect>
    }
        
        >

        </Route>
        
    );
};

export default Private_Route;