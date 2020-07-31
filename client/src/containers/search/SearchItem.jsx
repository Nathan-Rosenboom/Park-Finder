import React from 'react';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

function SearchItem(props) {
  
    return (

        <div className="parkItem">
            <Card className="resultCard" bg="secondary">
            <Card.Title>{props.park.name}</Card.Title>
            <Card.Text>
                {props.park.description}
            </Card.Text>
            <Card.Text>Tags</Card.Text>
            <div key="inline-checkbox" className="mb-3">
              <Form.Check
                inline
                label="Playground"
                type="checkbox"
                id="inline-checkbox-1"
                value={props.park.playground}
              />
              <Form.Check
                inline
                label="Pets Allowed"
                type="checkbox"
                id="inline-checkbox-2"
                value={props.park.petsAllowed}
              />
              <Form.Check
                inline
                label="Exercise Facilities"
                type="checkbox"
                id="inline-checkbox-3"
                value={props.park.exerciseFacilities}
              />
              <Form.Check
                inline
                label="Toilets"
                type="checkbox"
                id="inline-checkbox-4"
                value={props.park.toilets}
              />
            </div>
            </Card>
        </div>

    )
}

export default SearchItem;