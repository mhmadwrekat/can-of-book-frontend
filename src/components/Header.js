import React, { Component } from 'react'
import { Navbar, Container } from 'react-bootstrap';

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home" id='fontt'>Books are life-changing
                        </Navbar.Brand>
                        <p id='fontHeader'>They have the power to enlighten,educate, entertain, heal, and help us grow .</p>
                    </Container>
                </Navbar>
                <br></br>
                <br></br>
            </div>
        )
    }
}
export default Header