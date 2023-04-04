import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../components/Footer';

const Petitions = () => {
	return (
		<>
			<section className="petitions">
				<div className="page-banner top-page-content">
					<div className="container">
						<div className="page-breadcrumbs">
							<ul className="list-unstyled">
								<li><a href="/">Home</a></li>
								<li>Petitions</li>
							</ul>
						</div>
						<div className="page-banner-title">
							<h3>Petitions</h3>
						</div>
					</div>
				</div>

				<div className="petition-form pt-3 mb-5 pb-2">
					<Container className="mb-5">
						<Row className="justify-content-center">
							<Col lg={8}>
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
							</Col>
						</Row>
					</Container>
				</div>
			</section>

			<Footer />
		</>
	)
}

export default Petitions