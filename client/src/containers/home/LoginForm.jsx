import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form  from "react-bootstrap/Form";
import Button  from "react-bootstrap/Button";
import axios from "axios";

import "./Login.css";

function LoginForm() {
  const history = useHistory();

  const [errors, setErrors] = useState([]);

  const [payload, setPayload] = useState({});

  const handleChange = async (event) => {
      const type = event.target.name;

      // payload looks like: {
      //     email: '',
      //     password: '',
      // }
      setPayload({
          ...payload,
          [type]: event.target.value, // dynamically set the type of payload
      });
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      // call api to login

      const response = await axios
          .post(
              "http://localhost:3001/api/login",
              {
                  email: payload.email,
                  password: payload.password,
              },
              {
                  withCredentials: true
              }
          )
          .then((response) => {
              history.push("/parks");
          })
          .catch((err) => {
              // not authenticated
              console.log(err.response);
              if (err.response.data.errors) {
                  const errorMsg = err.response.data.errors.map(
                      (err) => err.msg
                  );
                  // failed to register
                  setErrors([...errorMsg]);
              } else {
                  setErrors(['Whoops please enter your credentials']);
              }
          });
  };

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" bssize="large">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            name="email"
            type="email"
            label="Email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="password" bssize="large">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            label="Password"
            onChange={handleChange}
            type="password"
          />
        </Form.Group>
        <Button block bssize="large" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
export default LoginForm;