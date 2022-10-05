// @ts-ignore
import {Route, RouteProps, RouteComponentProps} from "react-router";
import {Navigate} from 'react-router-dom';
import {RouteType} from "../types";
import {useAuthState} from "../context/authcontext";

interface AppRouteProps extends RouteProps {
	component: any,
	routeType: RouteType
}
const AppRoute = (props: AppRouteProps) => {
	const  {component: Component, path , routeType, ...rest } = props;
	const user = useAuthState();
	const renderComponent = (routeProps: RouteComponentProps) => {
		switch (routeType) {
			case "PRIVATE":
				if (user.isAuthenticated) {
						return <Component {...routeProps}></Component>
				}else {
					return <Navigate to={"/login"}></Navigate>
				}
			case "GUEST":
				if (!user.isAuthenticated) {
					return <Component {...routeProps}></Component>
				}else {
					return <Navigate to={"/user"}></Navigate>
				}
			case "PUBLIC":
				return <Component {...routeProps}></Component>

		}
	}



	return (
		// @ts-ignore
		 <Route {...rest} path= {path} render = {(routeProps) => renderComponent(routeProps)}/>
	 )
}

export default AppRoute;

