import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	// const [active, setActive] = useState("nav_menu");
	// const [icon, setIcon] = useState("lines");
	// const navToggle = () => {
	// 	active === "nav_menu"
	// 		? setActive("nav_menu nav_active")
	// 		: setActive("nav_menu");

	// 	icon === "lines" ? setIcon("lines xButton") : setIcon("lines");
	// };
	const [isOpen, setIsOpen] = useState(false);
	const [isButton, setIsButton] = useState(false);
	const change = () => {
		setIsOpen(!isOpen);
		setIsButton(!isButton);
	};
	return (
		<div className="menu">
			<div onClick={change} className="navButton">
				<div className={`lines ${isButton ? "xButton" : ""}`}>
					<div className="line item1"></div>
					<div className="line item2"></div>
					<div className="line item3"></div>
				</div>
			</div>

			<div className={`nav_menu ${isOpen ? "nav_active" : ""}`}>
				<div className="kwt2">
					<h1>KWT</h1>
				</div>
				<ul>
					<li onClick={change}>
						<Link to={"/"}>STRONA GŁÓWNA</Link>
					</li>
					<li onClick={change}>
						<Link to={"/"}>INFORMACJE</Link>
					</li>
					<li onClick={change}>
						<Link to={"/"}>GALERIA ZDJĘĆ</Link>
					</li>
					<li onClick={change}>
						<Link to={"/join"}>DOŁĄCZ</Link>
					</li>

					<li onClick={change}>
						<Link to={"/"}>AUTORZY</Link>
					</li>

					<li onClick={change}>
						<Link to={"/"}>PYTANIA Z POPRZEDNICH LAT</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
