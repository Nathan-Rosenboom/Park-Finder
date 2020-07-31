import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./CreateForm.css";

function CreateForm(props) {
  const history = useHistory();

  const [errors, setErrors] = useState([]);

  const [payload, setPayload] = useState({});

  const handleChange = async (event) => {
    const type = event.target.name;

    setPayload({
      ...payload,
      [type]: event.target.value,
    });
  };

  const handleCheckbox = async (event) => {
    const type = event.target.name;
    if (event.target.value === "on") {
      event.target.value = true;
    } else {
      event.target.value = false;
    }
    setPayload({
      ...payload,
      [type]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    // call api to login
    axios
      .post("/api/parks", payload, {
        withCredentials: true,
      })
      .then((res) => {
        history.push("/parks");
        console.log("Submitted");
        alert("park added successfuly");
      })
      .catch((err) => {
        console.log(err.response);
        const errorMsg = err.response.data.errors((err) => err.msg);
        // failed to register
        setErrors([...errorMsg]);
      });
  };
  return (
    <Card className="formCard">
      <Card.Title>Add a Park</Card.Title>
      <Card.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="CreateForm">
            <Form.Control
              onChange={handleChange}
              name="name"
              className="formInput"
              type="text"
              placeholder="Park Name"
            />
          </Form.Group>
          <Form.Group controlId="CreateForm">
            <Form.Control
              onChange={handleChange}
              name="description"
              className="formInput"
              type="text"
              placeholder="Description"
              as="textarea"
            />
          </Form.Group>
          <Form.Group controlId="CreateForm">
            <Form.Control
              onChange={handleChange}
              name="streetAddress"
              className="formInput"
              type="text"
              placeholder="Street"
            />
          </Form.Group>
          <Form.Group controlId="CreateForm">
            <Form.Control
              onChange={handleChange}
              name="city"
              className="formInput"
              type="text"
              placeholder="City"
            />
          </Form.Group>
          <Form.Group controlId="CreateForm">
            <Form.Control name="state" as="select" onChange={handleChange}>
              <option value="Australian Capital Territory" name="state">Australian Capital Territory</option>
              <option value="New South Wales">New South Wales</option>
              <option value="Northern Territory">Nothern Territory</option>
              <option value="South Australia">South Australia</option>
              <option value="Tasmania">Tasmania</option>
              <option value="Queensland">Queensland</option>
              <option value="Victoria">Victoria</option>
              <option value="Western Australia">Western Australia</option>
            </Form.Control>
          </Form.Group>
          <Form.Label>Tags</Form.Label>
          <div key="inline-checkbox" className="mb-3">
            <Form.Check
              name="playground"
              inline
              label="Playground"
              type="checkbox"
              id="inline-checkbox-1"
              onChange={handleCheckbox}
            />
            <Form.Check
              name="petsAllowed"
              inline
              label="Pets Allowed"
              type="checkbox"
              id="inline-checkbox-2"
              onChange={handleCheckbox}
            />
            <Form.Check
              name="exerciseFacilites"
              inline
              label="Exercise Facilities"
              type="checkbox"
              id="inline-checkbox-3"
              onChange={handleCheckbox}
            />
            <Form.Check
              name="toilets"
              inline
              label="Toilets"
              type="checkbox"
              id="inline-checkbox-4"
              onChange={handleCheckbox}
            />
          </div>
          <Button onClick={onSubmit} variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default CreateForm;
