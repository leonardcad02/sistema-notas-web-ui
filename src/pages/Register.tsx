import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Container} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import React, {useState} from "react";
import {Spinner} from "react-bootstrap";
import {loginUser, registerUser} from "../services/UserService";
import {useAuthDispatch} from "../context/authcontext";

export const Register = () => {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [rol, setRol] = useState("");
	const [lastname, setLastname] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState<any>({});
	const [sendingData, setSendingData] = useState(false)

	const authDispatch = useAuthDispatch();

	const register = async (e: React.SyntheticEvent) =>{
		e.preventDefault();
		try{
			setSendingData(true);
			await registerUser(name,email, lastname,password,rol);
			const res = await loginUser(email, password);
			const token = res.data.token;
			console.log(token)
			authDispatch ({
				type: 'login',
				token
			});

		}catch (error: any){
			setErrors(error.response.data.errors)
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
								<h4>Crear Cuenta</h4><hr/>

								<Form onSubmit={register}>

									<Form.Group className = "mb-3" controlId= "name">
										<Form.Label> Nombre </Form.Label>
										<Form.Control
											isInvalid={!!errors?.name}
											value = {name}
											onChange={e => setName(e.target.value)}
											type="text" placeholder="Enter name" />
										<Form.Control.Feedback type={"invalid"}>
											{errors?.name}
										</Form.Control.Feedback>
									</Form.Group>

									<Form.Group className = "mb-3" controlId= "name">
										<Form.Label> Apellido </Form.Label>
										<Form.Control
											isInvalid={!!errors?.name}
											value = {lastname}
											onChange={e => setName(e.target.value)}
											type="text" placeholder="Enter lastName"/>
										<Form.Control.Feedback type={"invalid"}>
											{errors?.name}
										</Form.Control.Feedback>
									</Form.Group>

									<Form.Group className = "mb-3" controlId= "email">
										<Form.Label> Email </Form.Label>
										<Form.Control
											isInvalid={!!errors?.email}
											value = {email}
											onChange={e => setEmail(e.target.value)}
											type="email" placeholder="Enter email" />
										<Form.Control.Feedback type={"invalid"}>
											{errors?.email}
										</Form.Control.Feedback>
									</Form.Group>

									<Form.Group className = "mb-3" controlId= "email">
										<Form.Label> Rol </Form.Label>
										<Form.Control
											isInvalid={!!errors?.email}
											value = {rol}
											onChange={e => setEmail(e.target.value)}
											type="email" placeholder="Enter Rol" />
										<Form.Control.Feedback type={"invalid"}>
											{errors?.email}
										</Form.Control.Feedback>
									</Form.Group>

									<Form.Group className = "mb-3" controlId= "password">
										<Form.Label> Password </Form.Label>
										<Form.Control
											isInvalid={!!errors?.password}
											value = {password}
											onChange={e => setPassword(e.target.value)}
											type="password" placeholder="Enter password" />
										<Form.Control.Feedback type={"invalid"}>
											{errors?.password}
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
											/>Creando Usuario
										</>:
										<> Crear Cuenta</>
										}

										<span className="visually-hidden">Creando Usuario</span>

									</Button>
								</Form>

							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	)
}
