import React, {useContext} from 'react'
import {Route, Routes, Navigate} from "react-router-dom";
import {AuthStateContetx} from "../context/authcontext";
import routes from "./routes";
import  {Login} from '../pages/Login'
import  {Register} from '../pages/Register'
import {Home} from '../pages/Home'


export const PrivateRoutes = () => {
	const context = useContext(AuthStateContetx);
	//if (!context.isAuthenticated){
	//	return (<Navigate to={"/login"}></Navigate>)
	//}
	return(
		<Routes>
			{
				<Route path = {'user'}  element={<Home/>}></Route>

 			}
		</Routes>

	)
}
