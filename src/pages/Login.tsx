import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Container} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import React, {useState} from "react";
import {Spinner} from "react-bootstrap";
import {Alert} from "react-bootstrap";
import {loginUser} from "../services/UserService";
import {useAuthDispatch} from "../context/authcontext";
import {useNavigate} from "react-router-dom";


export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<any>("");
	const [sendingData, setSendingData] = useState(false)
	const authDispatch = useAuthDispatch();
	const navigate = useNavigate();
	const register = async (e: React.SyntheticEvent) =>{
		e.preventDefault();
		try{
			setSendingData(true);
			setError("");
			const res = await loginUser(email, password);
			const token = res.data.token;
			console.log(token)
			authDispatch ({
				type: 'login',
				token
			})
			//navigate("/");
		}catch (errors: any){
			if (errors.response){
				errors.response.status === 401 && setError("No se puede Iniciar sesión con esas credenciales");
			}
			//setError(error.response.data.errors)
			setSendingData(false);
		}

	}
	return (
		<>
			<Container>
				<Row>
					<Col lg = "5" md = "10" sm = "10" className={"mx-auto"}>
						<Card className={"mt-5"}>
							<Card.Body>
								<h4>Iniciar Sesion</h4><hr/>

								<Form onSubmit={register}>
									<Form.Group className = "mb-3" controlId= "email">
										<Form.Label> Email </Form.Label>
										<Form.Control
											isInvalid={!!error?.email}
											value = {email}
											onChange={e => setEmail(e.target.value)}
											type="email" placeholder="Enter email" />
										<Form.Control.Feedback type={"invalid"}>
											{error?.email}
										</Form.Control.Feedback>
									</Form.Group>

									<Form.Group className = "mb-3" controlId= "password">
										<Form.Label> Email </Form.Label>
										<Form.Control
											isInvalid={!!error?.password}
											value = {password}
											onChange={e => setPassword(e.target.value)}
											type="password" placeholder="Enter password" />
										<Form.Control.Feedback type={"invalid"}>
											{error?.password}
										</Form.Control.Feedback>
									</Form.Group>

									<Button type={"submit"}>
										{sendingData ? <>

											<Spinner
												as="span"
												animation="border"
												size="sm"
												role="status"
												aria-hidden="true"
											/>
										</>:
										<> Iniciar Sesión</>
										}

										<span className="visually-hidden">Iniciando Sesion</span>

									</Button>

								</Form>

								<Alert  className="mt-4" show= {!!error} variant={"danger"}>
									{error}
								</Alert>

							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	)
}

