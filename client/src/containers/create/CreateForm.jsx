import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./CreateForm.css";

function CreateForm(props) {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [playground, setPlayground] = useState("");
    const [toilets, setToilets] = useState("");
    const [exerciseFacilities, setExerciseFacilities] = useState("");
    const [petsAllowed, setPetsAllowed] = useState("");

    const handleParkName = (event) => {
        setName(event.target.value)
    }

    const handleParkDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleParkStreetAddress = (event) => {
        setStreetAddress(event.target.value)
    }

    const handleParkCity = (event) => {
        setCity(event.target.value)
    }

    const handleParkState = (event) => {
        setState(event.target.value)
    }

    const handleParkPlayground = (event) => {
        setPlayground(event.target.value)
    }

    const handleParkToilets = (event) => {
        setToilets(event.target.value)
    }

    const handleParkExerciseFacilities = (event) => {
        setExerciseFacilities(event.target.value)
    }

    const handleParkPetsAllowed = (event) => {
        setPetsAllowed(event.target.value)
    }

    const createPark = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/api/parks', {
            name,
            description,
            streetAddress,
            city,
            state,
            playground,
            toilets,
            exerciseFacilities,
            petsAllowed
        }).then((response) => {
            const newPark = response.data.data;
            props.setParks([
                newPark,
                ...props.parks,
            ])
        });
    }
  return (
    <Card className="formCard">
      <Card.Title>Add a Park</Card.Title>
      <Card.Body>
        <Form onSubmit={createPark}>
          <Form.Group controlId="CreateForm">
            <Form.Control onChange={handleParkName} className="formInput" type="text" placeholder="Park Name" />
          </Form.Group>
          <Form.Group controlId="CreateForm">
            <Form.Control onChange={handleParkDescription} className="formInput" type="text" placeholder="Description" />
          </Form.Group>
          <Form.Group controlId="CreateForm">
            <Form.Control onChange={handleParkStreetAddress} className="formInput" type="text" placeholder="Street Address" />
          </Form.Group>
          <Form.Group controlId="CreateForm">
            <Form.Control onChange={handleParkCity} className="formInput" type="text" placeholder="City" />
          </Form.Group>
          <Form.Group controlId="CreateForm">
            <Form.Control onChange={handleParkState} className="formInput" type="text" placeholder="State" />
          </Form.Group>
          <Form.Label>Tags</Form.Label>
            <div key="inline-checkbox" className="mb-3">
              <Form.Check
                inline
                label="Playground"
                type="checkbox"
                id="inline-checkbox-1"
                onChange={handleParkPlayground}
              />
              <Form.Check
                inline
                label="Pets Allowed"
                type="checkbox"
                id="inline-checkbox-2"
                onChange={handleParkPetsAllowed}
              />
              <Form.Check
                inline
                label="Exercise Facilities"
                type="checkbox"
                id="inline-checkbox-3"
                onChange={handleParkExerciseFacilities}
              />
              <Form.Check
                inline
                label="Toilets"
                type="checkbox"
                id="inline-checkbox-4"
                onChange={handleParkToilets}
              />
            </div>
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default CreateForm;