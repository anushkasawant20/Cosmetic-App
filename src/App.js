import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";



function App(){

    return (
     <>

     <header>
         <Navbar/>
     </header>

     <main>
        <Outlet/>
       
     </main>
     <Footer/>
     </>
    )
}

export default App;