import React from 'react';
import { Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';

class LoginForm extends React.Component {
  render() {
      return (
        <div>
            <div className="header-login-form">
                <h1>Remitt App</h1>
            </div>
            <Form className="login-form">
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1"></Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                </DropdownButton>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <a href="#">Forgot your password?</a>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
      );
  }
}

export default LoginForm; 