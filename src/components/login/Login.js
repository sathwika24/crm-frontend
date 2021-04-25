
import React from 'react'
import PropTypes from 'prop-types'; 
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image';

export const Login = ({handleOnChange,handleOnSubmit,formSwitcher,email,pass}) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-info text-center">client login</h1>
                <hr/>
                <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address </Form.Label>
                        <Form.Control 
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={handleOnChange}
                        required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>password </Form.Label>
                        <Form.Control 
                        type="password"
                        name="password"
                        value={pass}
                        placeholder="enter password"
                        onChange={handleOnChange}
                        required
                        />
                    </Form.Group>
                    <Button  type="submit">login</Button>
                </Form>
                </Col>
            </Row>
            <hr/>
            <Row>
            <Col>
            <a onClick={() => formSwitcher('reset')} href="#">Forget Password</a>
            </Col>
            </Row>
        </Container>
    )
}
