import { User} from "../../types"
import {AuthActions} from "../actions/authActions";
import {authenticate, logout} from "../../utils/auth";
import produce from 'immer'

export const authInitialState: User = authenticate();

export const AuthReducer = produce((state: User, action: AuthActions): User =>{
	switch (action.type) {
		case "login":
			state = authenticate(action.token);
			return state;
		case "logout":
			//
			state = logout()
			return state;
		default:
			return state;

	}
});
