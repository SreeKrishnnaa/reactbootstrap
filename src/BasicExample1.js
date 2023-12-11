import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample1() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Hound Vault</Navbar.Brand>
                    <Nav className="me-auto"></Nav>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#SignIn">SignIn</Nav.Link>
                        <Nav.Link href="#LogIn">LogIn</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default BasicExample1;
