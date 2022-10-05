import React from 'react';
import {AuthProvider} from "./context/authcontext";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {PrivateRoutes} from './Router/privateRoutes'
import {PublicRoutes} from "./Router/PublicRoutes";

function App() {

    return (
    <AuthProvider>
        <BrowserRouter>

                <PrivateRoutes/>
                <PublicRoutes/>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

