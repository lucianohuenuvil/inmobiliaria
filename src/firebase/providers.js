import { errorPrefix } from '@firebase/util';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from'firebase/auth';
import{ FirebaseAuth } from'./config';


const googleProvider = new GoogleAuthProvider();



export const singInWithGoogle = async() =>{
    try{
        const result = await signInWithPopup(FirebaseAuth,googleProvider);
        const { email, displayName, uid} = result.user;
        return{
            STATUS:true,
            email, displayName, uid
        }
    }catch(error){
        return{
            STATUS:false,
            erro: error.message
        }
   }
}


export const singInWithEmail = async(correo, password) =>{
    try{

        const resp = await signInWithEmailAndPassword(FirebaseAuth, correo, password);

        const {uid, displayName, email} = resp.user;

        return{
            STATUS:true,
            uid,
            displayName,
            email
        }
    }catch(error){
        return{
            STATUS:false,
            erro: error.message
        }
   }

}



export const registerWithForm = async(form) =>{
    try{
        const result = await createUserWithEmailAndPassword(FirebaseAuth, form.correo, form.password)
        await updateProfile( FirebaseAuth.currentUser, { displayName:form.nombre}  )

        const {uid, displayName, email} = result.user;


        return{
            STATUS:true,
            uid,
            displayName,
            email
        }
    }catch(error){
        return{
            STATUS:false,
            erro: error.message
        }
   }

}


export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}




