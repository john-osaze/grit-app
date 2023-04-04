import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Training1 from "../images/causes/causes-1.jpg"
import Training2 from "../images/causes/causes-2.jpg"
import Training3 from "../images/causes/causes-3.jpg"

export default function Trainings() {
    return (
        <section className="training-section">
            <h2 className="section-title text-center">Training Schemes</h2>
            <Container>
                <Row className="row-gutter-30">
                    <Col lg={6} xl={4}>
                        <div className="training-card">
                            <div className="training-card-imgbox">
                                <img src={Training1} className="img-fluid" alt="img-117" />
                            </div>
                            <div className="training-content">
                                <h4> <a href="/">Public Procurement Planning</a> </h4>
                                <p>Aellentesque porttitor lacus quis enim varius sed efficitur...</p>
                                <a href="/" className="btn btn-primary">Enroll Now</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} xl={4}>
                        <div className="training-card">
                            <div className="training-card-imgbox">
                                <img src={Training2} className="img-fluid" alt="img-118" />
                            </div>
                            <div className="training-content">
                                <h4> <a href="/">Conflict Management in Public Procurement</a> </h4>
                                <p>Aellentesque porttitor lacus quis enim varius sed efficitur...</p>
                                <a href="/" className="btn btn-primary">Enroll Now</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} xl={4}>
                        <div className="training-card">
                            <div className="training-card-imgbox">
                                <img src={Training3} className="img-fluid" alt="img-119" />
                            </div>
                            <div className="training-content">
                                <h4> <a href="/">Tenders and Contracts Management</a> </h4>
                                <p>Aellentesque porttitor lacus quis enim varius sed efficitur...</p>
                                <a href="/" className="btn btn-primary">Enroll Now</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
