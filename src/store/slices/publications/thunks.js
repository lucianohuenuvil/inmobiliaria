//import { singInWithGoogle, singInWithEmail, registerWithForm, logoutFirebase } from '../../../firebase/providers';
import { addNewPublication} from './publications_Slice'
import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../../firebase/config';



export const startAddNewPublication = () => {
    return async (dispatch, getState) => {
        dispatch( addNewPublication());
        const { uid } = getState().auth;
        console.log(uid)
        const data = {
            price:"150000",
            m2:"60",
            piscina:"no"
        }


        const newDoc = doc( collection(FirebaseDB, `${uid}/publications/property`))
        await setDoc(newDoc, data);
        //const result = await singInWithEmail(email, password);



        // if ( result.STATUS ){
        //    return dispatch (normalLogin(result));
        // } else {
        //     return dispatch (logoutSession(result.erro))
        // }


    }
}