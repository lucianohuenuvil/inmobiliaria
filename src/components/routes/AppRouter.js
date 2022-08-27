import { async } from "@firebase/util";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { FirebaseAuth } from "../../firebase/config";
import { logoutSession, normalLogin } from "../../store/slices/auth/authSlice";
import { Loading } from "../auth/loading/Loading";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { RoutesMain } from "../pages/routes/RoutesMain";
import { Navbar } from "../ui/Navbar"



export const AppRouter = () => {


  const [toggleNav, settoggleNav] = useState(false);



  const { status } = useSelector( state => state.auth)

  const dispatch = useDispatch();



  //Revisar si el usuario está anteriormente autenticado al recargar la página
  useEffect(() => {
    
    onAuthStateChanged(FirebaseAuth, async( (user) => {
    if (!user) return dispatch( logoutSession());
    else{
      const { uid, displayName, email } = user;
      return dispatch (normalLogin( {uid, displayName, email} ));
    } 
    }))

  }, [])
  

  //Si está checkeando las credenciales, mostrará el loading
  if (status === 'checking'){
    return <Loading></Loading>
  }



  return (
    <BrowserRouter>
        

        <Navbar toggleNav={toggleNav} settoggleNav={settoggleNav}></Navbar>

          <Routes>

                {/*Login y registro */}

                {
                  (status === "check")
                  ? <Route path="/*" element={ <RoutesMain></RoutesMain>} />  /*Rutas login/registro */
                  : <Route path="/auth/*" element={ <AuthRoutes></AuthRoutes>} />  /*Rutas app*/
                }

                <Route path='/*' element ={ <Navigate to="/auth/login" /> } ></Route>
                            
          </Routes>

    </BrowserRouter>
  
  )
}