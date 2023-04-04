import React from 'react'
import Footer from '../components/Footer'

const Contact = () => {
	return (
		<>
			<section className="contact">
				<section className="page-banner top-page-content">
					<div className="container">
						<div className="page-breadcrumbs">
							<ul className="list-unstyled">
								<li><a href="/">Home</a></li>
								<li>Contact</li>
							</ul>
						</div>
						<div className="page-banner-title">
							<h3>Contact</h3>
						</div>
					</div>
				</section>

				<section className="contact-section mt-5">
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<div className="contact-box">
									<div className="section-tagline">
										WRITE A MESSAGE
									</div>
									<h1 className="section-title">Always Here to Help you</h1>
									<p>There are certain attributes of a profession and one has to catch hold of them in order to efficiently and grow in that business. I share my experience as an interior designer. </p>
								</div>
							</div>
							<div className="col-lg-8">
								<form action="/" className="contact-form  contact-form-validated" method="post" >
									<div className="row row-gutter-10">
										<div className="col-12 col-lg-6">
											<input type="text" id="name" className="input-text" placeholder="Your name" name="name" aria-required="true" />
										</div>
										<div className="col-12 col-lg-6">
											<input type="email" id="email" className="input-text" placeholder="Email address" name="email" aria-required="true" />
										</div>
										<div className="col-12 col-lg-6">
											<input type="text" id="phone" className="input-text" placeholder="Phone number" name="phone" aria-required="true" />
										</div>
										<div className="col-12 col-lg-6">
											<input type="text" id="subject" className="input-text" placeholder="Subject" name="subject" aria-required="true" />
										</div>
										<div className="col-12 col-lg-12">
											<textarea name="message" placeholder="Write a message" className="input-text" aria-required="true"></textarea>
										</div>
										<div className="col-12 col-lg-12">
											<button className="btn btn-primary">Send a Message</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
				<div className="contact-gmap-section">
					<div className="container">
						<div className="responsive-map">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12083.735079362054!2d-74.01702461732008!3d40.785470167558394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258131938b8d5%3A0xe39c30a8afef2d96!2sWest%20New%20York%2C%20NJ%2007093%2C%20USA!5e0!3m2!1sen!2sin!4v1668832966742!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Contact Map"></iframe>
						</div>
					</div>
				</div>
				<div className="cta-four-section">
					<div className="container">
						<div className="cta-four-inner">
							<div className="row row-gutter-y-20 ">
								<div className="col-12 col-lg-6 col-xl-3">
									<div className="cta-four-content">
										<i className="flaticon-help"></i>
										<div className="cta-four-content-box">
											<span>Have a Question?</span>
											<p>+234 80 (403) 68 090</p>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-6 col-lg-6 col-xl-3">
									<div className="cta-four-content">
										<i className="flaticon-envelope-3"></i>
										<div className="cta-four-content-box">
											<span>Write an Email</span>
											<p>needhelp@gritapp.org</p>
										</div>
									</div>
								</div>
								<div className="col-12 col-lg-6 col-xl-4">
									<div className="cta-four-content">
										<i className="flaticon-location-pin"></i>
										<div className="cta-four-content-box">
											<span>Visit Office</span>
											<p>19, ICE Road, Innovation Hub, Benin City, Edo State, Nigeria.</p>
										</div>
									</div>
								</div>
								<div className="col-12 col-lg-6 col-xl-2">
									<div className="cta-four-content">
										<div className="cta-four-widget-socials">
											<a href="/"><i className="fa-brands fa-twitter"></i></a>
											<a href="/"><i className="fa-brands fa-facebook"></i></a>
											<a href="/"><i className="fa-brands fa-pinterest-p"></i></a>
											<a href="/"><i className="fa-brands fa-instagram"></i></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	)
}

export default Contact