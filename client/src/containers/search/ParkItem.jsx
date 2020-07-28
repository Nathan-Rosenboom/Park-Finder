import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./ParkItem.css";
function ParkItem(props) {
    const [comments, setComments] = useState(null);


    const addComment = (comment) => {
        setComments([
            ...comments,
            comment
        ])
    };


    const toggleComments = (hide = false) => {
        if (hide) {
            return setComments(null);
        }
        axios
            .get(`http://localhost:3001/api/comments?post_id=${props.post._id}`)
            .then((response) => {
                setComments(response.data.data);
            });
    };

    return (

        <div className="parkItem">
            <Card bg="secondary">
            <Card.Title>{props.park.name}</Card.Title>
            <Card.Text>
                {props.park.description}
            </Card.Text>
            <Button variant="warning" href="">View Details</Button>
            </Card>
        </div>

    )
}

export default ParkItem;