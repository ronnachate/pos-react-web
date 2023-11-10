import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Button, Form, Image } from 'react-bootstrap';

import useAuth from '../../hooks/useAuth';
import useForm from '../../hooks/useForm';

import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login, isAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e, data) => {
    try {
      setIsLoading(true);
      const token = await login(data.username, data.password);
      setIsLoading(false);
      navigate('/');
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  const validators = {
    username: {
      required: {
        value: true,
        message: 'username is required',
      },
      minimum: {
        value: 2, //minimum 2 characters
        message: 'username minimum 2 characters',
      },
    },
    password: {
      required: {
        value: true,
        message: 'password is required',
      },
      minimum: {
        value: 2, //minimum 2 characters
        message: 'password minimum 2 characters',
      },
    },
  };

  const { data, handleChange, handleSubmit, errors } = useForm({
    onSubmit: handleLogin,
    validators,
  });

  if (!isAuth()) {
    return (
      <HelmetProvider>
        <Helmet>
          <title>Logout</title>
        </Helmet>
        <div className="container-fluid login-container">
          <div className="container mx-auto my-auto px-0 ">
            <div className="form-container">
              <div className="logo_box mx-auto text-center">
                <Image src="/images/logo.png" fluid />
              </div>
              <h2 className="text-white text-center">Login to your Account</h2>
              <Form>
                <div className="form-input">
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="username"
                      isInvalid={errors?.username}
                      onChange={handleChange('username')}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="password"
                      isInvalid={errors?.password}
                      onChange={handleChange('password')}
                    />
                  </Form.Group>
                </div>
                <div className="text-center">
                  {Object.keys(errors).map((key) => (
                    <div className="text-danger" key={key}>
                      {errors[key]}
                    </div>
                  ))}
                </div>
                <Button
                  variant="success"
                  type="button"
                  disabled={isLoading}
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </HelmetProvider>
    );
  }
  return <Navigate to={'/'} replace />;
};

export default Login;
