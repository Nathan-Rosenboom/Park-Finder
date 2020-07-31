import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import ParkModal from "./ParkModal";
import "./ParkItem.css";

function ParkItem(props) {
    const [modalShow, setModalShow] = React.useState(false);
    
    return (

        <div className="parkItem">
            <Card className="resultCard" bg="secondary">
            <Card.Title>{props.park.name}</Card.Title>
            <Card.Text>
                {props.park.description}
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