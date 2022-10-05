import {Route} from "../types";
import {Home} from "../pages/Home";
import {Login} from "../pages/Login";
import {Register} from "../pages/Register";

const routes: Route [] = [
	{
		path: "/",
		component: Home,
		routeType: "PUBLIC"
	},
	{
		path: "/login",
		component: Login,
		routeType: "PUBLIC"
	},
	{
		path: "/user",
		component: Register,
		routeType: "PRIVATE"
	}
]

export default routes;
