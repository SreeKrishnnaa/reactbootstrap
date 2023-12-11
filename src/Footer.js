import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer className="bg-dark text-light mt-auto">
            <Container>
                <Row>
                    <Col md={12} className="text-center">
                        <p style={{ fontSize: '0.9rem' }}>
                            Hound Vault  &copy; 2023 All rights reserved | Contact us: contact@houndvault.com
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
