import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Image } from 'react-bootstrap';

import useAuth from '../../hooks/useAuth';

import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login, isAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    const token = await login('username', 'password');
    setIsLoading(false);
    navigate('/');
  };
  if (!isAuth()) {
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
                <div className="form-input">
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
                <Button
                  variant="success"
                  type="button"
                  disabled={isLoading}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </>
    );
  }
  return <Navigate to={'/'} replace />;
};

export default Login;
