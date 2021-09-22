import React, { Component } from 'react';
import LogoutButton from './LogoutButton';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
export class Header extends Component {
    render() {
        return (
            <>{
                this.props.auth0.isAuthenticated ? <>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"><Container>
                        <Navbar.Brand href="#home" id='fontt'>Books are life-changing
                        </Navbar.Brand>
                        <p id='fontHeader'>They have the power to enlighten,educate, entertain, heal, and help us grow .</p>
                        <LogoutButton />
                    </Container>
                    </Navbar>
                    <Nav justify variant="tabs">
                        <Nav.Item as="li">
                            <Nav.Link id='rou' tag={Link} to="/first" href="/profile">Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link id='rou' tag={Link} to="/second" href="/BestBook">Best Book</Nav.Link>
                        </Nav.Item>
                    </Nav><br></br><br></br></> : <>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home" id='fontt'>Books are life-changing
                            </Navbar.Brand>
                            <p id='fontHeader'>They have the power to enlighten,educate, entertain, heal, and help us grow .</p>
                            <LoginButton /></Container>
                    </Navbar><br></br><br></br></>
            }</>)
    }
}
export default withAuth0(Header);