import React, { Component } from 'react'
import {
    Form, Row, Col, InputGroup, FormControl, Button, FloatingLabel
} from 'react-bootstrap';
export class BookForm extends Component {
    render() {
        return (
            <>
                <Form onSubmit={this.props.handleSubmit}>
                    <Row className="align-items-center">
                        <Col sm={3} className="my-1">
                            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                                Name
                            </Form.Label>
                            <Form.Control id="inlineFormInputName" placeholder="Book Title ..." onChange={this.props.handleBookInput} />
                        </Col>
                        <Col sm={3} className="my-1">
                            <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
                                Username
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Text>@</InputGroup.Text>
                                <FormControl id="inlineFormInputGroupUsername" placeholder="Author Email ..." onChange={this.props.handleBookAuthor} />
                            </InputGroup>
                        </Col>
                        <Col sm={2} className="my-1">
                            <FloatingLabel onChange={this.props.handleBookDes} controlId="floatingTextarea" label="Description ...." className="mb-3">
                                <Form.Control as="textarea" placeholder="Description" />
                            </FloatingLabel>
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Button type="submit">Add Book</Button>
                        </Col>
                    </Row>
                </Form>
            </>
        )
    }
}
export default BookForm