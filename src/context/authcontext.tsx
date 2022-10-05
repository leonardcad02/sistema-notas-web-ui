import {createContext, Dispatch, FC, ReactNode, useContext, useReducer} from "react";
import {authInitialState, AuthReducer} from "../state/reduces/authReducer";
import {User} from "../types"
import {AuthActions} from "../state/actions/authActions";
export const AuthStateContetx = createContext<User> (authInitialState);
export const AuthDispacthContetx = createContext<Dispatch<AuthActions>>(() => undefined);

interface AuthProviderProps{
	children: ReactNode
}

export const AuthProvider:FC<AuthProviderProps> = ({children}) => {
	const [user, dispatch] = useReducer(AuthReducer, authInitialState);
	return (
		<AuthStateContetx.Provider value={user}>
			<AuthDispacthContetx.Provider value={dispatch}>
				{children}
			</AuthDispacthContetx.Provider>
		</AuthStateContetx.Provider>
	)
};

export const useAuthState= () => {
	const contetx = useContext(AuthStateContetx);
	if(contetx === undefined){
		throw new Error ("useAuthstate must be used within an AuthProvider");
	}
	return contetx;
}

export const useAuthDispatch = () => {
	const contetx = useContext(AuthDispacthContetx);
	if(contetx === undefined){
		throw new Error ("useAuthDispatch must be used within an AuthProvider");
	}
	return contetx;
}


