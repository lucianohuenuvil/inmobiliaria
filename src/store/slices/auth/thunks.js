import { check } from './authSlice'

export const checkingAuth = (email, password) => {
    return async (dispatch) => {
        dispatch( check ({
            status:'checking'
        }));
    }
}