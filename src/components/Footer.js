import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home" id='fontFoter'>All Reserved CopyRight . © Mhmad-Wrekat</Navbar.Brand>
                    </Container>
                </Navbar>
                <br></br>
                <br></br>
            </>
        )
    }
}
export default Footer