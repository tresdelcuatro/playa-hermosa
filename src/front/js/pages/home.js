import React, { useContext } from "react";
import { Context } from "../store/appContext";
import phImageUrl from "../../img/ph.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">

			<section className="about-us">
				<h1>Playa Hermosa - Maldonado, Uruguay</h1>

				<div className="about-us-cards">
					<div className="card">
						<div className="card-body">
							<h4 className="card-title">Paseos</h4>
						</div>
					</div>
					<div className="card">
						<div className="card-body">
							<h4 className="card-title">Galería</h4>
							<p className="card-text">

							</p>
						</div>
					</div>
					<div className="card">
						<div className="card-body">
							<h4 className="card-title">Alojamiento</h4>
						</div>
					</div>
					<div className="card">
						<div className="card-body">
							<h4 className="card-title">Cómo llegar</h4>
						</div>
					</div>
					<div className="card">
						<div className="card-body">
							<h4 className="card-title">Novedades</h4>
						</div>
					</div>
					<div className="card">
						<div className="card-body">
							<h4 className="card-title">Contacto</h4>
						</div>
					</div>
				</div>
			</section>

			{/* <p>
				<img src={phImageUrl} />
			</p> */}


		</div>
	);
};
