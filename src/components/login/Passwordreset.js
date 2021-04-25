
import React from 'react'
import PropTypes from 'prop-types'; 
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image';

export const Passwordreset = ({handleOnChange,handleOnResetSubmit,formSwitcher,email}) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-info text-center">Reset Password</h1>
                <hr/>
                <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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
                    
                    <Button  type="submit">login</Button>
                </Form>
                </Col>
            </Row>
            <hr/>
            <Row>
            <Col>
            <a href="#"  onClick={() => formSwitcher('login')}>Login Now!?</a>
            </Col>
            </Row>
        </Container>
    )
}
