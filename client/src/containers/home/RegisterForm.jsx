import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form  from "react-bootstrap/Form";
import Button  from "react-bootstrap/Button";
import axios from "axios";

import "./Login.css";
function RegisterForm() {
return (
<div className="Login">
      <Form onSubmit="">
        <Form.Group controlId="email" bssize="large">
          <Form.Label>Enter Email Address</Form.Label>
          <Form.Control
            autoFocus
            name="email"
            type="email"
            label="Email"
            onChange=""
          />
        </Form.Group>
        <Form.Group controlId="password" bssize="large">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            label="Password"
            onChange=""
            type="password"
          />
        </Form.Group>
        <Form.Group controlId="passwordCheck" bssize="large">
          <Form.Label>Re-enter Password</Form.Label>
          <Form.Control
            name="password"
            label="Password"
            onChange=""
            type="password"
          />
        </Form.Group>
        <Button block bssize="large" variant="secondary" type="submit">
          Sign-up
        </Button>
      </Form>
    </div>
)
}
export default RegisterForm;