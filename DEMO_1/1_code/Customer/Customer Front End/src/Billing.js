import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';

function Billing() {
    return (

        <Form>
            <h1> Your Current Bill is: $215.00</h1>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Credit Card</Form.Label>
                <Form.Control type="email" placeholder="1234-1234-1234-1234" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>CVC</Form.Label>
                <Form.Control type="password" placeholder="000" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Exp date</Form.Label>
                <Form.Control type="password" placeholder="01/00" />
            </Form.Group>
            <>
                <Button as="input" type="submit" value="Pay Now!" />{' '}
            </>
        </Form>
    );
}
export default Billing;