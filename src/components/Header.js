import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="black" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                <Navbar.Brand href="/"><i className="fab fa-pushed"></i> BENVENUTO A NERO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    
                    <Nav className="ml-auto">
                        <Nav.Link href="/cart"><i className="fab fa-opencart"></i> Cart</Nav.Link>
                        <Nav.Link href="/cart"><i className="fas fa-user-circle"></i> Sign In</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header

