import React, { useState } from 'react'
import { Redirect } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'

import { useHistory } from "react-router-dom";

function Signup() {

  //Hooks
  const history = useHistory()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [msg, setMsg] = useState('');

  const Signup = async (e) => {

    e.preventDefault();
    try {
      await axios.post('/user/signup/', {
        name: name,
        email: email,
        password: password,
        password2: password2
      });

      history.pushState('/login')

    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }

  //Component
  return (
    <Row className='justify-content-md-center'>

      <Col xs={12} md={6}>
        <Form onSubmit={Signup} className="mb-2">
          <h1>Sign Up</h1>
          <p className="has-text-centered">{msg}</p>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
            <Form.Text className="text-muted">
              Enter the name of the school.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password Confirm</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>

  );
}

export default Signup;