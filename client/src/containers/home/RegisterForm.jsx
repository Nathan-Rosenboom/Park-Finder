import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form  from "react-bootstrap/Form";
import Button  from "react-bootstrap/Button";
import axios from "axios";

import "./Login.css";
function RegisterForm() {

  const history = useHistory();

  const [errors, setErrors] = useState([]);

  const [payload, setPayload] = useState({});

  const handleChange = async (event) => {
      const type = event.target.name;

      setPayload({
          ...payload,
          [type]: event.target.value 
      })
  }

  const onSubmit = async (event) => {
      event.preventDefault();
      if(payload.password !== payload.password_again){
          return setErrors([
              'Passwords do not match!'
          ])
      }

      // call api to login
      axios.post("/api/register", payload, {
              withCredentials: true
          })
          .then((res) => {
              history.push("/parks");
              console.log("Submitted");

          })
          .catch((err) => {
              console.log(err.response);
              const errorMsg = err.response.data.errors.map(err => err.msg)
              // failed to register
              setErrors([...errorMsg]);
          });
  };
return (
<div className="Login">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="email" bssize="large">
          <Form.Label>Enter Email Address</Form.Label>
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
        <Form.Group controlId="passwordCheck" bssize="large">
          <Form.Label>Re-enter Password</Form.Label>
          <Form.Control
            name="password_again"
            label="Password"
            onChange={handleChange}
            type="password"
          />
        </Form.Group>
        <Button onClick={onSubmit} block bssize="large" variant="secondary" type="submit">
          Sign-up
        </Button>
      </Form>
    </div>
)
}
export default RegisterForm;