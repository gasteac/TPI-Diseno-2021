import { 
    ACTIVE_NAVAR_LINK,
    USER_LOGIN
 } from "./types";

 // eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case ACTIVE_NAVAR_LINK:
            return {
                ...state,
                activeNavBarLink: action.payload
            }
        case USER_LOGIN:
            return {
                ...state,
                user: action.payload
            }
        default:
           return state
    }
}