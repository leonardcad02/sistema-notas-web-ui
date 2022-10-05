import React from 'react'
import {Route, Routes} from "react-router-dom";
import routes from "./routes";


export const PublicRoutes = () => {

	return(
		<Routes>
			{
				routes.filter( (route) => route.routeType === "PUBLIC")
					.map((route) => <Route path={route.path} element={route.component}/> )
			}
		</Routes>
	)
}
