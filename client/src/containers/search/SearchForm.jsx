import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./SearchForm.css";

function SearchForm(props) {

  

  return (
    <Card className="formCard">
      <Card.Title className="formTitle">Search</Card.Title>
      <Card.Body>
        <Form>
          <Form.Group controlId="SearchForm">
            <Form.Label>Search for Park:</Form.Label>
            <Form.Control className="formInput" type="text" placeholder="Enter Query" />
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

export default SearchForm;