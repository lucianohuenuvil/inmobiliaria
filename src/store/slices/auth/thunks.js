import { singInWithGoogle, singInWithEmail, registerWithForm } from '../../../firebase/providers';
import { checkStatus, googleSignIn, normalLogin, logoutSession} from './authSlice'


export const startEmailSignIn = (email, password) => {
    return async (dispatch) => {
        dispatch( checkStatus());

        const result = await singInWithEmail(email, password);



        if ( result.STATUS ){
           return dispatch (normalLogin(result));
        } else {
            return dispatch (logoutSession(result.erro))
        }


    }
}


export const startGoogleSignIn = () => {
    return async (dispatch) => {
        
        dispatch( checkStatus());

        const result = await singInWithGoogle();

        if ( result.STATUS ){
            return dispatch (googleSignIn(result));
        } else {
            return dispatch (logoutSession(result.erro))
        }

    }
}


export const startRegister = (form) => {
    return async (dispatch) => {
        
        dispatch( checkStatus());

        const  result  = await registerWithForm(form);

        if ( result.STATUS ){
            return dispatch (normalLogin(result));
        } else {
            return dispatch (logoutSession(result.erro))
        }

    }
}