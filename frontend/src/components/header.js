
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function header() {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">KFL</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>

                        <Nav.Link href="/signup">sign up</Nav.Link>
                        <Nav.Link eventKey={2} href="/login">
                            login
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <br />
        </>
    );
}

export default header;