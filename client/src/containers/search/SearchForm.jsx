import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./SearchForm.css";

function SearchForm() {
  return (
    <Card>
      <Card.Title>Search</Card.Title>
      <Card.Body>
        <Form>
          <Form.Group controlId="SearchForm">
            <Form.Label>Search for park by:</Form.Label>
            <Form.Control as="select">
              <option>Name</option>
              <option>Address</option>
            </Form.Control>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Label>Filter Results</Form.Label>
          {["checkbox"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Playground"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Pets Allowed"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="Exercise Facilities"
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label="Toilets"
                type={type}
                id={`inline-${type}-4`}
              />
            </div>
          ))}
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SearchForm;