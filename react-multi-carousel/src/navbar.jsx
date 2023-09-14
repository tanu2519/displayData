import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import "./assets/navbar.css";

function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const navRef = useRef();

	const toggleNavbar = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef} className={isNavOpen ? "responsive_nav" : ""}>
				<Link to="/">Home</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={toggleNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={toggleNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
