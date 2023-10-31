import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Image } from 'react-bootstrap';

import './login.css';

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Logout</title>
      </Helmet>
      <div className="container-fluid login-container">
        <div className="container mx-auto my-auto px-0 ">
          <div className="form-container">
              <div class="logo_box mx-auto text-center">
                    <Image src="/images/logo.png" fluid />
                </div>
                <h2 class="text-white text-center">Login to your Account</h2>
            <Form>
              <div className='form-input'>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="username" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="password" />
                </Form.Group>
              </div>
              <Button variant="success" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
