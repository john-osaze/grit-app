import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../components/Footer';

const Faqs = () => {
	return (
		<>
			<section className="faqs">
				<div className="page-banner top-page-content">
					<div className="container">
						<div className="page-breadcrumbs">
							<ul className="list-unstyled">
								<li><a href="/">Home</a></li>
								<li>FAQs</li>
							</ul>
						</div>
						<div className="page-banner-title">
							<h3>FAQs</h3>
						</div>
					</div>
				</div>

				<Container className="faq-list pt-5 pb-5">
					<Row className="justify-content-center pb-5">
						<Col lg={8}>
							<div className="accordian-box">
								<div className="accordian-box-item">
									<div className="accordian-title">
										<h5>What material are used for house building?</h5>
										<i className="fa-solid fa-angle-right"></i>
									</div>
									<div className="accordian-content">
										<p>Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet pulvinar velut nisl. Pellentesque sit placerat neque amet sapien semper tempus.</p>
									</div>
								</div>
								<div className="accordian-box-item active">
									<div className="accordian-title">
										<h5>What are the easiest way to get qoute?</h5>
										<i className="fa-solid fa-angle-right"></i>
									</div>
									<div className="accordian-content">
										<p>Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet pulvinar velut nisl. Pellentesque sit placerat neque amet sapien semper tempus.</p>
									</div>
								</div>
								<div className="accordian-box-item">
									<div className="accordian-title">
										<h5>How much time will I save on a renovation?</h5>
										<i className="fa-solid fa-angle-right"></i>
									</div>
									<div className="accordian-content">
										<p>Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet pulvinar velut nisl. Pellentesque sit placerat neque amet sapien semper tempus.</p>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<Footer />
		</>

	)
}

export default Faqs