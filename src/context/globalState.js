import React, {useReducer} from 'react';

import globalContext from './globalContext';
import globalReducer from './globalReducer';

import {
    ACTIVE_NAVAR_LINK,
    USER_LOGIN
} from './types'

const GlobalState = props => {

    const initialState = {
        activeNavBarLink: 'link-0',
        user: ''
    }

    const [state, dispatch] = useReducer(globalReducer, initialState);

    const setActiveNavbarLink = (payload) => {
        dispatch({
            type: ACTIVE_NAVAR_LINK,
            payload: payload
        })
    }

    const userLogin = user => {
        dispatch({
            type: USER_LOGIN,
            payload: user
        })
    }

    return (
        <globalContext.Provider
            value={{
                user: state.user,
                activeNavBarLink: state.activeNavBarLink,
                setActiveNavbarLink,
                userLogin
            }}
        >
            {props.children}
        </globalContext.Provider>
    )
}

export default GlobalState
