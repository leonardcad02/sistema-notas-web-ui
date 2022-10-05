import React from "react";
import "../styles/styles.scss"
export const Home = () => {
	return (
		<>
			<div className={"container"}>
				<h3>Homer</h3>
				<h1> Registro de Notas</h1>
				<form>
					<label> Estudiante</label>
					<input type={"text"} placeholder={"Enter Name"}/>
					<label> Materia</label>
					<input type={"text"} placeholder={"Enter submit"}/>
				</form>
			</div>

		</>
	)
}
