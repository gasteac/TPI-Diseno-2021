import React, {useReducer} from 'react';

import globalContext from './globalContext';
import globalReducer from './globalReducer';


import {
    ACTIVE_NAVAR_LINK,
    USER_LOGIN,
    USER_LOGOUT,
    SET_NOMBRE,
    SET_PRECIOMAYOR,
    SET_PRECIOMENOR,
    SET_TIPO,
    SET_UBICACION,
    SET_HABITACIONES,
    SET_BAÑOS,
    SET_M2TOTALESMAYOR,
    SET_M2TOTALESMENOR,
} from './types'

const GlobalState = props => {

    const initialState = {
        activeNavBarLink: 'link-0',
        previousNavBarLink: '',
        user: '',
        filter: {
            nombre: '',
            precioMayor: 0,
            precioMenor: 0,
            tipo: '',
            ubicacion: '',
            habitaciones: 0,
            baños: 0,
            m2TotalesMayor: 0,
            m2TotalesMenor: 0,
        }
    }

    const [state, dispatch] = useReducer(globalReducer, initialState);

    const setNombre = (value) => {
        dispatch({ 
            type: SET_NOMBRE,
            payload: value,
         })
    }

    const setPrecioMayor = (value) => {
        dispatch({ 
            type: SET_PRECIOMAYOR,
            payload: value,
         })
    }

    const setPrecioMenor = (value) => {
        dispatch({ 
            type: SET_PRECIOMENOR,
            payload: value,
         })
    }
    
    const setTipo = (value) => {
        dispatch({ 
            type: SET_TIPO,
            payload: value,
         })
    }

    const setUbicacion = (value) => {
        dispatch({ 
            type: SET_UBICACION,
            payload: value,
         })
    }

    const setHabitaciones = (value) => {
        dispatch({ 
            type: SET_HABITACIONES,
            payload: value,
         })
    }

    const setBaños = (value) => {
        dispatch({ 
            type: SET_BAÑOS,
            payload: value,
         })
    }

    const setM2TotalesMayor = (value) => {
        dispatch({ 
            type: SET_M2TOTALESMAYOR,
            payload: value,
         })
    }

    const setM2TotalesMenor = (value) => {
        dispatch({ 
            type: SET_M2TOTALESMENOR,
            payload: value,
         })
    }

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

    const logOut = () => {
        dispatch({
            type: USER_LOGOUT,
        })
    }

    return (
        <globalContext.Provider
            value={{
                user: state.user,
                filter: state.filter,
                activeNavBarLink: state.activeNavBarLink,
                previousNavBarLink: state.previousNavBarLink,
                setActiveNavbarLink,
                userLogin,
                logOut,
                setNombre,
                setPrecioMayor,
                setPrecioMenor,
                setTipo,
                setUbicacion,
                setHabitaciones,
                setBaños,
                setM2TotalesMayor,
                setM2TotalesMenor,
            }}
        >
            {props.children}
        </globalContext.Provider>
    )
}

export default GlobalState
