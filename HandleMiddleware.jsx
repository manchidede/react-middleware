import React from "react";
import {Route, Redirect} from 'react-router-dom';

export default (props, isGroup = false) => {
    let resp = {
        isNext : true,
    };
    const {middleware, kernel} = props;

    if(middleware === undefined) return resp;

    let BreakException = {};

    try {
        middleware.forEach(function(val, i) {
            const currMiddleware = kernel().middlewares[val];
            if(!currMiddleware.isNext){
                resp = {
                    isNext : false,
                    redirect : <Redirect
                                    to={{
                                        pathname : currMiddleware.redirectTo,
                                        url : props.path
                                    }}
                                />
                };
                throw BreakException;
            }
        });
    } catch (e) {
        if (e !== BreakException) throw e;
    }
    return resp.isNext ? isGroup ? props.children
            : <Route {...props}/> : resp.redirect;
};