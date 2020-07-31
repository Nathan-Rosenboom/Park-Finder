import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import ParkItem from "./ParkItem";
import SearchForm from "./SearchForm";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ParkContainer.css";

function ParkContainer(props) {
  const [parks, setParks] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("/api/parks", {
        withCredentials: true,
      })
      .then((response) => {
        setParks(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log({ err });
        if (err.response.status === 401) {
        }
      });
  }, []);
  const filteredParks = parks.filter((park) => {
    return park.name.toLowerCase() === search;
  });

  return (
    <div className="park">
      <Card className="formCard">
        <Card.Title className="formTitle">Search</Card.Title>
        <Card.Body>
          <Form>
            <Form.Group controlId="SearchForm">
              <Form.Label>Search for Park:</Form.Label>
              <Form.Control
                onChange={(event) => setSearch(event.target.value)}
                className="formInput"
                type="text"
                placeholder="Enter Query"
              />
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
      <Card bsPrefix="mainCard">
        <Card.Title className="parkTitle">Parks</Card.Title>
        {parks.map((park, index) => (
          <ParkItem
            className="parkItem"
            parkIndex={index}
            key={park._id}
            park={park}
          ></ParkItem>
        ))}
      </Card>
    </div>
  );
}
export default ParkContainer;
