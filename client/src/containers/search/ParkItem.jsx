import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./ParkItem.css";
function ParkItem(props) {
    const history = useHistory();

    const handleClick = async (event) => {
        event.preventDefault();
        const id = event.target.value
        await axios
            .get(
                `/api/parks?park_id=${id}`,
                {
                    withCredentials: true
                }
            )
            .then((response) => {
                history.push(`/park/${id}`);
                console.log(id)
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (

        <div className="parkItem">
            <Card className="resultCard" bg="secondary">
            <Card.Title>{props.park.name}</Card.Title>
            <Card.Text>
                {props.park.description}
            </Card.Text>
            <Button bsPrefix="viewButton" value={props.park._id} onClick={handleClick} variant="warning">View Details</Button>
            </Card>
        </div>

    )
}

export default ParkItem;