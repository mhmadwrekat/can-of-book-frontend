import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import { Row, Col, Image, Container } from 'react-bootstrap';
export class Profile extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={6} md={1}>
                        </Col>
                        <Col md={4}>
                            <Image width="50%" src={this.props.picture} roundedCircle />
                        </Col>
                        <Col xs={6} md={4}>
                            <br></br><br></br>
                            <h2 id='fontt'><b>{this.props.name}</b></h2>
                            <br></br>
                            <a href={this.props.myEmail}><b><i>{this.props.myEmail}</i></b></a>
                        </Col>
                    </Row>
                </Container>
                <br></br><br></br><br></br>
            </div>
        )
    }
}
export default withAuth0(Profile);