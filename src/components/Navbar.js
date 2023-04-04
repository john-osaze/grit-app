import React from 'react'
import Logo from "../images/logo.png"
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
	return (
		<div>
			<header className="header">
				<div className="main-menu sticky-header">
					<div className="main-menu-inner">
						<div className="main-menu-left">
							<div className="main-menu-logo">
								<Link href="index-2"><img src={Logo} alt="logo" width="140" /></Link>
							</div>
							<div className="navigation">
								<ul className="main-menu-list list-unstyled">
									<li className="active">
										<Link to="/">Home</Link>
									</li>
									<li><Link to="/">About</Link></li>
									<li><Link to="/">Applications</Link></li>
									<li><Link to="/">Trainings</Link></li>
									<li><Link to="/faqs">FAQs</Link></li>
									<li><Link to="/petitions">Petitions</Link></li>
									<li><Link to="/contact">Contact</Link></li>
								</ul>
							</div>
						</div>
						<div className="main-menu-right">
							<div className="mobile-menu-button mobile-nav-toggler">
								<span></span>
								<span></span>
								<span></span>
							</div>
							<div className="search-box">
								<a href="/" className="search-toggler">
									<i className="flaticon-search-interface-symbol"></i>
								</a>
							</div>
							<div className="main-menu-right-button">
								<Link to="/login" className="btn btn-primary">Login to OCP</Link>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}

export default Navbar