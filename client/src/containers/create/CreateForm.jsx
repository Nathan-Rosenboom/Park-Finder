import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./CreateForm.css";

function CreateForm() {
  return (
    <Card className="formCard">
      <Card.Title>Add a Park</Card.Title>
      <Card.Body>
        <Form>
          <Form.Group controlId="SearchForm">
            <Form.Label>Search for park by:</Form.Label>
            <Form.Control as="select">
              <option>Name</option>
              <option>Address</option>
            </Form.Control>
            <Form.Control className="formInput" type="text" placeholder="" />
          </Form.Group>
          <Form.Label>Filter Results</Form.Label>
            <div key="inline-checkbox" className="mb-3">
              <Form.Check
                inline
                label="Playground"
                type="checkbox"
                id="inline-checkbox-1"
              />
              <Form.Check
                inline
                label="Pets Allowed"
                type="checkbox"
                id="inline-checkbox-2"
              />
              <Form.Check
                inline
                label="Exercise Facilities"
                type="checkbox"
                id="inline-checkbox-3"
              />
              <Form.Check
                inline
                label="Toilets"
                type="checkbox"
                id="inline-checkbox-4"
              />
            </div>
          <Button variant="secondary" type="submit">
            Search
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default CreateForm;