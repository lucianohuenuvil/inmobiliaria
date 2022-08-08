import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { RoutesMain } from "../pages/routes/RoutesMain";
import { Navbar } from "../ui/Navbar"



export const AppRouter = () => {


  const [toggleNav, settoggleNav] = useState(false);

  return (
    <BrowserRouter>
        

        <Navbar></Navbar>

          <Routes>

                {/*Login y registro */}

                <Route path="/auth/*" element={ <AuthRoutes></AuthRoutes>} />    


                {/* APP */}

                <Route path="/*" element={ <RoutesMain></RoutesMain>} />             
          </Routes>

    </BrowserRouter>
  
  )
}