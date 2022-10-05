import axios from "axios";
import {LOGIN_ENDPOINT, REGISTER_ENDPOINT} from "../utils/endpoints";


export const  registerUser = (name: string, email: string, password: string, lastname:string, rol:string) => {

	return axios.post(REGISTER_ENDPOINT,{
		name, email, password, lastname, rol
	})
}

export const  loginUser = (email: string, password: string) => {
	console.log("Entro");
	return axios.post(LOGIN_ENDPOINT,{
		email, password
	})
}

