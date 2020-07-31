import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ParkModal from "./ParkModal";
import "./ParkItem.css";

function ParkItem(props) {
    const [modalShow, setModalShow] = React.useState(false);
    let toilets = props.park.toilets.toString();
  let playground = props.park.playground.toString();
  let exerciseFacilities = props.park.exerciseFacilities.toString();
  let petsAllowed = props.park.petsAllowed.toString();
  let colourClass = "red";
  let toiletIcon = "";
  if (toilets === "true") {
    toiletIcon = "far fa-check-circle";
    colourClass = "green"
  } else {
    toiletIcon = "far fa-times-circle";
  }

  let playgroundIcon = "";
  if (playground === "true") {
    playgroundIcon = "far fa-check-circle";
    colourClass = "green"
  } else {
    playgroundIcon = "far fa-times-circle";
  }

  let petsAllowedIcon = "";
  if (petsAllowed === "true") {
    petsAllowedIcon = "far fa-check-circle";
    colourClass = "green"
  } else {
    petsAllowedIcon = "far fa-times-circle";
  }

  let exerciseFacilitiesIcon = "";
  if (exerciseFacilities === "true") {
    exerciseFacilitiesIcon = "far fa-check-circle";
    colourClass = "green"
  } else {
    exerciseFacilitiesIcon = "far fa-times-circle";
  }
    
    return (

        <div className="parkItem">
            <Card className="resultCard" bg="secondary">
            <Card.Title>{props.park.name}</Card.Title>
            <Card.Text>
                <p>{props.park.streetAddress}, {props.park.city}, {props.park.state}</p>
            </Card.Text>
            <Button bsPrefix="viewButton" value={props.park._id} onClick={() => setModalShow(true)} variant="warning">View Details</Button>
            <ParkModal  
                        key={props.park._id} 
                        name={props.park.name}
                        description={props.park.description}
                        streetAddress={props.park.streetAddress}
                        city={props.park.city}
                        state={props.park.state}
                        playground={props.park.playground}
                        toilets={props.park.toilets}
                        exerciseFacilities={props.park.exerciseFacilities}
                        petsAllowed={props.park.petsAllowed}
                         show={modalShow} onHide={() => setModalShow(false)} />

            </Card>
        </div>

    )
}

export default ParkItem;