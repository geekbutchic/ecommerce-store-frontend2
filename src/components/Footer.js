import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>Copyright &copy; Nero by Sonny Lee Valenzuela</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
