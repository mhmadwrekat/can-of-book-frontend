import React, { Component } from 'react';
import {
    Button, Card, ListGroup
} from 'react-bootstrap';
export class BestBooks extends Component {
    render() {
        return (
            <section class='section'>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>{this.props.description}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup.Item>
                            <Card.Link href="{this.props.email}">Author Email</Card.Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant="danger" onClick={() => this.props.handleDelete(this.props.bookId)}>Delete</Button>
                        </ListGroup.Item>
                    </Card>
                </div>
            </section>
        )
    }
}
export default BestBooks