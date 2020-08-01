import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import ParkItem from "./ParkItem";
import Form from "react-bootstrap/Form";
import "./ParkContainer.css";

function ParkContainer(props) {
  const [parks, setParks] = useState([]);
  const [filter, setFilter] = useState("");

  const searchData = (parks) => {
    let userSearch = parks;
    if (filter === "") {
        return userSearch;
    }
    let searchInput = filter.toLowerCase().trim();
    let searchResult = userSearch.filter((park) => park.name.toLowerCase().includes(searchInput) || park.streetAddress.toLowerCase().includes(searchInput) || park.city.toLowerCase().includes(searchInput));
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
              <Form.Control
                onChange={(event) => setFilter(event.target.value)}
                className="formInput"
                type="text"
                placeholder="Enter Query"
              />
            </Form.Group>
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
