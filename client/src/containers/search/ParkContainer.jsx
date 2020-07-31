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
  const [filter, setFilter] = useState("");
  const [results, setResults] = useState([])

  const searchData = (parks) => {
    let userSearch = parks;
    if (filter === "") {
        return userSearch;
    }
    let searchInput = filter.toLowerCase().trim();
    let searchResult = userSearch.filter((park) => park.name.toLowerCase().includes(searchInput) || park.streetAddress.toLowerCase().includes(searchInput));
    return searchResult;
  }
    
  useEffect(() => {
    axios
      .get("/api/parks", {
        withCredentials: true,
      })
      .then((response) => {
        setParks(response.data.data);
        console.log(response.data.data);
        let parkdata = response.data.data
        return parkdata
      })
      .catch((err) => {
        console.log({ err });
        if (err.response.status === 401) {
        }
      });
  }, []);

  return (
    <div className="park">
      <Card className="formCard">
        <Card.Title className="formTitle">Search</Card.Title>
        <Card.Body>
          <Form>
            <Form.Group controlId="SearchForm">
              <Form.Label>Search for Park:</Form.Label>
              <Form.Control
                onChange={(event) => setFilter(event.target.value)}
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
          </Form>
        </Card.Body>
      </Card>
      <Card bsPrefix="mainCard">
  <Card.Title className="parkTitle">Parks for you</Card.Title>
        {searchData(parks).map((park, index) => (
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
