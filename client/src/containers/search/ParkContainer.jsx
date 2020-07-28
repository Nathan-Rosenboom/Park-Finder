import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import ParkItem from "./ParkItem";
import "./ParkContainer.css";

function ParkContainer(props) {

        const [parks, setParks] = useState([])
    
        useEffect(() => {
            axios.get('http://localhost:3001/api/parks', {
                withCredentials: true,
            })
                .then((response) => {
                    setParks(response.data.data)
                    console.log(response.data.data)
                }).catch((err) => {
                    console.log({err});
                    if(err.response.status === 401){
                        
                    }
                })
        }, [])
    return (
        <div className="park">
        <Card bsPrefix="mainCard">
            <Card.Title>Parks</Card.Title>
            {parks.map((park, index) => (
                    <ParkItem className="parkItem"
                        parkIndex={index} 
                        key={park._id} 
                        park={park} 
                    />
                ))}
        </Card>
        </div>
    )
}
export default ParkContainer;