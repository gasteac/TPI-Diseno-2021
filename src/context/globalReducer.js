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
 } from "./types";

 // eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case ACTIVE_NAVAR_LINK:
            return {
                ...state,
                previousNavBarLink: state.activeNavBarLink,
                activeNavBarLink: action.payload,
            }
        case USER_LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case USER_LOGOUT:
            return {
                ...state,
                user: ''
            }
        case SET_NOMBRE:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    nombre: action.payload,
                }
            }
            case SET_PRECIOMAYOR:
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        precioMayor: action.payload,
                    }
                }
            case SET_PRECIOMENOR:
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        precioMenor: action.payload,
                    }
                }
            case SET_TIPO:
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        tipo: action.payload,
                    }
                }
            case SET_UBICACION:
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        ubicacion: action.payload,
                    }
                }
            case SET_HABITACIONES:
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        habitaciones: action.payload,
                    }
                }
            case SET_BAÑOS:
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        baños: action.payload,
                    }
                }
            case SET_M2TOTALESMAYOR:
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        m2TotalesMayor: action.payload,
                    }
                }
            case SET_M2TOTALESMENOR:
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        m2TotalesMenor: action.payload,
                    }
                }
        default:
           return state
    }
}