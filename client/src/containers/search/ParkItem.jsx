import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./ParkItem.css";
function ParkItem(props) {
    const history = useHistory();
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
            .get(`http://localhost:3001/api/comments?post_id=${props.park._id}`)
            .then((response) => {
                setComments(response.data.data);
            });
    };

    const handleClick = async (event) => {
        event.preventDefault();
  
        const response = await axios
            .get(
                `http://localhost:3001/api/parks?park_id=${props.park._id}`,
                {
                    withCredentials: true
                }
            )
            .then((response) => {
                history.push(`/parks/:${response._id}`);
                console.log(response)
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
            <Button bsPrefix="viewButton" onClick={handleClick} variant="warning">View Details</Button>
            </Card>
        </div>

    )
}

export default ParkItem;