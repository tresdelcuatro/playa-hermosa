import React, { useContext } from "react";
import { Context } from "../store/appContext";
import phImageUrl from "../../img/ph.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Playa Hermosa</h1>
			<p>
				<img src={phImageUrl}/>
			</p>
			
			
		</div>
	);
};
