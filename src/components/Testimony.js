import React from "react";
import "../stylesheets/Testimony.css";

function Testimony(props) {
	return (
		<div className="testimony-container">
			<img
				className="testimony-image"
				src={require(`../assets/images/testimonio-${props.image}.png`)}
				alt={`imagen de ${props.image}`}
			/>
			<div className="testimony-text-container">
				<p className="testimony-name">
					<strong>{props.name}</strong> en {props.country}
				</p>
				<p className="testimony-position">
					{props.position} en <strong>{props.company}</strong>
				</p>
				<p className="testimony-testimony">{props.testimony}</p>
			</div>
		</div>
	);
}

export default Testimony;
