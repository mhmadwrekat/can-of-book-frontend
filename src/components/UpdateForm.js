import React, { Component } from 'react'
import {
    Form, Row, Col, InputGroup, FormControl, Button, FloatingLabel
} from 'react-bootstrap';
export class UpdateForm extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.handleUpdateForm}>
                    <Row className="align-items-center">
                        <Col sm={3} className="my-1">
                            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                                Name
                            </Form.Label>
                            <Form.Control id="inlineFormInputName" placeholder={this.props.title} onChange={this.props.handleBookInput} />
                        </Col>
                        <Col sm={3} className="my-1">
                            <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
                                Username
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Text>@</InputGroup.Text>
                                <FormControl id="inlineFormInputGroupUsername" placeholder={this.props.email} onChange={this.props.handleBookAuthor} />
                            </InputGroup>
                        </Col>
                        <Col sm={2} className="my-1">
                            <FloatingLabel onChange={this.props.handleBookDes} controlId="floatingTextarea" label={this.props.description} className="mb-3">
                                <Form.Control as="textarea" placeholder={this.props.description} />
                            </FloatingLabel>
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Button variant="success" type="submit">UPDATE ✔️</Button>

                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
export default UpdateForm